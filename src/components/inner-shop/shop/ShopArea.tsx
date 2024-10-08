"use client"
import shop_data from "@/data/ShopData"
import UseProducts from "@/hooks/UseProducts"
import { addToCart } from "@/redux/features/cartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { Rating } from "react-simple-star-rating"
import InputRange from '@/ui/InputRange';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { selectProducts } from '@/redux/features/productSlice';

const ShopArea = () => {

   const [currentPage, setCurrentPage] = useState(1);

   let all_data = shop_data
   const { products, setProducts } = UseProducts();
   const filteredProducts = products.filter(item => item.page === "shop");

   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = filteredProducts.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

   // click to request another page.
   const handlePageClick = (pageNumber: number) => {
      if (pageNumber < 1 || pageNumber > totalPages) {
         return; // Avoid going to negative pages or beyond the total number of pages
      }

      const newOffset = (pageNumber - 1) * itemsPerPage; // Calculate the new offset
      setItemOffset(newOffset);
      setCurrentPage(pageNumber); // Update the currentPage state
   };

   // Calculate total number of pages
   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

   // Generate an array of page numbers
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

   // Render pagination links
   const renderPaginationLinks = () => {
      return pageNumbers.map((pageNumber) => (
         <li key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
            <a style={{ cursor: "pointer" }} onClick={() => handlePageClick(pageNumber)}>
               {pageNumber}
            </a>
         </li>
      ));
   };


   const dispatch = useDispatch()
   const handleAddToCart = (item: any) => {
      dispatch(addToCart(item));
   };


   // all products 
   const allProducts = useSelector(selectProducts);
   const filteredAllProduct = allProducts.filter(item => item.page === "shop");

   const productCategory = useSelector(selectProducts).filter(item => item.page === "shop").map(product => product.category);
   // allCategory
   const allCategory = ['All Category', ...new Set(productCategory)];
   // select category
   const [selected, setSelected] = useState('All Category');

   //handle Category 
   const handleCategory = (category: string) => {
      setSelected(category)
      if (category === 'All Category') {
         setProducts(allProducts)
      }
      else {
         const all_course = allProducts.filter(course => course.category === category);
         setProducts(all_course)
      }
   }

   // handle Price
   const maxPrice = all_data.filter(item => item.page === "shop").reduce((max, item) => {
      return item.price > max ? item.price : max;
   }, 0);
   const [priceValue, setPriceValue] = useState([0, maxPrice]);

   useEffect(() => {
      let filterPrice = all_data.filter((j) => j.price >= priceValue[0] && j.price <= priceValue[1]);
      setProducts(filterPrice)
   }, [priceValue])

   const handleChanges = (val: number[]) => {
      setPriceValue(val)
   }

   const productTag = useSelector(selectProducts).filter(item => item.page === "shop").map(tag => tag.tag);
   // all tags
   const allTags = ['All', ...new Set(productTag)];

   // handle Tag
   const handleTags = (tag: string) => {
      setSelected(tag)
      if (tag === 'All') {
         setProducts(filteredAllProduct)
      }
      if (tag === 'Bone Support') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Bone Support'))
      }
      if (tag === 'Energy Support') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Energy Support'))
      }
      if (tag === 'Hair') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Hair'))
      }
      if (tag === 'Multivitamins') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Multivitamins'))
      }
      if (tag === 'Pre-Workout') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Pre-Workout'))
      }
      if (tag === 'Protein') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Protein'))
      }
      if (tag === 'Skin & Nails') {
         setProducts(filteredAllProduct.filter(item => item.tag === 'Skin & Nails'))
      }
   }

   // handle select

   const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const select = event.target.value;
      setSelected(select);
      switch (select) {
         case '01':
            // Sort by popular
            const popularProducts = filteredAllProduct
               .filter(item => item.popular)
               .sort((a, b) => b.popularity - a.popularity);
            setProducts(popularProducts);
            break;
         case '02':
            // Sort by view
            const viewProducts = filteredAllProduct
               .filter(item => item.view)
               .sort((a, b) => b.views - a.views);
            setProducts(viewProducts);
            break;
         case '03':
            // Sort by price (Low to High)
            const lowToHighPriceProducts = filteredAllProduct
               .slice()
               .sort((a, b) => a.price - b.price);
            setProducts(lowToHighPriceProducts);
            break;
         case '04':
            // Sort by ratings (High to Low)
            const highToLowRatingProducts = filteredAllProduct
               .slice()
               .sort((a, b) => b.rating - a.rating);
            setProducts(highToLowRatingProducts);
            break;
         case '05':
            // Sort by new
            const newProducts = filteredAllProduct
               .filter(item => item.new)
               .sort((a, b) => b.new - a.new);
            setProducts(newProducts);
            break;
         case '06':
            // Sort by new
            const discountProducts = filteredAllProduct
               .filter(item => item.discount)
               .sort((a, b) => b.discount - a.discount);
            setProducts(discountProducts);
            break;
         default:
            // For 'All Select' or other cases, reset products to the original filteredAllProduct
            setProducts(filteredAllProduct);
            break;
      }
   };

   return (
      <div className="inner-shop-area">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-3 col-lg-4 col-md-8 col-sm-8">
                  <aside className="shop-sidebar">
                     <div className="widget">
                        <h4 className="sidebar-title">Filter by Price</h4>
                        <div className="price_filter">
                           <div id="slider-range mb-20">
                              <InputRange
                                 MAX={maxPrice}
                                 MIN={0}
                                 STEP={1}
                                 values={priceValue}
                                 handleChanges={handleChanges}
                              />
                           </div>
                           <div className="price_slider_amount">
                              <span onChange={() => handleChanges}>Price : ${priceValue[0]} - ${priceValue[1]}</span>
                              <input type="submit" className="eg-btn" value="Filter" />
                           </div>
                        </div>
                     </div>

                     <div className="widget">
                        <h4 className="sidebar-title">CATEGORIES</h4>
                        <ul className="categories-list list-wrap">
                           {allCategory.map((cate_item: any, i: any) =>
                              <li key={i}>
                                 <a style={{ cursor: "pointer" }} onClick={() => handleCategory(cate_item)} className="shop-cat-item">
                                    <input className="form-check-input" type="checkbox" checked={cate_item === selected} name={`${i}`} id={`${cate_item}`} readOnly />
                                    <label className="form-check-label" htmlFor={`${cate_item}`} style={{ cursor: 'pointer' }}>{cate_item} <span>{cate_item.length}</span></label>
                                 </a>
                              </li>
                           )}
                        </ul>
                     </div>

                     <div className="widget">
                        <h4 className="sidebar-title">LATEST PRODUCTS</h4>
                        <div className="lp-post-list">
                           <ul className="lp-post-item list-wrap">
                              {currentItems.slice(0, 3).map((item, index) =>
                                 <li key={index}>
                                    <div className="lp-post-thumb">
                                       <Link href={`/shop-details/${item.id}`}><Image src={item.thumb} alt="img" /></Link>
                                    </div>
                                    <div className="lp-post-content">
                                       <ul className="lp-post-rating list-wrap">
                                          <li>
                                             <Rating initialValue={item.rating} size={20} readonly={true} />
                                          </li>
                                       </ul>
                                       <h4 className="title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                       <span className="price">${item.price}</span>
                                    </div>
                                 </li>
                              )}
                           </ul>
                        </div>
                     </div>

                     <div className="widget">
                        <h4 className="sidebar-title">Product tags</h4>
                        <ul className="Product-tag-list list-wrap">
                           {allTags.map((tag_item, index) =>
                              <li key={index}><a style={{ cursor: "pointer" }} onClick={() => handleTags(tag_item)}>{tag_item}</a></li>
                           )}
                        </ul>
                     </div>
                  </aside>
               </div>

               <div className="col-xl-9 col-lg-8 col-md-12 col-sm-8 shop-sidebar-pad order-first">
                  <div className="shop-top-wrap">
                     <div className="row">
                        <div className="col-md-6">
                           <div className="shop-top-left">
                              <p className="woocommerce-result-count shop-show-result">Showing 1-6 of 18 results</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="shop-top-right selection">
                              <form className="woocommerce-ordering mb-0" onSubmit={(e) => e.preventDefault()}>
                                 <select onChange={selectHandler} className="orderby form-select">
                                    <option value="default">Sort by popular</option>
                                    <option value="02">Sort by view</option>
                                    <option value="03">Sort by price</option>
                                    <option value="04">Sort by ratings</option>
                                    <option value="05">Sort by new</option>
                                    <option value="06">Sort by discount</option>
                                 </select>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="suxnix-shop-product-main">
                     <div className="row">
                        {currentItems.filter((item) => item.page === "shop").map((item) => (
                           <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                              <div className="home-shop-item inner-shop-item">
                                 <div className="home-shop-thumb">
                                    <Link href={`/shop-details/${item.id}`}>
                                       <Image src={item.thumb} alt="img" />
                                       {item.discount ? <span className="discount"> -{item.discount}%</span> : ""}
                                       {item.new ? <span className="discount new">{item.new}</span> : ""}
                                    </Link>
                                 </div>
                                 <div className="home-shop-content">
                                    <div className="shop-item-cat"><Link href="#">{item.tag}</Link></div>
                                    <h4 className="title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                    <span className="home-shop-price">${item.price}</span>
                                    <div className="home-shop-rating">
                                       <Rating initialValue={item.rating} size={20} readonly={true} />
                                       <span className="total-rating">({item.total_rating})</span>
                                    </div>
                                    <div className="shop-content-bottom">
                                       <a style={{ cursor: "pointer" }} onClick={() => handleAddToCart(item)} className="cart"><i className="flaticon-shopping-cart-1"></i></a>
                                       <Link href="/cart" className="eg-btn btn-two">Buy Now</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="pagination-wrap">
                        <ul className="list-wrap">
                           <li className="prv-next">
                              <a
                                 onClick={() => handlePageClick(currentPage - 1)}
                                 style={{ cursor: 'pointer' }}
                                 className={currentPage === 1 ? 'disabled' : ''}
                              >
                                 <i className="fas fa-angle-double-left"></i>
                              </a>
                           </li>
                           {renderPaginationLinks()}
                           <li className="prv-right">
                              <a
                                 onClick={() => handlePageClick(currentPage + 1)}
                                 style={{ cursor: 'pointer' }}
                                 className={currentPage === totalPages ? 'disabled' : ''}
                              >
                                 <i className="fas fa-angle-double-right"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ShopArea
