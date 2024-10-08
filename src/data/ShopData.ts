import { StaticImageData } from "next/image";

import productThumb_1 from "@/assets/img/products/home_shop_thumb01.png"
import productThumb_2 from "@/assets/img/products/home_shop_thumb02.png"
import productThumb_3 from "@/assets/img/products/home_shop_thumb03.png"
import productThumb_4 from "@/assets/img/products/home_shop_thumb04.png"
import productThumb_5 from "@/assets/img/products/home_shop_thumb05.png"

import productThumb_2_1 from "@/assets/img/products/tg_shop01.jpg"
import productThumb_2_2 from "@/assets/img/products/tg_shop02.jpg"
import productThumb_2_3 from "@/assets/img/products/tg_shop03.jpg"
import productThumb_2_4 from "@/assets/img/products/tg_shop04.jpg"
import productThumb_2_5 from "@/assets/img/products/tg_shop05.jpg"
import productThumb_2_6 from "@/assets/img/products/tg_shop06.jpg"

import productThumb_3_1 from "@/assets/img/products/home_shop_thumb01.png"
import productThumb_3_2 from "@/assets/img/products/home_shop_thumb02.png"
import productThumb_3_3 from "@/assets/img/products/home_shop_thumb03.png"
import productThumb_3_4 from "@/assets/img/products/home_shop_thumb04.png"
import productThumb_3_5 from "@/assets/img/products/home_shop_thumb05.png"
import productThumb_3_6 from "@/assets/img/products/home_shop_thumb06.png"

interface dataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   discount?: number;
   batch_details?: {
      batch: string;
      batch_icon: string;
   };
   class_name?: string;
   category: string;
   tag?: string;
   title: string;
   price: number;
   old_price?: number;
   desc?: string;
   rating: number;
   total_rating?: number;
   popular?: string;
   view?: string;
   new?: string;
}

