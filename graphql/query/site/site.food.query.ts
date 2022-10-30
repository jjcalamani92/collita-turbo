import { gql } from "graphql-request";
export const FIND_SITES_FOOD_WITH_CURSOR = gql`
  query ListSitesFoodWithCursor($args: ConnectionArgs!) {
    listSitesFoodWithCursor(args: $args) {
      pageData {
        count
        limit
        offset
      }
      page {
        edges {
          node {
            _id
            data {
              seo {
                title
                image {
                  src
                  alt
                }
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
export const FIND_SITES_FOOD = gql`
  query FindSitesFood {
    findSitesFood {
      _id
      data {
        type
        dataBase {
          value
        }
        seo {
          title
          image {
            src
            alt
          }
        }
      }
    }
  }
`;

export const FIND_SITE_FOOD = gql`
  query FindSiteFood($id: String!) {
    findSiteFood(id: $id) {
      _id
      data {
        name
        description
        type
        seo {
          title
          description
        }
        dataBase {
          uid
          label
          value
        }
        siteImages {
          banner {
            src
            alt
          }
          logo {
            src
            alt
          }
          icon {
            src
            alt
          }
        }
        
      }
      url
    }
  }
`;
export const FIND_SITE_FOOD_BY_LAYOUT = gql`
  query FindSiteFood($id: String!) {
    findSiteFood(id: $id) {
      _id
      page{
        _id
        data {
          type
          seo {
            title
            href
          }
        }
        page{
          _id
          data {
            type
            seo {
              title
              href
            }
          }
          product{
            _id
            data{
              seo{
                title
                href
                image{
                  src
                  alt
                }
              }
            }
          }
        }
      }
      data {
        name
        description
        seo {
          title
          description
          href
        }

        
      }
      url
      
    }
  }
`;
