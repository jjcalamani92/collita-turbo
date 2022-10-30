import { gql } from "graphql-request";

export const FIND_PAGES_1_WEAR_BY_PARENT_ID = gql`
  query FindPages1WearByParentId($parentId: String!) {
    findPages1WearByParentId(parentId: $parentId) {
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
export const FIND_PAGES_1_WEAR = gql`
  query FindPages1Wear {
    findPages1Wear {
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
export const FIND_PAGE_1_WEAR = gql`
  query FindPage1Wear($id:String!) {
    findPage1Wear(id:$id) {
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