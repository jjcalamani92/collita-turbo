import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_FOOD } from "../../../../graphql";
import { Food, UpdateFood } from "../../../../interfaces";


export const useUpdateProductFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input, type}:UpdateFood) => {
      const { updateProductFood } = await graphQLClient.request<{ updateProductFood: Food }>(UPDATE_FOOD, {
        id,
        input,
        type
      });
      return updateProductFood;
    },
    {
      onSuccess: async (updateFood, {id, type}) => {
        queryClient.setQueryData(['find-product-food', id, type], updateFood);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Food",
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
