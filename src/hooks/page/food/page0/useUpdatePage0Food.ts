import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UPDATE_PAGE_0, graphQLClient } from "../../../../../graphql";
import { UPDATE_PAGE_0_FOOD } from "../../../../../graphql/mutate/page";
import { CreatePage, Page, UpdatePage } from "../../../../../interfaces";

export const useUpdatePage0Food = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage0Food } = await graphQLClient.request<{ updatePage0Food: Page } >(UPDATE_PAGE_0_FOOD, {
        id,
        input,
      });
      return updatePage0Food;
    },
    {
      onSuccess: async (updatePage0Food, {id}) => {
        const pageId = id
        queryClient.setQueryData(['find-page0-food', pageId], updatePage0Food);
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