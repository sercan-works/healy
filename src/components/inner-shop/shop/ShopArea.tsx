"use client";
import shop_data from "@/data/ShopData";
import UseProducts from "@/hooks/UseProducts";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import InputRange from "@/ui/InputRange";
import React, { ChangeEvent, useEffect, useState } from "react";
import { selectProducts } from "@/redux/features/productSlice";
import { getProducts } from "@/utils/db";
import { QueryResultRow } from "pg"; // Add this import if not already present
import { GiLotus, GiLotusFlower } from "react-icons/gi";
import {
  Box,
  CircularProgress,
  Grid2,
  LinearProgress,
  Skeleton,
  Typography
} from "@mui/material";

const ShopArea = () => {
  const [products, setProducts] = useState<QueryResultRow[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="inner-shop-area mx-5 lg:mx-20">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-8 col-sm-8">
            <aside className="shop-sidebar"></aside>
          </div>
          {/* loader */}
          <div className="flex flex-wrap">
            {loading ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : (
              products.map((item) => (
                <div key={item.id} className="col-xl-3">
                  <div className="home-shop-item">
                    <div className="home-shop-thumb">
                      <Link href={`/shop-details/${item.id}`}>
                        <Image
                          src={item.link}
                          width={200}
                          height={200}
                          alt="img"
                        />
                        {item.discount ? (
                          <span className="discount"> -{item.discount}%</span>
                        ) : (
                          ""
                        )}
                      </Link>
                      <div
                        className={`shop-thumb-shape ${item.class_name}`}
                      ></div>
                    </div>
                    <div className="home-shop-content">
                      <h4 className="title">
                        <Link href={`/shop-details/${item.id}`}>
                          {item.name}
                        </Link>
                      </h4>
                      <span className="home-shop-price">{item.price}₺</span>
                      <div className="home-shop-rating"></div>
                      <div className="shop-content-bottom">
                        <Link
                          href={`/shop-details/${item.id}`}
                          target="_blank"
                          className="bg-rose-400 hover:bg-rose-600 text-white px-4 py-2 rounded flex mx-auto"
                        >
                          Detaylı İncele
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
