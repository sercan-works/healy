"use client"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();


const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (data: FormData) => {
      if (form.current) {
         emailjs.sendForm('eaglesthemes', 'template_lojvsvb', form.current, 'mtLgOuG25NnIwGeKm')
            .then((result) => {
               const notify = () => toast('Message sent successfully', { position: 'top-center' });
               notify();
               reset();
               console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)} id="contact-form" className="contact-form">
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <label htmlFor="full-name">Full Name</label>
                  <input type="text" {...register("user_name")} id="full-name" placeholder="Enter here" />
                  <p className="form_error">{errors.user_name?.message}</p>
                  <div className="help-block with-errors"></div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" {...register("user_email")} id="email" placeholder="Enter here" />
                  <p className="form_error">{errors.user_email?.message}</p>
                  <div className="help-block with-errors"></div>
               </div>
            </div>
         </div>
         <select className="form-select" aria-label="Default select example">
            <option value="1">Select Subject **</option>
            <option value="2">Delivery & Orders</option>
            <option value="3">Diet & Exercise</option>
            <option value="4">Marketing & Press</option>
            <option value="5">Share Your Success</option>
            <option value="6">Wholesale And Returns</option>
         </select>
         <div className="form-grp">
            <label htmlFor="message">Message</label>
            <textarea {...register("message")} id="message" placeholder="Enter here"></textarea>
            <p className="form_error">{errors.message?.message}</p>
            <div className="help-block with-errors"></div>
         </div>
         <div className="form-btn">
            <button value="Send" type="submit" className="eg-btn">make request</button>
         </div>
         <div className="messages"></div>
      </form>
   )
}

export default ContactForm
