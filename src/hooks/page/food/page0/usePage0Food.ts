import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_PAGE_0_FOOD, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage0Food = async (pageId:string) => {
  const { findPage0Food } = await graphQLClient.request<{findPage0Food: Page}>(FIND_PAGE_0_FOOD, {id: pageId});
  return findPage0Food;
};

export function usePage0Food(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[5]
  return useQuery(["find-page0-food", pageId], () => findPage0Food(pageId));
}
