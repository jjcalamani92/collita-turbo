import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {  DELETE_PAGES_0, DELETE_SITES,  graphQLClient } from "../../../../../graphql";
import { DELETE_PAGES_0_FOOD } from "../../../../../graphql/mutate/page";
import {  DeletePages, DeleteManySitesById, Page, Site,  } from "../../../../../interfaces"; 



export const useDeletePages0Food = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeletePages) => {
      const { deletePages0Food } = await graphQLClient.request<{deletePages0Food: string[]}>(DELETE_PAGES_0_FOOD, {
        ids
      });
      return deletePages0Food;
    },
    {
      onSuccess:  (deletePages0Food) => {
        queryClient.setQueryData<Page[]>(["find-pages0-food-by-parent-id", parentId],  (old) => old!.filter((page) => deletePages0Food.indexOf(page._id) < 0));
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

