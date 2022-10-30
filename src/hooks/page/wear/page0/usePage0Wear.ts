import { useQuery } from "@tanstack/react-query";
import { FIND_PAGE_0_WEAR, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage0Wear = async (pageId:string) => {
  const { findPage0Wear } = await graphQLClient.request<{findPage0Wear: Page}>(FIND_PAGE_0_WEAR, {id: pageId});
  return findPage0Wear;
};

export function usePage0Wear(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[5]
  return useQuery(["find-page0-wear", pageId], () => findPage0Wear(pageId));
}
