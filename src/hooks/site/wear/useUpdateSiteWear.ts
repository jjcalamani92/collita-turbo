import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { graphQLClient, UPDATE_SITE_WEAR } from "../../../../graphql";
import { Site, UpdateSite } from "../../../../interfaces";


export const useUpdateSiteWear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input}:UpdateSite) => {
      const { updateSiteWear } = await graphQLClient.request<{updateSiteWear: Site}>(UPDATE_SITE_WEAR, {
        id,
        input
      });
      return updateSiteWear;
    },
    {
      onSuccess: async (updateSiteWear, {id}) => {
        queryClient.setQueryData(['find-site-wear', id], updateSiteWear);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Site",
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
