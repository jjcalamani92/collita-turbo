import { useQuery } from "@tanstack/react-query";
import { FIND_FOOD, FIND_PRODUCT, graphQLClient } from "../../../../graphql";
import { Food, Product } from "../../../../interfaces";
import { getQuery } from "../../../utils";


export const findProductFood = async (id:string, type:string) => {
  const { findProductFood } = await graphQLClient.request<{ findProductFood: Food } >(
    FIND_FOOD,
    { id: id, type: type }
  );
  return findProductFood;
};

export function useProductFood(asPath: string) {
  const query = getQuery(asPath)
  const id = query[6]
  const type = query[5]
  return useQuery(["find-product-food", id, type],  () => findProductFood(id, type));
}
