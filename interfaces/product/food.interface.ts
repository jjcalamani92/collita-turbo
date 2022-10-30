import { Promotion } from "../product.interface"
import { Image, Seo, Site } from "../site.interface"

export interface Food {
  _id: string
  data: DataFood
  siteId: string
  parentId: string
}
export interface DataFood {
  type: string
  name: string;
  slug: string;
  price: number;
  discountPrice: number;
  description: string;
  prescription: string;
  preparation: string;
  image: Image[];
  seo: Seo;
  promotion: Promotion
}


export interface CreateFood {
  input:{
    name: string
    description: string
    promotion: string
    price: number
    discountPrice: number
    siteId: string
    parentId: string
    uid: string
  }
  type: string
}
export interface UpdateFood {
  id:string
  input:{
    name: string
    description: string
    promotion: string
    price: number
    discountPrice: number
    uid: string
    siteId: string
    parentId: string
  }
  type: string
}
export interface DeleteFood {
  id:string
  type: string
}
export interface DeleteManyFoodById {
  ids:string[]
  type: string
}