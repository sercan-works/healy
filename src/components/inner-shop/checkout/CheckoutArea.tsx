"use client"
import Link from "next/link";
import CheckoutInputBox from "./CheckoutInputBox";
import Image from "next/image";
import { useState } from "react";
import UseCartInfo from "@/hooks/UseCartInfo";
import { useDispatch, useSelector } from "react-redux";
import NiceSelect from "@/ui/NiceSelect";

import payment_1 from "@/assets/img/icons/payment-option.png";

const CheckoutArea = () => {

   const selectHandler = (e: any) => { };

   const [bankOpen, setBankOpen] = useState<boolean>(false)
   const [chequeOpen, setChequeOpen] = useState<boolean>(false)
   const [cashOpen, setCashOpen] = useState<boolean>(false)


   const productItem = useSelector((state: any) => state.cart.cart);
   const dispatch = useDispatch();
   const { total } = UseCartInfo();

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
      <section className="eg-checkout__area pt-120 pb-120">
         <div className="container">
            <div className="eg-checkout__notice mb-15">Returning Customer? <Link href="/login">Click here to Login</Link></div>
            <div className="row">
               <div className="col-lg-7">
                  <div className="eg-checkout__wrapper">
                     <div className="eg-checkout__billing-address">
                        <h3 className="eg-checkout__title mb-35">Billing details</h3>
                        <form className="eg-checkout__form">
                           <div className="row bs-gutter-x-20">
                              <div className="col-xl-12">
                                 <div className="eg-checkout__input-box">
                                    <NiceSelect
                                       className="selectpicker shop-filter"
                                       options={[
                                          { value: "01", text: "Select a country" },
                                          { value: "02", text: "Canada" },
                                          { value: "03", text: "England" },
                                          { value: "04", text: "Australia" },
                                       ]}
                                       defaultCurrent={0}
                                       onChange={selectHandler}
                                       name=""
                                       placeholder="" />
                                 </div>
                              </div>
                              <CheckoutInputBox />
                           </div>

                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="eg-checkout__check-box">
                                    <input id="create_free_account" type="checkbox" />
                                    <label htmlFor="create_free_account">Create an Account?<span></span></label>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>

                     <div className="eg-checkout__shipping-address mt-60">
                        <div className="col-xl-12">
                           <div className="eg-checkout__check-box eg-checkout__shipping-title mb-35">
                              <input id="create_shipping_account" type="checkbox" />
                              <label htmlFor="create_shipping_account">Ship to a different address<span></span></label>
                           </div>
                        </div>
                        <form className="eg-checkout__form" onSubmit={(e)=>e.preventDefault()}>
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="eg-checkout__input-box">
                                    <NiceSelect
                                       className="selectpicker shop-filter"
                                       options={[
                                          { value: "01", text: "Select a country" },
                                          { value: "02", text: "Canada" },
                                          { value: "03", text: "England" },
                                          { value: "04", text: "Australia" },
                                       ]}
                                       defaultCurrent={0}
                                       onChange={selectHandler}
                                       name=""
                                       placeholder="" />
                                 </div>
                              </div>
                              <CheckoutInputBox />
                           </div>
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="eg-checkout__input-box texarea-box">
                                    <textarea placeholder="Notes about your order" name="form_order_notes"></textarea>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="eg-order__place">
                     <h3 className="eg-checkout__title">Your Order</h3>
                     <div className="eg-order__info-list">
                        <ul>
                           <li className="eg-order__info-list-header">
                              <h6>Product</h6>
                              <h6>Total</h6>
                           </li>

                           {/* <!-- item list --> */}
                           {productItem.map((add_item: any, add_index: any) =>
                              <li key={add_index} className="tp-order-info-list-desc">
                                 <p>{add_item.title} <span> {add_item.price.toFixed(2)} x {add_item.quantity}</span></p>
                                 <span>${(add_item.quantity * add_item.price).toFixed(2)}</span>
                              </li>
                           )}

                           {/* <!-- subtotal --> */}
                           <li className="eg-order__info-list-subtotal">
                              <span>Subtotal</span>
                              <span>${total.toFixed(2)}</span>
                           </li>

                           <li className="eg-order__info-list-shipping">
                              <span>Shipping</span>
                              <div className="eg-cart-checkout__shipping-option-wrapper ">
                                 <div className="eg-cart-checkout__shipping-option eg-order__shipping">
                                    <input id="flat_rate" type="radio" name="shipping" />
                                    <label onClick={() => handleShippingCost(20)} htmlFor="flat_rate">Flat rate : <span>$20.00</span></label>
                                 </div>
                                 <div className="eg-cart-checkout__shipping-option eg-order__shipping">
                                    <input id="local_pickup" type="radio" name="shipping" />
                                    <label onClick={() => handleShippingCost(25)} htmlFor="local_pickup">Local pickup : <span> $25.00</span></label>
                                 </div>
                                 <div className="eg-cart-checkout__shipping-option eg-order__shipping">
                                    <input id="free_shipping" type="radio" name="shipping" />
                                    <label onClick={() => handleShippingCost("free")} htmlFor="free_shipping">Free shipping</label>
                                 </div>
                              </div>
                           </li>

                           {/* <!-- total --> */}
                           <li className="eg-order__info-list-total">
                              <span>Total</span>
                              <span>${(total + shipCost).toFixed(2)}</span>
                           </li>
                        </ul>
                     </div>
                     <div className="eg-checkout-payment">
                        <div className="eg-checkout-payment__item eg-cart-checkout__shipping-option">
                           <input type="radio" id="back_transfer" name="payment" />
                           <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer" onClick={() => setBankOpen(!bankOpen)}>Payment Bank Transfer</label>
                           <div className={`eg-checkout-payment__desc direct-bank-transfer ${bankOpen ? "d-block" : ""}`}>
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                           </div>
                        </div>
                        <div className="eg-checkout-payment__item eg-cart-checkout__shipping-option">
                           <input type="radio" id="cheque_payment" name="payment" />
                           <label htmlFor="cheque_payment" onClick={() => setChequeOpen(!chequeOpen)}>Credit Card (Stripe)</label>
                           <div className={`eg-checkout-payment__desc cheque-payment ${chequeOpen ? "d-block" : ""}`}>
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                           </div>
                        </div>
                        <div className="eg-checkout-payment__item eg-cart-checkout__shipping-option">
                           <input type="radio" id="cod" name="payment" />
                           <label htmlFor="cod" onClick={() => setCashOpen(!cashOpen)}>Cash on Delivery</label>
                           <div className={`eg-checkout-payment__desc cash-on-delivery ${cashOpen ? "d-block" : ""}`}>
                              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                           </div>
                        </div>
                        <div className="eg-checkout-payment__item paypal-payment eg-cart-checkout__shipping-option">
                           <input type="radio" id="paypal" name="payment" />
                           <label htmlFor="paypal">PayPal <Image src={payment_1} alt="" /></label>
                        </div>
                     </div>
                     <div className="eg-checkout__agree mb-25">
                        <div className="eg-checkout__option eg-checkout__check-box">
                           <input id="read_all" type="checkbox" />
                           <label htmlFor="read_all">I have read and agree to the website.</label>
                        </div>
                     </div>
                     <div className="eg-checkout__btn-wrapper">
                        <Link href="/checkout" className="eg-checkout__btn eg-btn w-100">Place Order</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CheckoutArea
