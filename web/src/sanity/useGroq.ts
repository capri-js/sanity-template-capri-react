import useSWR from "swr";
import { client } from ".";

export function useGroq<T>(query: string, params: Record<string, any> = {}) {
  const key = JSON.stringify({ query, params });
  const { data } = useSWR<T>(key, () => client.fetch(query, params), {
    suspense: true,
  });
  return data;
}
