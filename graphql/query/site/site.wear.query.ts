import { gql } from "graphql-request";
export const FIND_SITES_WEAR_WITH_CURSOR = gql`
  query ListSitesWearWithCursor($args: ConnectionArgs!) {
    listSitesWearWithCursor(args: $args) {
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
export const FIND_SITES_WEAR = gql`
  query FindSitesWear {
    findSitesWear {
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

export const FIND_SITE_WEAR = gql`
  query FindSiteWear($id: String!) {
    findSiteWear(id: $id) {
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
export const FIND_SITE_WEAR_BY_LAYOUT = gql`
  query FindSiteWear($id: String!) {
    findSiteWear(id: $id) {
      _id
      data {
        name
        description
        seo {
          title
          description
        }

        
      }
      url
      
    }
  }
`;
