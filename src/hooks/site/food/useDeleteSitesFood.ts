import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { DELETE_SITES_FOOD,  graphQLClient } from "../../../../graphql";
import { DeleteManySitesById, Site } from "../../../../interfaces"; 


export const useDeleteSitesFood = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids}: DeleteManySitesById) => {
      const { deleteSitesFood } = await graphQLClient.request<{deleteSitesFood: string[]}>(DELETE_SITES_FOOD, {
        ids
      });
      return deleteSitesFood;
    },
    {
      onSuccess:  (deleteSitesFood) => {
        queryClient.setQueryData<Site[]>(["find-sites-food"],  (old) => old!.filter((site) => deleteSitesFood.indexOf(site._id) < 0));
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

