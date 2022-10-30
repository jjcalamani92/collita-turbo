import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_PAGE_1_WEAR } from "../../../../../graphql";
import { Page, UpdatePage } from "../../../../../interfaces";

export const useUpdatePage1Wear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ id, input }:  UpdatePage) => {
      const { updatePage1Wear } = await graphQLClient.request<{ updatePage1Wear: Page } >(UPDATE_PAGE_1_WEAR, {
        id,
        input,
      });
      return updatePage1Wear;
    },
    {
      onSuccess: async (updatePage1Wear, {id}) => {
        const pageId = id
        queryClient.setQueryData(['find-page1-wear', pageId], updatePage1Wear);
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