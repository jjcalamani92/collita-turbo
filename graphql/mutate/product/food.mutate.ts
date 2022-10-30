import { gql } from "graphql-request";

export const CREATE_FOOD = gql`
  mutation CreateProductFood($input: CreateFood!, $type: String!) {
    createProductFood(input: $input, type: $type) {
      _id
      siteId
      parentId
      data {
        name
        type
        slug
        
        price
        discountPrice
        description
        seo {
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;

export const UPDATE_FOOD = gql`
  mutation UpdateProductFood($id: String!, $input: UpdateFood!, $type: String!) {
    updateProductFood(id: $id, input: $input, type: $type) {
      _id
      parentId
      data {
        type  
        name
        slug
        
        price
        discountPrice
        description
        promotion {
          name
          href
        }
        image {
          uid
          src
          alt
        }
        seo {
          title
          href
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;

export const DELETE_FOOD = gql`
  mutation DeleteProductFood($id: String!, $type: String!) {
    deleteProductFood(id: $id, type: $type)
  }
`;
export const DELETE_FOODS = gql`
  mutation DeleteProductsFood($ids: [String!]!, $type: String!) {
    deleteProductsFood (ids:$ids, type: $type) 
  }
`;

export const UPDATE_PRODUCT_FOOD_IMAGE = gql`
  mutation UpdateProductFoodImage(
    $id: String!
    $inputImage: [UpdateImage!]!
    $type: String!
    $uid: String!
  ) {
    updateProductFoodImage(id: $id, inputImage: $inputImage, type: $type, uid: $uid) {
      _id
      parentId
      data {
        type
        name
        slug
        price
        discountPrice
        description
        promotion {
          name
          href
        }
        image {
          uid
          src
          alt
        }
        seo {
          title
          href
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
`;
