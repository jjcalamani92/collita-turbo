import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_PAGE_1_FOOD, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";


export const useDeletePage1Food = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage1Food } = await graphQLClient.request<{ deletePage1Food: string }>(DELETE_PAGE_1_FOOD, {
        id,
      });
      return deletePage1Food;
    },
    {
      onSuccess: (deletePage1Food) => {
        queryClient.setQueryData<Page[]>(["find-pages1-food-by-parent-id", parentId], (old) => old!.filter((page) => page._id !== deletePage1Food))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};