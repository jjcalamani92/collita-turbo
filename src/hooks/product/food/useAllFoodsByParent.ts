import { useQuery } from "@tanstack/react-query";
import { Food, Product } from "../../../../interfaces";
import { getQuery } from "../../../utils";
import { FIND_ALL_FOODS_BY_PARENT, graphQLClient } from '../../../../graphql';

export const findAllProductsFoodByParent = async (parentId:string) => {
  const { findAllProductsFoodByParent } = await graphQLClient.request<{ findAllProductsFoodByParent: Food[] }>(FIND_ALL_FOODS_BY_PARENT, {parentId: parentId});
  return findAllProductsFoodByParent;
};

export function useAllFoodsByParent(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[5]
  return useQuery(["find-all-products-food-by-parent-id", parentId], () => findAllProductsFoodByParent(parentId));
}
