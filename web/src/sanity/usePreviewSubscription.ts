import { GroqStore, Subscription } from "@sanity/groq-store";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    let sub: Subscription | undefined = undefined;
    let store: GroqStore | undefined = undefined;

    async function createStore() {
      const { groqStore } = await import("@sanity/groq-store");
      store = groqStore({
        ...config,
        listen: true,
        overlayDrafts: true,
        documentLimit: 1000,
      });

      sub = store.subscribe<T[]>(query, params ?? {}, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        setData(filterDataToSingleItem(result));
      });
    }

    if (!store) {
      createStore();
    }

    return () => {
      if (sub?.unsubscribe()) sub.unsubscribe();
      if (store) store.close();
    };
  }, [query, JSON.stringify(params)]);

  return { data };
}
