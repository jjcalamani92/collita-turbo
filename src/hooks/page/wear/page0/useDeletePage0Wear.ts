import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_PAGE_0_WEAR, graphQLClient } from "../../../../../graphql";
import { Page } from "../../../../../interfaces";


export const useDeletePage0Wear = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const { deletePage0Wear } = await graphQLClient.request<{ deletePage0Wear: string }>(DELETE_PAGE_0_WEAR, {
        id,
      });
      return deletePage0Wear;
    },
    {
      onSuccess: (deletePage0Wear) => {
        queryClient.setQueryData<Page[]>(["find-pages0-wear-by-parent-id", parentId], (old) => old!.filter((page) => page._id !== deletePage0Wear))
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