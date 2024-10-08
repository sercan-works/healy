import Link from "next/link"
import { useSelector, useDispatch } from "react-redux";
import { remove_cart_product } from '@/redux/features/cartSlice';
import UseCartInfo from '@/hooks/UseCartInfo';
import Image from "next/image";
import useSticky from "@/hooks/UseSticky";

const HeaderCart = ({ cartOpen, setCartOpen }: any) => {
   const { sticky } = useSticky();
   const productItem = useSelector((state: any) => state.cart.cart);
   const dispatch = useDispatch();
   const { total } = UseCartInfo();

   return (
      <div className={`${cartOpen ? "mini-cart-opened" : ""} ${sticky ? "sticky-cart" : ""} `}>
         <div className="header-mini-cart" >
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
               <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                  {productItem.map((item: any, i: any) => (
                     <li key={i} className="woocommerce-mini-cart-item d-flex align-items-center">
                        <a style={{cursor:"pointer"}} onClick={() => dispatch(remove_cart_product(item))} className="remove remove_from_cart_button">×</a>
                        <div className="mini-cart-img">
                           <Image src={item.thumb} width={70} height={70} alt="" />
                        </div>
                        <div className="mini-cart-content">
                           <h4 className="product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                           <div className="mini-cart-price">{item.quantity} ×
                              <span className="woocommerce-Price-amount amount">${item.price}</span>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            )
            }
            <p className="woocommerce-mini-cart__total">
               <strong>Subtotal:</strong>
               <span className="woocommerce-Price-amount">${total.toFixed(2)}</span>
            </p>
            <p className="checkout-link">
               <Link href="/cart" className="button wc-forward">View cart</Link>
               <Link href="/checkout" className="button checkout wc-forward">Checkout</Link>
            </p>
         </div>
         <div className={`${cartOpen ? "cart-overlay" : ""}`} onClick={() => setCartOpen(false)}></div>
      </div>
   )
}

export default HeaderCart;
