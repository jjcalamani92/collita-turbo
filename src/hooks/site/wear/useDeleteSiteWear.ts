import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DELETE_SITE, DELETE_SITE_WEAR, graphQLClient } from "../../../../graphql";
import { Site } from "../../../../interfaces";

export const useDeleteSiteWear = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id:string) => {
      const { deleteSiteWear } = await graphQLClient.request<{deleteSiteWear: string}>(DELETE_SITE_WEAR, {
        id,
      });
      return deleteSiteWear;
    },
    {
      onSuccess: (deleteSite) => {
        queryClient.setQueryData<Site[]>(['find-sites-wear'], (old) => old!.filter((site) => site._id !== deleteSite))
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};