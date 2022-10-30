import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_0, FIND_PAGES_0_FOOD, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";



export const findPages0Food = async () => {
  const { findPages0Food } = await graphQLClient.request<{findPages0Food:Page[]}>(FIND_PAGES_0_FOOD);
  return findPages0Food;
};

export function usePages0Food() {
  return useQuery(["find-pages0-food"], () => findPages0Food());
}
