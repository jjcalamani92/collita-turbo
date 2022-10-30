import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import {
  FIND_PAGES_0_FOOD_BY_PARENT_ID,
  graphQLClient,
} from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";

export const findPages0FoodByParentId = async (parentId: string) => {
  const { findPages0FoodByParentId } = await graphQLClient.request<{
    findPages0FoodByParentId: Page[];
  }>(FIND_PAGES_0_FOOD_BY_PARENT_ID, { parentId: parentId });
  return findPages0FoodByParentId;
};

export function usePages0FoodByParentId(asPath: string) {
  const query = getQuery(asPath);
  const parentId = query[3];
  return useQuery(["find-pages0-food-by-parent-id", parentId], () =>
    findPages0FoodByParentId(parentId)
  );
}
