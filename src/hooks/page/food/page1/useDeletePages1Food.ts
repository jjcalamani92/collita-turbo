import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {   graphQLClient, DELETE_PAGES_1_FOOD } from "../../../../../graphql";
import {  DeletePages, Page,  } from "../../../../../interfaces"; 



export const useDeletePages1Food = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages1Food } = await graphQLClient.request<{deletePages1Food: string[]}>(DELETE_PAGES_1_FOOD, {
        ids
      });
      return deletePages1Food;
    },
    {
      onSuccess:  (deletePages1Food) => {
        queryClient.setQueryData<Page[]>(["find-pages1-food-by-parent-id", parentId],  (old) => old!.filter((page) => deletePages1Food.indexOf(page._id) < 0));
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

