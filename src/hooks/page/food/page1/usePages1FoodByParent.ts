import { useQuery } from "@tanstack/react-query";
import {  FIND_PAGES_1_FOOD_BY_PARENT_ID, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPages1FoodByParentId = async (parentId:string) => {
  const { findPages1FoodByParentId } = await graphQLClient.request<{findPages1FoodByParentId: Page[]}>(FIND_PAGES_1_FOOD_BY_PARENT_ID, {parentId: parentId});
  return findPages1FoodByParentId;
};

export function usePages1FoodByParentId(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[5]
  return useQuery(["find-pages1-food-by-parent-id", parentId], () => findPages1FoodByParentId(parentId));
}
