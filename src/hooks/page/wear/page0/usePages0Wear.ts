import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0_WEAR, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";



export const findPages0Wear = async () => {
  const { findPages0Wear } = await graphQLClient.request<{findPages0Wear:Page[]}>(FIND_PAGES_0_WEAR);
  return findPages0Wear;
};

export function usePages0Wear() {
  return useQuery(["find-pages0-wear"], () => findPages0Wear());
}
