import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_IMAGE_PAGE_1_WEAR } from "../../../../../graphql";
import { Page, UpdateImagePage } from "../../../../../interfaces";


export const useUpdatePage1WearImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputImage, uid}:UpdateImagePage) => {
      const { updateImagePage1Wear } = await graphQLClient.request<{ updateImagePage1Wear:Page }>(UPDATE_IMAGE_PAGE_1_WEAR, {
        id,
        inputImage,
        uid,
      });
      return updateImagePage1Wear;
    },
    {
      onSuccess: async (updateImagePage1Wear, {id}) => {
        const pageId = id
        queryClient.setQueryData(['find-page1-wear', pageId], updateImagePage1Wear);
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
