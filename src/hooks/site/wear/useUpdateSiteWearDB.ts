import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITE, graphQLClient, UPDATE_SITE, UPDATE_SITE_DB, UPDATE_SITE_WEAR_DB } from "../../../../graphql";
import { Site, UpdateSiteDB } from "../../../../interfaces";


export const useUpdateSiteDataBaseWear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputDB}:UpdateSiteDB) => {
      const { updateDataBaseWear } = await graphQLClient.request<{updateDataBaseWear: Site}>(UPDATE_SITE_WEAR_DB, {
        id,
        inputDB
      });
      return updateDataBaseWear;
    },
    {
      onSuccess: async (updateDataBaseWear, {id}) => {
        queryClient.setQueryData(['find-site-wear', id], updateDataBaseWear);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated DB Site",
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
