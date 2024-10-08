interface dataType {
   id: number,
   col: string;
   type: string;
   name: string;
   placeholder: string;
   required?: boolean;
}

const checkout_data: dataType[] = [
   {
      id: 1,
      col: "col-xl-6 mr-10",
      type: "text",
      name: "first_name",
      placeholder: "First name",
      required: true,
   },
   {
      id: 2,
      col: "col-xl-6 ml-10",
      type: "text",
      name: "last_name",
      placeholder: "Last name",
      required: true,
   },
   {
      id: 3,
      col: "col-xl-12",
      type: "text",
      name: "company_name",
      placeholder: "Company",
   },
   {
      id: 4,
      col: "col-xl-12",
      type: "text",
      name: "Address",
      placeholder: "Address",
      required: true
   },
   {
      id: 5,
      col: "col-xl-12",
      type: "text",
      name: "company_name",
      placeholder: "Appartment, unit, etc. (optional)",
   },
   {
      id: 6,
      col: "col-xl-12",
      type: "text",
      name: "Town/City",
      placeholder: "Town / City",
      required: true
   },
   {
      id: 7,
      col: "col-xl-6",
      type: "text",
      name: "State",
      placeholder: "State",
      required: true
   },
   {
      id: 8,
      col: "col-xl-6",
      type: "text",
      name: "form_zip",
      placeholder: "Zip code",
   },
   {
      id: 9,
      col: "col-xl-6",
      type: "email",
      name: "email",
      placeholder: "Email address",
   },
   {
      id: 10,
      col: "col-xl-6",
      type: "tel",
      name: "form_phone",
      placeholder: "Phone",
      required: true
   },
]

const CheckoutInputBox = () => {
   return (
      <>
         {checkout_data.map((input) => (
            <div key={input.id} className={input.col}>
               <div className="eg-checkout__input-box">
                  <input type={input.type} name={input.name} placeholder={input.placeholder} required={input.required} />
               </div>
            </div>
         ))}
      </>
   )
}

export default CheckoutInputBox;
