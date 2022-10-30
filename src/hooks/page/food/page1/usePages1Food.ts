import { useQuery } from "@tanstack/react-query";
import { FIND_PAGES_1_FOOD, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";



export const findPages1Food = async () => {
  const { findPages1Food } = await graphQLClient.request<{findPages1Food:Page[]}>(FIND_PAGES_1_FOOD);
  return findPages1Food;
};

export function usePages1Food() {
  return useQuery(["find-pages1-food"], () => findPages1Food());
}
