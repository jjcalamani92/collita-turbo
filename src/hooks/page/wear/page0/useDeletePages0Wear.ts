import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_PAGES_0_WEAR, graphQLClient } from "../../../../../graphql";
import {  DeletePages, Page } from "../../../../../interfaces"; 



export const useDeletePages0Wear = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages0Wear } = await graphQLClient.request<{deletePages0Wear: string[]}>(DELETE_PAGES_0_WEAR, {
        ids
      });
      return deletePages0Wear;
    },
    {
      onSuccess:  (deletePages0Wear) => {
        queryClient.setQueryData<Page[]>(["find-pages0-wear-by-parent-id", parentId],  (old) => old!.filter((page) => deletePages0Wear.indexOf(page._id) < 0));
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

