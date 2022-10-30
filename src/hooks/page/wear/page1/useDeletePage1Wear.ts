import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_PAGE_1_WEAR, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";


export const useDeletePage1Wear = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage1Wear } = await graphQLClient.request<{ deletePage1Wear: string }>(DELETE_PAGE_1_WEAR, {
        id,
      });
      return deletePage1Wear;
    },
    {
      onSuccess: (deletePage1Wear) => {
        queryClient.setQueryData<Page[]>(["find-pages1-wear-by-parent-id", parentId], (old) => old!.filter((page) => page._id !== deletePage1Wear))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};