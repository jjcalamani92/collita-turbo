import { gql } from "graphql-request";

export const CREATE_SITE_FOOD = gql`
  mutation CreateSiteFood($input: CreateSite!) {
    createSiteFood(input: $input) {
      _id
      data {
        type
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
export const UPDATE_SITE_FOOD = gql`
  mutation UpdateSiteFood($id: String!, $input: UpdateSite!) {
    updateSiteFood(id: $id, input: $input) {
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
export const UPDATE_SITE_FOOD_IMAGE = gql`
  mutation UpdateSiteImageFood(
    $id: String!
    $inputImage: UpdateImage!
    $type: String!
    $uid: String!
  ) {
    updateSiteImageFood(id: $id, inputImage: $inputImage, type: $type, uid: $uid) {
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

export const UPDATE_SITE_FOOD_DB = gql`
  mutation UpdateDataBaseFood($id: String!, $inputDB: [UpdateDataBase!]!) {
    updateDataBaseFood(id: $id, inputDB: $inputDB) {
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
export const DELETE_SITE_FOOD = gql`
  mutation DeleteSiteFood($id: String!) {
    deleteSiteFood(id: $id)
  }
`;
export const DELETE_SITES_FOOD = gql`
  mutation DeleteSitesFood($ids: [String!]!) {
    deleteSitesFood(ids: $ids)
  }
`;
