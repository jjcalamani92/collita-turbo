import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITE, graphQLClient, UPDATE_SITE, UPDATE_SITE_DB, UPDATE_SITE_FOOD_DB } from "../../../../graphql";
import { Site, UpdateSiteDB } from "../../../../interfaces";


export const useUpdateSiteDataBaseFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, inputDB}:UpdateSiteDB) => {
      const { updateDataBaseFood } = await graphQLClient.request<{updateDataBaseFood: Site}>(UPDATE_SITE_FOOD_DB, {
        id,
        inputDB
      });
      return updateDataBaseFood;
    },
    {
      onSuccess: async (updateDataBaseFood, {id}) => {
        queryClient.setQueryData(['find-site-food', id], updateDataBaseFood);
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
