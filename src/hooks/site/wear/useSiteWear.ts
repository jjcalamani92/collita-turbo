import { useQuery } from "@tanstack/react-query";
import { ParsedUrlQuery } from "querystring";
import { FIND_SITES_WEAR, FIND_SITE_WEAR, FIND_SITE_WEAR_BY_LAYOUT } from "../../../../graphql";
import { graphQLClient } from "../../../../graphql/graphQLClient";
import { Site } from "../../../../interfaces";
import { getQuery } from "../../../utils/function";



export const findSiteWear = async (siteId:String) => {
  const { findSiteWear } = await graphQLClient.request<{findSiteWear: Site}>(FIND_SITE_WEAR, {id: siteId});
  return findSiteWear;
};

export function useSiteWear(asPath: string) {
  const query = getQuery(asPath)
  const siteId = query[3]
  return useQuery(["find-site-wear", siteId], () => findSiteWear(siteId!));
}

export const findSiteWearByLayout = async (siteId:String) => {
  const { findSiteWear } = await graphQLClient.request<{findSiteWear: Site}>(FIND_SITE_WEAR_BY_LAYOUT, {id: siteId});
  return findSiteWear;
};

export function useSiteByWearLayout(asPath: string) {
  const query = getQuery(asPath)
  const siteId = query[3]
  return useQuery(["find-site-wear-by-layout", siteId], () => findSiteWearByLayout(siteId!));
}
