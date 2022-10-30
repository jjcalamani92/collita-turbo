import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_IMAGE_PAGE_1_FOOD } from "../../../../../graphql";
import { Page, UpdateImagePage } from "../../../../../interfaces";


export const useUpdatePage1FoodImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputImage, uid}:UpdateImagePage) => {
      const { updateImagePage1Food } = await graphQLClient.request<{ updateImagePage1Food:Page }>(UPDATE_IMAGE_PAGE_1_FOOD, {
        id,
        inputImage,
        uid,
      });
      return updateImagePage1Food;
    },
    {
      onSuccess: async (updateImagePage1Food, {id}) => {
        const pageId = id
        queryClient.setQueryData(['find-page1-food', pageId], updateImagePage1Food);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Image Page",
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
