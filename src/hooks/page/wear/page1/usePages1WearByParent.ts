import { useQuery } from "@tanstack/react-query";
import {  FIND_PAGES_1_WEAR_BY_PARENT_ID, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";
import { getQuery } from "../../../../utils";



export const findPages1WearByParentId = async (parentId:string) => {
  const { findPages1WearByParentId } = await graphQLClient.request<{findPages1WearByParentId: Page[]}>(FIND_PAGES_1_WEAR_BY_PARENT_ID, {parentId: parentId});
  return findPages1WearByParentId;
};

export function usePages1WearByParentId(asPath: string) {
  const query = getQuery(asPath)
  const parentId = query[5]
  return useQuery(["find-pages1-wear-by-parent-id", parentId], () => findPages1WearByParentId(parentId));
}
