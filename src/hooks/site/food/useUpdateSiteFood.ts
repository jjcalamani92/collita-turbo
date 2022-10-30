import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITE, graphQLClient, UPDATE_SITE, UPDATE_SITE_FOOD } from "../../../../graphql";
import { Site, UpdateSite } from "../../../../interfaces";


export const useUpdateSiteFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({id, input}:UpdateSite) => {
      const { updateSiteFood } = await graphQLClient.request<{updateSiteFood: Site}>(UPDATE_SITE_FOOD, {
        id,
        input
      });
      return updateSiteFood;
    },
    {
      onSuccess: async (updateSite, {id, input}) => {
        queryClient.setQueryData(['find-site-food', id], updateSite);
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
