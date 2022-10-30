import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_SITES_WEAR, FIND_SITE_FOOD, FIND_SITE_FOOD_BY_LAYOUT, FIND_SITE_WEAR, FIND_SITE_WEAR_BY_LAYOUT } from "../../../../graphql";
import { graphQLClient } from "../../../../graphql/graphQLClient";
import { Site } from "../../../../interfaces";
import { getQuery } from "../../../utils/function";



export const findSiteFood = async (siteId:String) => {
  const { findSiteFood } = await graphQLClient.request<{findSiteFood: Site}>(FIND_SITE_FOOD, {id: siteId});
  return findSiteFood;
};

export function useSiteFood(asPath: string) {
  const query = getQuery(asPath)
  const siteId = query[3]
  return useQuery(["find-site-food", siteId], () => findSiteFood(siteId!));
}

export const findSiteFoodByLayout = async (siteId:String) => {
  const { findSiteFood } = await graphQLClient.request<{findSiteFood: Site}>(FIND_SITE_FOOD_BY_LAYOUT, {id: siteId});
  return findSiteFood;
};

export function useSiteFoodByLayout(asPath: string) {
  const query = getQuery(asPath)
  const siteId = query[3]
  return useQuery(["find-site-food-by-layout", siteId], () => findSiteFoodByLayout(siteId!));
}
