import { SanityDocument } from "sanity-codegen";

export function filterDataToSingleItem<T extends SanityDocument>(data?: T[]) {
  if (!data) return;
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  return data.find((item) => item._id.startsWith(`drafts.`)) ?? data[0];
}

export function includeDraftId(id: string) {
  return [id, `drafts.${id}`];
}
