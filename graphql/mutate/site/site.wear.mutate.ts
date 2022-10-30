import { gql } from "graphql-request";

export const CREATE_SITE_WEAR = gql`
  mutation CreateSiteWear($input: CreateSite!) {
    createSiteWear(input: $input) {
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
export const UPDATE_SITE_WEAR = gql`
  mutation UpdateSiteWear($id: String!, $input: UpdateSite!) {
    updateSiteWear(id: $id, input: $input) {
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
export const UPDATE_SITE_WEAR_IMAGE = gql`
  mutation UpdateSiteImageWear(
    $id: String!
    $inputImage: UpdateImage!
    $type: String!
    $uid: String!
  ) {
    updateSiteImageWear(id: $id, inputImage: $inputImage, type: $type, uid: $uid) {
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

export const UPDATE_SITE_WEAR_DB = gql`
  mutation UpdateDataBaseWear($id: String!, $inputDB: [UpdateDataBase!]!) {
    updateDataBaseWear(id: $id, inputDB: $inputDB) {
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
export const DELETE_SITE_WEAR = gql`
  mutation DeleteSiteWear($id: String!) {
    deleteSiteWear(id: $id)
  }
`;
export const DELETE_SITES_WEAR = gql`
  mutation DeleteSitesWear($ids: [String!]!) {
    deleteSitesWear(ids: $ids)
  }
`;
