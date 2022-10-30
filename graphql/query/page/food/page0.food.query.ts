import { gql } from "graphql-request";

export const FIND_PAGES_0_FOOD_BY_PARENT_ID = gql`
  query FindPages0FoodByParentId($parentId: String!) {
    findPages0FoodByParentId(parentId: $parentId) {
      _id
      slug
      parentId
      siteId
      data{
        type
        seo{
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
export const FIND_PAGES_0_FOOD = gql`
  query FindPages0Food {
    findPages0Food {
      _id
      siteId
      data{
        seo{
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
export const FIND_PAGE_0_FOOD = gql`
  query FindPage0Food($id:String!) {
    findPage0Food(id:$id) {
      _id
      siteId
      parentId
      data{
        type
        seo{
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