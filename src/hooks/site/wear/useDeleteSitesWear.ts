import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITES_WEAR,  graphQLClient } from "../../../../graphql";
import { DeleteManySitesById, Site } from "../../../../interfaces"; 


export const useDeleteSitesWear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeleteManySitesById) => {
      const { deleteSitesWear } = await graphQLClient.request<{deleteSitesWear: string[]}>(DELETE_SITES_WEAR, {
        ids
      });
      return deleteSitesWear;
    },
    {
      onSuccess:  (deleteSitesWear) => {
        queryClient.setQueryData<Site[]>(["find-sites-wear"],  (old) => old!.filter((site) => deleteSitesWear.indexOf(site._id) < 0));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
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