const shopData: dataType[] = [

   // for home one
   {
      id: 1,
      page: "home_1",
      thumb: productThumb_1,
      title: "Healy Rezonans",
      discount: 15,
      category: "weight loss",
      price: 85.99,
      total_rating: 30,
      tag: "Skin & Nails",
      rating: 5,
      popular: "popular",
   },
   {
      id: 2,
      page: "home_1",
      thumb: productThumb_1,
      title: "Protein Powder 2kg",
      class_name: "yellow",
      category: "fitness gym ",
      price: 55.99,
      total_rating: 20,
      tag: "Skin & Nails",
      rating: 4,
      popular: "popular",
   },
   {
      id: 3,
      page: "home_1",
      thumb: productThumb_1,
      title: "Amino Energy Health 2kg",
      class_name: "purple",
      category: "ACCESSORIES",
      discount: 20,
      price: 79.99,
      total_rating: 25,
      tag: "Hair",
      rating: 3,
      view: "view",
   },
   {
      id: 4,
      page: "home_1",
      thumb: productThumb_2,
      title: "Healy Obdisyen",
      class_name: "gray",
      category: "ACCESSORIES",
      price: 79.99,
      total_rating: 15,
      tag: "Protein",
      rating: 5,
      view: "view",
   },
   {
      id: 5,
      page: "home_1",
      thumb: productThumb_3,
      title: "Mag Healy",
      class_name: "blue",
      category: "man gym ",
      price: 39.99,
      total_rating: 25,
      tag: "Multivitamins",
      rating: 3,
      view: "view",
   },

   // for home two

   {
      id: 1,
      page: "home_2",
      thumb: productThumb_2_1,
      title: "Box Full of Muscles",
      category: "weight loss",
      price: 85.99,
      total_rating: 30,
      tag: "Bone Support",
      rating: 5,
      popular: "popular",
      new: "New"
   },
   {
      id: 2,
      page: "home_2",
      thumb: productThumb_2_2,
      title: "Protein Powder 2kg",
      category: "fitness gym ",
      price: 55.99,
      old_price: 39.99,
      total_rating: 20,
      tag: "Energy Support",
      rating: 4,
      popular: "popular",
      discount: 45,
   },
   {
      id: 3,
      page: "home_2",
      thumb: productThumb_2_3,
      title: "Amino Energy Health 2kg",
      category: "ACCESSORIES",
      price: 79.99,
      total_rating: 25,
      tag: "Hair",
      rating: 3,
      view: "view",
   },
   {
      id: 4,
      page: "home_2",
      thumb: productThumb_2_4,
      title: "Antiaging and Longevity",
      category: "ACCESSORIES",
      price: 90.99,
      total_rating: 15,
      tag: "Protein",
      rating: 5,
      view: "view",
      discount: 30,
   },
   {
      id: 5,
      page: "home_2",
      thumb: productThumb_2_5,
      title: "SERIOUR MASS 2kg",
      category: "man gym ",
      price: 39.99,
      total_rating: 25,
      tag: "Multivitamins",
      rating: 3,
      view: "view",
   },
   {
      id: 6,
      page: "home_2",
      thumb: productThumb_2_6,
      title: "BODY SHAPING FOODS",
      category: "man gym ",
      price: 39.99,
      total_rating: 25,
      tag: "Multivitamins",
      rating: 3,
      view: "view",
      new: "New",
   },

   // for shop

   {
      id: 1,
      page: "shop",
      thumb: productThumb_3_1,
      title: "Box Full of Muscles",
      discount: 15,
      category: "weight loss",
      price: 85.99,
      total_rating: 30,
      tag: "Bone Support",
      rating: 5,
      popular: "popular",
   },
   {
      id: 2,
      page: "shop",
      thumb: productThumb_3_2,
      title: "Protein Powder 2kg",
      class_name: "yellow",
      category: "fitness gym ",
      price: 55.99,
      total_rating: 20,
      tag: "Energy Support",
      rating: 4,
      popular: "popular",
   },
   {
      id: 3,
      page: "shop",
      thumb: productThumb_3_3,
      title: "Amino Energy Health 2kg",
      class_name: "purple",
      category: "ACCESSORIES",
      discount: 20,
      price: 79.99,
      total_rating: 25,
      tag: "Hair",
      rating: 3,
      view: "view",
   },
   {
      id: 4,
      page: "shop",
      thumb: productThumb_3_4,
      title: "Antiaging and Longevity",
      class_name: "gray",
      category: "ACCESSORIES",
      price: 79.99,
      total_rating: 15,
      tag: "Protein",
      rating: 5,
      view: "view",
   },
   {
      id: 5,
      page: "shop",
      thumb: productThumb_3_5,
      title: "SERIOUR MASS 2kg",
      class_name: "blue",
      category: "man gym ",
      price: 39.99,
      total_rating: 25,
      tag: "Multivitamins",
      rating: 3,
      view: "view",
   },
   {
      id: 6,
      page: "shop",
      thumb: productThumb_3_6,
      title: "Box Full of Muscles",
      category: "weight loss",
      price: 85.99,
      total_rating: 30,
      tag: "Bone Support",
      rating: 5,
      popular: "popular",
      new: "New"
   },
   {
      id: 7,
      page: "shop",
      thumb: productThumb_3_1,
      title: "Protein Powder 2kg",
      category: "fitness gym ",
      price: 55.99,
      old_price: 39.99,
      total_rating: 20,
      tag: "Energy Support",
      rating: 4,
      popular: "popular",
      discount: 45,
   },
   {
      id: 8,
      page: "shop",
      thumb: productThumb_3_2,
      title: "Amino Energy Health 2kg",
      category: "ACCESSORIES",
      price: 79.99,
      total_rating: 25,
      tag: "Hair",
      rating: 3,
      view: "view",
   },
   {
      id: 9,
      page: "shop",
      thumb: productThumb_3_3,
      title: "Antiaging and Longevity",
      category: "ACCESSORIES",
      price: 90.99,
      total_rating: 15,
      tag: "Protein",
      rating: 5,
      view: "view",
      discount: 30,
   },
   {
      id: 10,
      page: "shop",
      thumb: productThumb_3_4,
      title: "SERIOUR MASS 2kg",
      category: "man gym ",
      price: 39.99,
      total_rating: 25,
      tag: "Multivitamins",
      rating: 3,
      view: "view",
   },
   {
      id: 11,
      page: "shop",
      thumb: productThumb_3_5,
      title: "BODY SHAPING FOODS",
      category: "man gym ",
      price: 39.99,
      total_rating: 25,
      tag: "Multivitamins",
      rating: 3,
      view: "view",
      new: "New",
   },
   {
      id: 12,
      page: "shop",
      thumb: productThumb_3_1,
      title: "Box Full of Muscles",
      discount: 15,
      category: "weight loss",
      price: 85.99,
      total_rating: 30,
      tag: "Pre-Workout",
      rating: 5,
      popular: "popular",
   },
   {
      id: 13,
      page: "shop",
      thumb: productThumb_3_2,
      title: "Protein Powder 2kg",
      class_name: "yellow",
      category: "fitness gym ",
      price: 55.99,
      total_rating: 20,
      tag: "Skin & Nails",
      rating: 4,
      popular: "popular",
   },
   {
      id: 14,
      page: "shop",
      thumb: productThumb_3_3,
      title: "Amino Energy Health 2kg",
      class_name: "purple",
      category: "ACCESSORIES",
      discount: 20,
      price: 79.99,
      total_rating: 25,
      tag: "Skin & Nails",
      rating: 3,
      view: "view",
   },
   {
      id: 15,
      page: "shop",
      thumb: productThumb_3_4,
      title: "Antiaging and Longevity",
      class_name: "gray",
      category: "ACCESSORIES",
      price: 79.99,
      total_rating: 15,
      tag: "Pre-Workout",
      rating: 5,
      view: "view",
   },
]

export default shopData;
