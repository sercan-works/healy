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
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';

const tab_title: string[] = ["Özellikler", "Detaylı Programlar","Riskler ve Uyarılar", "Satış Sonrası Destek",];

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
   title_3: "programlar :",
   desc_1: (<>Suxnix food is food produced by methods complying with the standards of Rrganic farming. Standards vary Lorem ipsum dolor sit amet, consectetur adipiscing worldwide, but organic farming.</>),
   desc_2: (<>Whey Protein Isolates (WPIs) are the purest form of whey protein that currently exists. WPIs are costly to use, but rate among the best proteins that money can buy. That’s why they’re the first ingredient you read on the Gold Standard 100% Whey™ label. By using WPI as the primary ingredient along with premium ultra-filtered whey protein concentrate (WPC), we’re able to pack 24 grams of protein into every serving to support your muscle building needs after training. ON’attention to detail also extends to mixability. This superior quality powder has been instantized to mix easliy using a shaker cup or just a glass and spoon. There’s no doubt that this is the standard by which all other whey proteins are measured.</>),
   list: ["82% Protein by Weight (24g of Protein Per 31.5g Serving Size).", "Whey Protein Isolates (WPI) Main Ingredient.", "Whey Protein Micro-functions from Whey Protein Isolate and Ultra-Filtered Whey Protein Concentrate.", "Over 4g of Naturally Occurring Glutamine & Glutamic Acid in Each Serving.",
      "More than 5g of the Naturally Occurring Branched Chain Amino Acids (BCAAs) Leucine, Isoleucine, and Valine in Each Serving.", "The “Gold Standard” for Protein Quality.", "Banned Substance Tested Protein", "French Vanilla Creme Flavored Whey Protein Powder"
   ],
   table_row: [{ title: "Calories", count: "110" }, { title: "Total Fat", count: "1kg" }, { title: "Saturated Fat", count: "0.5kg" }, { title: "Cholesterol", count: "40mg" }, { title: "Total Carbohydrate", count: "2g" }, { title: "Protein", count: "24g" }, { title: "Total Sugars", count: "2g" }, { title: "Sodium", count: "100mg" }, { title: "Calcium", count: "140 mg" }, { title: "Potassium", count: "160 mg" },],
   review_data: [
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
                  <ShopDetailsTab images={single_product?.images_link} />

                  <div className="col-lg-6">
                     <div className="inner-shop-details-content">
                        <h1 className="title">{single_product?.title ? single_product.title : title_1}</h1>
                        <div className="inner-shop-details-meta">
                           <ul className="list-wrap">
                              <li>Marka : <Link href="/shop">Healy</Link></li>
                    
                              <li>ID : <span>QZX8VGH</span></li>
                           </ul>
                        </div>

                        <div className="inner-shop-details-price">
                           <h1 className="price">{single_product?.price ? single_product.price : 29.99}₺</h1>
                           <h1 className="stock-status">- STOKTA</h1>
                        </div>
                        <p>{single_product?.desc ? single_product.desc : desc_1}</p>
                        <div className="inner-shop-details-list">
                           <ul className="list-wrap">
                              <li>Tipi : <span>{single_product?.category ? single_product.category : "Frekans Cihazı"}</span></li>
                              <li>İletişim : <span>Bluetooth</span></li>
                              <li>Uygulama : <span>Kablolu ve Kablosuz</span></li>
                           </ul>
                        </div>

                        <div className="inner-shop-perched-info">
                           <div className="sd-cart-wrap">
                              <form onSubmit={e => e.preventDefault()}>
                 
                              </form>
                           </div>

                           <a style={{cursor:"pointer"}} href={single_product?.healy_product_link} target='_blank' className="cart-btn">Sipariş Ver</a>
                           <p>Sipariş konusunda destek almak için Whatsapp&apos;tan bize ulaşabilirsiniz.</p>
                           <p className='inline mt-2 items-center'><BsInfoCircle className='text-teal-500' />Ürünü satın almak için <span className='text-teal-500'>Resmi Healy Türkiye</span> web sitesine yönlendirileceksiniz.</p>
                        </div>
                        
                        <div className="inner-shop-details-bottom">
                           <span><span>Tag : <Link href="#">{single_product?.tag ? single_product.tag : "Healy Frekans Cihazı"}</Link></span></span>
                           <span>
                              <span>Kategoriler :
                                 <Link href="#">Healy</Link>
                                 <Link href="#">Frekans Cihazı</Link>
                                 <Link href="#">Kablolu ve Kablosuz</Link>
                                 <Link href="#">Bluetooth</Link></span>
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
                                 <h1 className="title">{single_product?.title ? single_product.title : title_2}</h1>
                                 <p>{single_product?.desc ? single_product.desc : desc_2}</p>
                                 <h1 className="title">{single_product?.title_3 ? single_product.title_3 : title_3}</h1>
                                 <ul className="product-desc-list list-wrap">
                                    {single_product?.list ? single_product.list.map((list, index) => (<li key={index}>{list}</li>)) : list.map((list, index) => (<li key={index}>{list}</li>))}
                                 </ul>
                                 
                              </div>
                           </div>

                            <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                              <div className="product-desc-content">
                                 <table className="table table-sm">
                                    <tbody>
                                       {single_product?.detail_programs ? single_product.detail_programs.map((table, i) => (
                                          <tr key={i}>
                                             <th scope="row">{single_product?.detail_programs ? single_product.detail_programs[i].key : table.title}</th>
                                             <td>{single_product?.detail_programs ? single_product.detail_programs[i].value : table.count}</td>
                                          </tr>
                                       )) : table_row.map((table, i) => (
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
                    
                                       {single_product?.alerts ? single_product.alerts.map((table, i) => (
                                          <tr key={i}>
                                             <th scope="row">{single_product?.alerts ? single_product.alerts[i] : table}</th>
                                             <td></td>
                                          </tr>
                                       )) : table_row.map((table, i) => (
                                          <tr key={i}>
                                             <th scope="row">{table.title}</th>
                                             <td>{table.count}</td>
                                          </tr>
                                       ))}
                              
                               
                              </div>
                           </div>

                           <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                              <div className="product-desc-content">
                                 <table className="table table-sm">
                                    <tbody>
                                       {single_product?.after_sale_support ? single_product.after_sale_support.map((table, i) => (
                                          <tr key={i}>
                                             <th scope="row">{single_product?.after_sale_support ? single_product.after_sale_support[i].title : table.title}</th>
                                             <td>{single_product?.after_sale_support ? single_product.after_sale_support[i].value : table.value}</td>
                                          </tr>
                                       )) : table_row.map((table, i) => (
                                          <tr key={i}>
                                             <th scope="row">{table.title}</th>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
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
