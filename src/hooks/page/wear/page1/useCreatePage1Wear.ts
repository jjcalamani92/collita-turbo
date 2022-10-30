import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_PAGE_1_WEAR, graphQLClient } from "../../../../../graphql";
import { CreatePage, Page } from "../../../../../interfaces";

export const useCreatePage1Wear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage1Wear } = await graphQLClient.request<{ createPage1Wear: Page }>(CREATE_PAGE_1_WEAR, {
        input,
      });
      return createPage1Wear;
    },
    {
      onSuccess: async (createPage1Wear) => {
        const parentId = createPage1Wear.parentId
        queryClient.setQueryData<Page[]>(["find-pages1-wear-by-parent-id", parentId], (old) => [...old!, createPage1Wear]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Page",
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