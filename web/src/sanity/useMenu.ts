import { SanityDocument } from "@sanity/client";
import { filterDataToSingleItem, includeDraftId } from "./utils";
import { useGroq } from "./useGroq";

const menuQuery = `*[_type == "Menu" && _id in $ids]{
    _id, 
    items[] -> {
        "slug": slug.current,
        title
    }
}`;

interface DereferencedMenu extends SanityDocument {
  items: Array<{
    slug: string;
    title: string;
  }>;
}

export function useMenu(id = "main") {
  const data = useGroq<DereferencedMenu[]>(menuQuery, {
    ids: includeDraftId(id),
  });
  const menu = filterDataToSingleItem(data);
  return menu?.items ?? [];
}
