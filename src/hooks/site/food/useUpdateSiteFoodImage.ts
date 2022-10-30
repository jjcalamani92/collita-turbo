import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_SITE_FOOD_IMAGE, UPDATE_SITE_IMAGE } from "../../../../graphql";
import { Site, UpdateSiteImage } from "../../../../interfaces";


export const useUpdateSiteFoodImage = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputImage, type, uid}:UpdateSiteImage) => {
      const { updateSiteImage } = await graphQLClient.request<{updateSiteImage: Site}>(UPDATE_SITE_FOOD_IMAGE, {
        id,
        inputImage,
        type,
        uid,
      });
      return updateSiteImage;
    },
    {
      onSuccess: async (updateSiteImage, {id}) => {
        queryClient.setQueryData(['find-site-food', id], updateSiteImage);
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
