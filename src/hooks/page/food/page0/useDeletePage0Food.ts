import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_PAGE_0, DELETE_PAGE_0, graphQLClient } from "../../../../../graphql";
import { DELETE_PAGE_0_FOOD } from "../../../../../graphql/mutate/page";
import { CreatePage, Page } from "../../../../../interfaces";


export const useDeletePage0Food = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage0Food } = await graphQLClient.request<{ deletePage0Food: string }>(DELETE_PAGE_0_FOOD, {
        id,
      });
      return deletePage0Food;
    },
    {
      onSuccess: (deletePage0Food) => {
        queryClient.setQueryData<Page[]>(["find-pages0-food-by-parent-id", parentId], (old) => old!.filter((page) => page._id !== deletePage0Food))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
        )
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    }
  );
};