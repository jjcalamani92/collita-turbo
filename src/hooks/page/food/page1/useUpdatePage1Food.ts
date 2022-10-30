import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_PAGE_1_FOOD } from "../../../../../graphql";
import { Page, UpdatePage } from "../../../../../interfaces";

export const useUpdatePage1Food = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage1Food } = await graphQLClient.request<{ updatePage1Food: Page } >(UPDATE_PAGE_1_FOOD, {
        id,
        input,
      });
      return updatePage1Food;
    },
    {
      onSuccess: async (updatePage1Food, {id}) => {
        const pageId = id
        queryClient.setQueryData(['find-page1-food', pageId], updatePage1Food);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Page",
          showConfirmButton: false,
          timer: 1000,
        });
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