import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { client } from ".";
import { Page } from "./schema";
import { usePreviewSubscription } from "./usePreviewSubscription";

const pageQuery = `*[_type == "Page" && slug.current == $slug]`;

export async function fetchPage(slug: string) {
  const [page] = await client.fetch<Page[]>(pageQuery, { slug });
  return page;
}

export function usePageData() {
  const location = useLocation();
  const slug = location.pathname;
  const { data: initialData } = useSWR(slug, fetchPage, {
    suspense: true,
  });
  const { data } = usePreviewSubscription(pageQuery, {
    initialData,
    params: { slug },
  });
  return data;
}
