import { useQuery } from "@tanstack/react-query";
import { graphQLClient } from "../../../../graphql/graphQLClient";
import { FIND_SITES_WEAR } from "../../../../graphql/query/site/site.wear.query";
import { Site } from "../../../../interfaces/site.interface";

export const findSitesWear = async () => {
  const { findSitesWear } = await graphQLClient.request<{
    findSitesWear: Site[];
  }>(FIND_SITES_WEAR);
  return findSitesWear;
};

export function useSitesWear() {
  return useQuery(["find-sites-wear"], () => findSitesWear());
}
