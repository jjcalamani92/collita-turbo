import { useQuery } from "@tanstack/react-query";
import { FIND_ALL_FOODS, FIND_ALL_PRODUCTS } from "../../../../graphql";
import { graphQLClient } from "../../../../graphql/graphQLClient";
import { Food, Product } from "../../../../interfaces";
import { Site } from "../../../../interfaces/site.interface";



export const findAllProductsFood = async () => {
  const { findAllProductsFood } = await graphQLClient.request<{ findAllProductsFood: Food[] }>(FIND_ALL_FOODS);
  return findAllProductsFood;
};

export function useAllFoods() {
  return useQuery(["find-all-products-food"], () => findAllProductsFood());
}
