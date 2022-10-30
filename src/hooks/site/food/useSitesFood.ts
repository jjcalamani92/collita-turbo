import { useQuery } from "@tanstack/react-query";
import { FIND_SITES_FOOD } from "../../../../graphql";
import { graphQLClient } from "../../../../graphql/graphQLClient";
import { FIND_SITES_WEAR } from "../../../../graphql/query/site/site.wear.query";
import { Site } from "../../../../interfaces/site.interface";

export const findSitesFood = async () => {
  const { findSitesFood } = await graphQLClient.request<{
    findSitesFood: Site[];
  }>(FIND_SITES_FOOD);
  return findSitesFood;
};

export function useSitesFood() {
  return useQuery(["find-sites-food"], () => findSitesFood());
}
