import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_PAGE_0, graphQLClient } from "../../../../../graphql";
import { CREATE_PAGE_0_FOOD } from "../../../../../graphql/mutate/page";
import { CreatePage, Page } from "../../../../../interfaces";

export const useCreatePage0Food = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (input: CreatePage) => {
      const { createPage0Food } = await graphQLClient.request<{ createPage0Food: Page }>(CREATE_PAGE_0_FOOD, {
        input,
      });
      return createPage0Food;
    },
    {
      onSuccess: async (createPage0Food) => {
        const parentId = createPage0Food.parentId
        queryClient.setQueryData<Page[]>(["find-pages0-food-by-parent-id", parentId], (old) => [...old!, createPage0Food]);
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