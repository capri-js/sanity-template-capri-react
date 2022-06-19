import "isomorphic-fetch";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const config = {
  projectId: "<#< sanity.projectId >#>",
  dataset: "<#< sanity.dataset >#>",
};

export const client = sanityClient({
  ...config,
  useCdn: false,
  withCredentials: true,
  apiVersion: "2022-01-31",
});

export const urlBuilder = imageUrlBuilder(config);
