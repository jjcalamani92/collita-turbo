import { useQuery } from "@tanstack/react-query";
import { FIND_PAGE_1_WEAR, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage1Wear = async (pageId:string) => {
  const { findPage1Wear } = await graphQLClient.request<{findPage1Wear: Page}>(FIND_PAGE_1_WEAR, {id: pageId});
  return findPage1Wear;
};

export function usePage1Wear(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[5]
  return useQuery(["find-page1-wear", pageId], () => findPage1Wear(pageId));
}
