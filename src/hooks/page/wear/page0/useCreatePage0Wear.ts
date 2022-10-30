import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, CREATE_PAGE_0_WEAR } from "../../../../../graphql";
import { CreatePage, Page } from "../../../../../interfaces";

export const useCreatePage0Wear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage0Wear } = await graphQLClient.request<{ createPage0Wear: Page }>(CREATE_PAGE_0_WEAR, {
        input,
      });
      return createPage0Wear;
    },
    {
      onSuccess: async (createPage0Wear) => {
        const parentId = createPage0Wear.parentId
        queryClient.setQueryData<Page[]>(["find-pages0-wear-by-parent-id", parentId], (old) => [...old!, createPage0Wear]);
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