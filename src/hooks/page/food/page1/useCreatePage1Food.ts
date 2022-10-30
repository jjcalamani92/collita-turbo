import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_PAGE_1_FOOD, graphQLClient } from "../../../../../graphql";
import { CreatePage, Page } from "../../../../../interfaces";

export const useCreatePage1Food = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage1Food } = await graphQLClient.request<{ createPage1Food: Page }>(CREATE_PAGE_1_FOOD, {
        input,
      });
      return createPage1Food;
    },
    {
      onSuccess: async (createPage1Food) => {
        const parentId = createPage1Food.parentId
        queryClient.setQueryData<Page[]>(["find-pages1-food-by-parent-id", parentId], (old) => [...old!, createPage1Food]);
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