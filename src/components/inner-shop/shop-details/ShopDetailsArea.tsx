"use client"
import ShopDetailsTab from '@/components/common/ShopDetailsTab'
import { addToCart, decrease_quantity } from '@/redux/features/cartSlice';
import Link from 'next/link'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import Image, { StaticImageData } from 'next/image';
import ReviewForm from '@/components/forms/ReviewForm';
import HomeOneShop from '@/components/homes/home/HomeOneShop';

import reviewImg_1 from '@/assets/img/others/p_review_img01.jpg';
import reviewImg_2 from '@/assets/img/others/p_review_img02.jpg';
import reviewImg_3 from '@/assets/img/others/p_review_img03.jpg';

const tab_title: string[] = ["Description", "Additional information", "Reviews (03)",];

interface singProduct {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   list: string[];
   table_row: {
      title: string;
      count: string;
   }[];
   review_data: {
      img: StaticImageData,
      meta: JSX.Element;
      desc: JSX.Element;
   }[];
}

const product_content: singProduct = {
   title_1: "Suxnix Natural Vitamin Supplement",
   title_2: "The true strength of Suxnix :",
   title_3: "Suxnix the basics :",
   desc_1: (<>Suxnix food is food produced by methods complying with the standards of Rrganic farming. Standards vary Lorem ipsum dolor sit amet, consectetur adipiscing worldwide, but organic farming.</>),
   desc_2: (<>Whey Protein Isolates (WPIs) are the purest form of whey protein that currently exists. WPIs are costly to use, but rate among the best proteins that money can buy. That’s why they’re the first ingredient you read on the Gold Standard 100% Whey™ label. By using WPI as the primary ingredient along with premium ultra-filtered whey protein concentrate (WPC), we’re able to pack 24 grams of protein into every serving to support your muscle building needs after training. ON’attention to detail also extends to mixability. This superior quality powder has been instantized to mix easliy using a shaker cup or just a glass and spoon. There’s no doubt that this is the standard by which all other whey proteins are measured.</>),
   list: ["82% Protein by Weight (24g of Protein Per 31.5g Serving Size).", "Whey Protein Isolates (WPI) Main Ingredient.", "Whey Protein Micro-functions from Whey Protein Isolate and Ultra-Filtered Whey Protein Concentrate.", "Over 4g of Naturally Occurring Glutamine & Glutamic Acid in Each Serving.",
      "More than 5g of the Naturally Occurring Branched Chain Amino Acids (BCAAs) Leucine, Isoleucine, and Valine in Each Serving.", "The “Gold Standard” for Protein Quality.", "Banned Substance Tested Protein", "French Vanilla Creme Flavored Whey Protein Powder"
   ],
   table_row: [{ title: "Calories", count: "110" }, { title: "Total Fat", count: "1kg" }, { title: "Saturated Fat", count: "0.5kg" }, { title: "Cholesterol", count: "40mg" }, { title: "Total Carbohydrate", count: "2g" }, { title: "Protein", count: "24g" }, { title: "Total Sugars", count: "2g" }, { title: "Sodium", count: "100mg" }, { title: "Calcium", count: "140 mg" }, { title: "Potassium", count: "160 mg" },],
   review_data: [
      { img: reviewImg_1, meta: (<>Chenai Simon <span>-May 12, 2023</span></>), desc: (<>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of lorem ipsum.</>) },
      { img: reviewImg_2, meta: (<>Finn Castaneda <span>-June 15, 2023</span></>), desc: (<>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of lorem ipsum.</>) },
      { img: reviewImg_3, meta: (<>Bayley Robertson <span>-July 18, 2023</span></>), desc: (<>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of lorem ipsum.</>) },
   ]
}

const { title_1, title_2, title_3, desc_1, desc_2, list, table_row, review_data } = product_content;

