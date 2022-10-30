import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_1_WEAR, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";



export const findPages1Wear = async () => {
  const { findPages1Wear } = await graphQLClient.request<{findPages1Wear:Page[]}>(FIND_PAGES_1_WEAR);
  return findPages1Wear;
};

export function usePages1Wear() {
  return useQuery(["find-pages1-wear"], () => findPages1Wear());
}
