import { useQuery } from "@tanstack/react-query";
import { FIND_PAGE_1_FOOD, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPage1Food = async (pageId:string) => {
  const { findPage1Food } = await graphQLClient.request<{findPage1Food: Page}>(FIND_PAGE_1_FOOD, {id: pageId});
  return findPage1Food;
};

export function usePage1Food(asPath:string) {
  const query = getQuery(asPath)
  const pageId = query[5]
  return useQuery(["find-page1-food", pageId], () => findPage1Food(pageId));
}