const ShopDetailsArea = ({ single_product }: any) => {

   const productItem = useSelector((state: any) => state.cart.cart);
   const dispatch = useDispatch();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle the form submission here
   };
   const handleAddToCart = (item: any) => {
      dispatch(addToCart(item));
   };
   const totalItems = productItem.find((d_item: any) => d_item?.id === single_product?.id)

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <>
         <section className="inner-shop-details-area">
            <div className="container">
               <div className="row">
                  <ShopDetailsTab />

                  <div className="col-lg-6">
                     <div className="inner-shop-details-content">
                        <h4 className="title">{single_product?.title ? single_product.title : title_1}</h4>
                        <div className="inner-shop-details-meta">
                           <ul className="list-wrap">
                              <li>Brands : <Link href="/shop">Suxnix</Link></li>
                              <li className="inner-shop-details-review">
                                 <div className="rating">
                                    <Rating initialValue={single_product?.rating ? single_product.rating : 5} size={20} readonly={true} />
                                 </div>
                                 <span>({single_product?.total_rating ? single_product.total_rating : "20"})</span>
                              </li>
                              <li>ID : <span>QZX8VGH</span></li>
                           </ul>
                        </div>

                        <div className="inner-shop-details-price">
                           <h2 className="price">${single_product?.price ? single_product.price : 29.99}</h2>
                           <h5 className="stock-status">- IN Stock</h5>
                        </div>
                        <p>{desc_1}</p>
                        <div className="inner-shop-details-list">
                           <ul className="list-wrap">
                              <li>Type : <span>Supplement</span></li>
                              <li>XPD : <span>19 Dec 2022</span></li>
                              <li>CO : <span>Suxnix</span></li>
                           </ul>
                        </div>

                        <div className="inner-shop-perched-info">
                           <div className="sd-cart-wrap">
                              <form onSubmit={e => e.preventDefault()}>
                                 <div className="quickview-cart-plus-minus">
                                    <input type="text" onChange={handleSubmit} value={totalItems?.quantity ? totalItems?.quantity : 1} readOnly />
                                    <div onClick={() => single_product ? dispatch(decrease_quantity(single_product)) : ""} className="dec qtybutton">-</div>
                                    <div onClick={() => single_product ? dispatch(addToCart(single_product)) : ""} className="inc qtybutton">+</div>
                                 </div>
                              </form>
                           </div>
                           <a style={{cursor:"pointer"}} onClick={() => single_product ? handleAddToCart(single_product) : ""} className="cart-btn">add to cart</a>
                        </div>
                        
                        <div className="inner-shop-details-bottom">
                           <span><span>Tag : <Link href="#">{single_product?.tag ? single_product.tag : "Natural Vitamin"}</Link></span></span>
                           <span>
                              <span>Categories :
                                 <Link href="#">Vitamin</Link>
                                 <Link href="#">Protein</Link>
                                 <Link href="#">Capsule</Link>
                                 <Link href="#">Powder</Link></span>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-12">
                     <div className="product-desc-wrap">
                        <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                           {tab_title.map((tab, index) => (
                              <li key={index} className="nav-item">
                                 <button onClick={() => handleTabClick(index)}
                                    className={activeTab === index ? 'nav-link active' : ' nav-link'}>{tab}
                                 </button>
                              </li>
                           ))}
                        </ul>

                        <div className="tab-content" id="myTabContentTwo">
                           <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="description">
                              <div className="product-desc-content">
                                 <h4 className="title">{title_2}</h4>
                                 <p>{desc_2}</p>
                                 <h4 className="title">{title_3}</h4>
                                 <ul className="product-desc-list list-wrap">
                                    {list.map((list, index) => (<li key={index}>{list}</li>))}
                                 </ul>
                              </div>
                           </div>

                           <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                              <div className="product-desc-content">
                                 <table className="table table-sm">
                                    <tbody>
                                       {table_row.map((table, i) => (
                                          <tr key={i}>
                                             <th scope="row">{table.title}</th>
                                             <td>{table.count}</td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           </div>

                           <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                              <div className="product-desc-content">
                                 <div className="reviews-comment">
                                    {review_data.map((item, i) => (
                                       <div key={i} className="review-info">
                                          <div className="review-img">
                                             <Image src={item.img} alt="" />
                                          </div>
                                          <div className="review-content">
                                             <ul className="review-rating list-wrap">
                                                <Rating initialValue={5} size={20} readonly={true} />
                                             </ul>
                                             <div className="review-meta">
                                                <h6>{item.meta}</h6>
                                             </div>
                                             <p>{item.desc}</p>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                                 <div className="add-review">
                                    <h4 className="title">Add a review</h4>
                                    <ReviewForm />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <HomeOneShop style={true} />
      </>
   )
}

export default ShopDetailsArea
