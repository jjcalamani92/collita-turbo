import { gql } from "graphql-request";

export const FIND_PAGES_0_WEAR_BY_PARENT_ID = gql`
  query FindPages0WearByParentId($parentId: String!) {
    findPages0WearByParentId(parentId: $parentId) {
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
export const FIND_PAGES_0_WEAR = gql`
  query FindPages0Wear {
    findPages0Wear {
      _id
      site
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
export const FIND_PAGE_0_WEAR = gql`
  query FindPage0Wear($id:String!) {
    findPage0Wear(id:$id) {
      _id
      site
      parent
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