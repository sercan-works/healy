'use client'
import { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import UseCartInfo from '@/hooks/UseCartInfo';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clear_cart, decrease_quantity, remove_cart_product } from '@/redux/features/cartSlice';
import RemoveIcon from '@/svg/RemoveIcon';

const CartArea = () => {

   const productItem = useSelector((state: any) => state.cart.cart);
   const dispatch = useDispatch();
   const { total } = UseCartInfo();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle the form submission here
   };

   // handle shipping cost 
   const [shipCost, setShipCost] = useState<number>(0);
   const handleShippingCost = (value: any) => {
     if (value === 'free') {
       setShipCost(0)
     }
     else {
       setShipCost(value)
     }
   }


   return (
      <section className="eg-cart__area mb-95">
         <div className="container">

            {productItem.length === 0 ? (
               <div className="mb-30">
                  <div className="empty_bag text-center">
                     <p className="py-3">Your Bag is Empty</p>
                     <Link href={"/shop"}>
                        <button className="eg-btn">Go To Shop</button>
                     </Link>
                  </div>
               </div>
            ) : (
               <div className="row justify-content-between">
                  <div className="col-xl-9 col-lg-8">
                     <div className="eg-cart mr-30">
                        <div className="eg-cart__responsive">
                           <table className="table eg-cart__table">
                              <thead>
                                 <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                 </tr>
                              </thead>

                              <tbody>
                                 {productItem.map((item: any, i: any) =>
                                    <tr key={i}>
                                       <td className="eg-cart__meta d-flex align-items-center">
                                          <div className="eg-cart__meta-img">
                                             <Link href={`/shop-details/${item.id}`}>
                                                <Image src={item.thumb} width={100} height={100} alt="bemet" />
                                             </Link>
                                          </div>
                                          <h3 className="eg-cart__meta-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h3>
                                       </td>
                                       <td className="eg-cart__price"><span>{item.price}</span></td>
                                       <td className="eg-product-details__quantity-box">
                                          <div className="eg-product-details__quantity-box">
                                             <button onClick={() => dispatch(decrease_quantity(item))} className="eg-product-details__quantity-btn minus decrement"><i className="fa fa-minus"></i></button>
                                             <input className="counter" type="text" onChange={handleSubmit} value={item.quantity} readOnly />
                                             <button onClick={() => dispatch(addToCart(item))} className="eg-product-details__quantity-btn plus increment"><i className="fa fa-plus"></i></button>
                                          </div>
                                       </td>
                                       <td className="text-end">{item.total}</td>
                                       <td>
                                          <a style={{cursor:"pointer"}} onClick={() => dispatch(remove_cart_product(item))} className="table eg-cart__remove"><RemoveIcon /></a>
                                       </td>
                                    </tr>
                                 )}
                              </tbody>
                           </table>
                        </div>

                        <div className="eg-cart__bottom mt-60">
                           <div className="row align-items-end">
                              <div className="col-xl-6 col-md-8 mb-25">
                                 <div className="eg-cart__coupon">
                                    <form action="#">
                                       <div className="eg-cart__coupon-input-box">
                                          <label>Coupon Code:</label>
                                          <div className="eg-cart__coupon-input d-flex align-items-center">
                                             <input type="text" placeholder="Enter Coupon Code" />
                                             <button type="submit">Apply</button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                              <div className="col-xl-6 col-md-4 mb-25">
                                 <div className="eg-cart__update text-md-end">
                                    <button onClick={() => dispatch(clear_cart())} type="button" className="eg-cart__update-btn eg-btn"> Clear Cart </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-xl-3 col-lg-4">
                     <div className="eg-cart-checkout__wrapper">
                        <div className="eg-cart-checkout__top d-flex align-items-center justify-content-between">
                           <span className="eg-cart-checkout__top-title">Subtotal</span>
                           <span className="eg-cart-checkout__top-price">${total.toFixed(2)}</span>
                        </div>
                        <div className="eg-cart-checkout__shipping">
                           <h4 className="eg-cart-checkout__shipping-title">Shipping</h4>

                           <div className="eg-cart-checkout__shipping-option-wrapper">
                              <div className="eg-cart-checkout__shipping-option">
                                 <input id="flat_rate" type="radio" name="shipping" />
                                 <label htmlFor="flat_rate" onClick={() => handleShippingCost(20)}>Flat rate : <span>$20.00</span></label>
                              </div>
                              <div className="eg-cart-checkout__shipping-option">
                                 <input id="local_pickup" type="radio" name="shipping" />
                                 <label htmlFor="local_pickup" onClick={() => handleShippingCost(25)}>Local pickup : <span> $25.00</span></label>
                              </div>
                              <div className="eg-cart-checkout__shipping-option">
                                 <input id="free_shipping" type="radio" name="shipping" />
                                 <label htmlFor="free_shipping" onClick={() => handleShippingCost('free')}>Free shipping</label>
                              </div>
                           </div>
                        </div>
                        <div className="eg-cart-checkout__total d-flex align-items-center justify-content-between">
                           <span>Total</span>
                           <span>${(total + shipCost).toFixed(2)}</span>
                        </div>
                        <div className="eg-cart-checkout__proceed">
                           <Link href="/checkout" className="eg-cart-checkout__btn eg-btn w-100">Proceed to Checkout</Link>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </section>
   )
}

export default CartArea
