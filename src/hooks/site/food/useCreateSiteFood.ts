import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_SITE, CREATE_SITE_FOOD, DELETE_SITE, graphQLClient, UPDATE_SITE } from "../../../../graphql";
import { CreateSite, Site, UpdateSite } from "../../../../interfaces";


export const useCreateSiteFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({input}: CreateSite) => {
      const { createSiteFood } = await graphQLClient.request<{createSiteFood: Site}>(CREATE_SITE_FOOD, {
        input,
      });
      return createSiteFood;
    },
    {
      onSuccess: async (createSite) => {
        queryClient.setQueryData<Site[]>(['find-sites-food'], (old) => [...old!, createSite]);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Site",
          showConfirmButton: false,
          timer: 1000,
        });
        // await Toast.fire({
        //   icon: 'success',
        //   title: 'Success'
        // })
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

