import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CREATE_PRODUCT,  DELETE_MANY_PRODUCT_BY_ID,  DELETE_PRODUCT,  graphQLClient } from "../../../../graphql";
import { ConnectionArgs, CreateProduct, CreateSite, DeleteManyFoodById, DeleteManyProductById, DeleteProduct, Product, Site, UpdateSite } from "../../../../interfaces";
import { DELETE_FOODS } from '../../../../graphql/mutate/product/food.mutate';



export const useDeleteManyFoodById = (args: ConnectionArgs, siteId: string, type: string) => {

  return useMutation(
    async ({ ids, type}: DeleteManyFoodById) => {
      const { deleteFoodsById } = await graphQLClient.request(DELETE_FOODS, {
        ids,
        type,
      });
      return deleteFoodsById;
    },
    {
      onSuccess: async () => {
        // queryClient.invalidateQueries(["find-products-with-cursor", args, type, siteId],  await findProductsWithCursor(args, type, siteId));
        },
      onError: (error) => {
        console.log(error);
      },
    }
  );
};

