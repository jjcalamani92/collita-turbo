import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITE, graphQLClient, UPDATE_PRODUCT_FOOD_IMAGE, UPDATE_PRODUCT, UPDATE_PRODUCT_IMAGE, UPDATE_SITE } from "../../../../graphql";
import { Food, Site, UpdateProductImage, UpdateSite } from "../../../../interfaces";


export const useUpdateProductFoodImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputImage, type, uid}:UpdateProductImage) => {
      const { updateProductFoodImage } = await graphQLClient.request<{ updateProductFoodImage: Food }>(UPDATE_PRODUCT_FOOD_IMAGE, {
        id,
        inputImage,
        type,
        uid,
      });
      return updateProductFoodImage;
    },
    {
      onSuccess: async (updateProductFoodImage, {id, type}) => {
        queryClient.setQueryData(['find-product-food', id, type], updateProductFoodImage);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Image",
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
