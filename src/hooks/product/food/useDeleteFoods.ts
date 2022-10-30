import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CREATE_PRODUCT,
  DELETE_MANY_PRODUCT_BY_ID,
  DELETE_PRODUCT,
  graphQLClient,
} from "../../../../graphql";
import {
  ConnectionArgs,
  CreateProduct,
  CreateSite,
  DeleteManyFoodById,
  DeleteManyProductById,
  DeleteProduct,
  Food,
  Product,
  Site,
  UpdateSite,
} from "../../../../interfaces";
import { DELETE_FOODS } from "../../../../graphql/mutate/product/food.mutate";
import Swal from "sweetalert2";

export const useDeleteFoods = (parentId: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ ids, type }: DeleteManyFoodById) => {
      const { deleteProductsFood } = await graphQLClient.request<{
        deleteProductsFood: string[];
      }>(DELETE_FOODS, {
        ids,
        type,
      });
      return deleteProductsFood;
    },
    {
      onSuccess: (deleteProductsFood) => {
        queryClient.setQueryData<Food[]>(
          ["find-all-products-food-by-parent-id", parentId],
          (old) =>
            old!.filter((food) => deleteProductsFood.indexOf(food._id) < 0)
        );
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
