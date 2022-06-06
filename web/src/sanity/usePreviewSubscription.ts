import { GroqStore } from "@sanity/groq-store";
import { useEffect, useRef, useState } from "react";
import { SanityDocument } from "sanity-codegen";

import { config } from ".";
import { filterDataToSingleItem } from "./utils";

export function usePreviewSubscription<T extends SanityDocument>(
  query: string,
  subscriptionOptions: {
    params?: Record<string, unknown>;
    initialData?: T;
  }
) {
  const { params, initialData } = subscriptionOptions;
  const [data, setData] = useState(initialData);
  const storeRef = useRef<GroqStore>();
  useEffect(() => {
    async function createStore() {
      const { groqStore } = await import("@sanity/groq-store");
      storeRef.current = groqStore({
        ...config,
        listen: true,
        overlayDrafts: true,
        documentLimit: 1000,
      });
    }
    createStore();
    return () => {
      if (storeRef.current) storeRef.current.close();
    };
  }, []);

  useEffect(() => {
    if (storeRef.current) {
      const sub = storeRef.current.subscribe<T[]>(
        query,
        params ?? {},
        (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          setData(filterDataToSingleItem(result));
        }
      );
      return () => {
        sub.unsubscribe();
      };
    }
  }, [query, JSON.stringify(params)]);

  return { data };
}
