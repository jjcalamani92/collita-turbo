import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { CREATE_SITE, CREATE_SITE_FOOD, CREATE_SITE_WEAR, DELETE_SITE, graphQLClient, UPDATE_SITE } from "../../../../graphql";
import { CreateSite, Site, UpdateSite } from "../../../../interfaces";


export const useCreateSiteWear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({input}: CreateSite) => {
      const { createSiteWear } = await graphQLClient.request<{createSiteWear: Site}>(CREATE_SITE_WEAR, {
        input,
      });
      return createSiteWear;
    },
    {
      onSuccess: async (createSite) => {
        queryClient.setQueryData<Site[]>(['find-sites-wear'], (old) => [...old!, createSite]);
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

