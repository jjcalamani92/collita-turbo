import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {   graphQLClient, DELETE_PAGES_1_WEAR } from "../../../../../graphql";
import {  DeletePages, Page,  } from "../../../../../interfaces"; 



export const useDeletePages1Wear = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages1Wear } = await graphQLClient.request<{deletePages1Wear: string[]}>(DELETE_PAGES_1_WEAR, {
        ids
      });
      return deletePages1Wear;
    },
    {
      onSuccess:  (deletePages1Wear) => {
        queryClient.setQueryData<Page[]>(["find-pages1-wear-by-parent-id", parentId],  (old) => old!.filter((page) => deletePages1Wear.indexOf(page._id) < 0));
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

