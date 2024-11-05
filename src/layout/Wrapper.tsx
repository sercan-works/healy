"use client";

import { useEffect, useState } from "react";
import { animationCreate } from "@/utils/utils";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { get_cart_products } from "@/redux/features/cartSlice";
import ScrollToTop from "@/components/common/ScrollToTop";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import AuraButton from "@/components/common/AuraButton";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cart_products());
  }, [dispatch]);

  return (
    <>
      {children}
      <ScrollToTop />
      <ToastContainer position="bottom-right" />
      <AuraButton onClick={() => setIsOpen(true)} />
      <WhatsAppButton phoneNumber="905516926848" />
    </>
  );
};

export default Wrapper;
