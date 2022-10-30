import { useQuery } from "@tanstack/react-query";
import {
  FIND_PAGES_0_WEAR_BY_PARENT_ID,
  graphQLClient,
} from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";

export const findPages0WearByParentId = async (parentId: string) => {
  const { findPages0WearByParentId } = await graphQLClient.request<{
    findPages0WearByParentId: Page[];
  }>(FIND_PAGES_0_WEAR_BY_PARENT_ID, { parentId: parentId });
  return findPages0WearByParentId;
};

export function usePages0WearByParentId(asPath: string) {
  const query = getQuery(asPath);
  const parentId = query[3];
  return useQuery(["find-pages0-wear-by-parent-id", parentId], () =>
    findPages0WearByParentId(parentId)
  );
}
