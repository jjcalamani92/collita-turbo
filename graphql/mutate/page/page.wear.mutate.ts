import {  gql } from 'graphql-request'


export const CREATE_PAGE_0_WEAR = gql`
  mutation CreatePage0Wear($input: CreatePage!) {
    createPage0Wear(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_0_WEAR = gql`
  mutation UpdatePage0Wear($id:String!, $input: UpdatePage!) {
    updatePage0Wear(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_0_WEAR = gql`
mutation UpdateImagePage0Wear($id: String!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage0Wear (id:$id, inputImage: $inputImage, uid:$uid) {
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
export const DELETE_PAGE_0_WEAR = gql`
  mutation DeletePage0Wear($id: String!) {
    deletePage0Wear(id: $id)
  }
`;
export const DELETE_PAGES_0_WEAR= gql`
mutation DeletePages0Wear($ids: [String!]!) {
  deletePages0Wear(ids:$ids)
}
`;
export const CREATE_PAGE_1_WEAR = gql`
  mutation CreatePage1Wear($input: CreatePage!) {
    createPage1Wear(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_1_WEAR = gql`
  mutation UpdatePage1Wear($id:String!, $input: UpdatePage!) {
    updatePage1Wear(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_1_WEAR = gql`
mutation UpdateImagePage1Wear($id: String!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage1Wear (id:$id, inputImage: $inputImage, uid:$uid) {
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
export const DELETE_PAGE_1_WEAR = gql`
  mutation DeletePage1Wear($id: String!) {
    deletePage1Wear(id: $id)
  }
`;
export const DELETE_PAGES_1_WEAR= gql`
mutation DeletePages1Wear($ids: [String!]!) {
  deletePages1Wear(ids:$ids)
}
`;
export const CREATE_PAGE_2_WEAR = gql`
  mutation CreatePage2Wear($input: CreatePage!) {
    createPage2Wear(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_2_WEAR = gql`
  mutation UpdatePage2Wear($id:String!, $input: UpdatePage!) {
    updatePage2Wear(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_2_WEAR = gql`
mutation UpdateImagePage2Wear($id: String!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage2Wear (id:$id, inputImage: $inputImage, uid:$uid) {
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
export const DELETE_PAGE_2_WEAR = gql`
  mutation DeletePage2Wear($id: String!) {
    deletePage2Wear(id: $id)
  }
`;
export const DELETE_PAGES_2_WEAR= gql`
mutation DeletePages2Wear($ids: [String!]!) {
  deletePages2Wear(ids:$ids)
}
`;
export const CREATE_PAGE_3_WEAR = gql`
  mutation CreatePage3Wear($input: CreatePage!) {
    createPage3Wear(input: $input) {
			_id
      slug
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
export const UPDATE_PAGE_3_WEAR = gql`
  mutation UpdatePage3Wear($id:String!, $input: UpdatePage!) {
    updatePage3Wear(id:$id, input: $input) {
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
export const UPDATE_IMAGE_PAGE_3_WEAR = gql`
mutation UpdateImagePage3Wear($id: String!, $inputImage: UpdateImage!, $uid: String!) {
  updateImagePage3Wear (id:$id, inputImage: $inputImage, uid:$uid) {
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
export const DELETE_PAGE_3_WEAR = gql`
  mutation DeletePage3Wear($id: String!) {
    deletePage3Wear(id: $id)
  }
`;
export const DELETE_PAGES_3_WEAR= gql`
mutation DeletePages3Wear($ids: [String!]!) {
  deletePages3Wear(ids:$ids)
}
`;