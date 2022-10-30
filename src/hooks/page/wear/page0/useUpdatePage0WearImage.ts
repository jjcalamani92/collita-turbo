import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient } from "../../../../../graphql";
import { UPDATE_IMAGE_PAGE_0_WEAR } from "../../../../../graphql/mutate/page";
import { Page, UpdateImagePage } from "../../../../../interfaces";


export const useUpdatePage0WearImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputImage, uid}:UpdateImagePage) => {
      const { updateImagePage0Wear } = await graphQLClient.request<{ updateImagePage0Wear:Page }>(UPDATE_IMAGE_PAGE_0_WEAR, {
        id,
        inputImage,
        uid,
      });
      return updateImagePage0Wear;
    },
    {
      onSuccess: async (updateImagePage0Wear, {id}) => {
        const pageId = id
        queryClient.setQueryData(['find-page0-wear', pageId], updateImagePage0Wear);
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
