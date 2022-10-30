import { gql } from "graphql-request";

export const FIND_FOODS_WITH_CURSOR = gql`
  query ListProductFoodWithCursor($args: ConnectionArgs!, $type: String!, $siteId: String!) {
    listProductFoodWithCursor(args: $args, type: $type, siteId: $siteId) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          cursor
          node {
            _id
            siteId
            parentId
            type
            data {
              name
              slug
              price
              discountPrice
              description
              seo {
                title
                description
                image {
                  src
                  alt
                }
              }
              image {
                uid
                src
                alt
              }
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
export const FIND_FOODS_BY_PARENT = gql`
  query FindProductsFoodByParent($parentId: String!, $type: String!) {
    findProductsFoodByParent(parentId: $parentId, type: $type) {
      _id
      data {
        name
        slug
        price
        discountPrice
        description
      }
    }
  }
`;
export const FIND_ALL_FOODS_BY_PARENT = gql`
  query FindAllProductsFoodByParent($parentId: String!) {
    findAllProductsFoodByParent(parentId: $parentId) {
      _id
      siteId
      parentId
      data {
        type
        name
        slug
        price
        discountPrice
        description
        seo {
          title
          description
          image {
            src
            alt
          }
        }
        image {
          uid
          src
          alt
        }
      }
    }
  }
`;
export const FIND_ALL_FOODS = gql`
  query FindAllProductsFood {
    findAllProductsFood {
      _id
      siteId
      data {
        type
        seo {
          title
          description
        }
      }
    }
  }
`;
export const FIND_FOOD = gql`
  query FindProductFood($id: String!, $type: String!) {
    findProductFood(id: $id, type: $type) {
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
          src
          alt
        }
        seo {
          title
          href
          description
          image {
            src
            alt
          }
        }
      }
    }
  }
`;
