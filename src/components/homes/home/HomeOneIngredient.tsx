import Image, { StaticImageData } from "next/image"

import ingredientThumb from "@/assets/img/others/ingredients_img.png"
import ingredientThumbShape from "@/assets/img/others/ingredients_shape.png"

import ingredientThumb_1 from "@/assets/img/others/ingredients_item01.png"
import ingredientThumb_2 from "@/assets/img/others/ingredients_item02.png"
import ingredientThumb_3 from "@/assets/img/others/ingredients_item03.png"
import ingredientThumb_4 from "@/assets/img/others/ingredients_item04.png"

interface DataType {
   id: number,
   thumb: StaticImageData,
   title: string;
   desc: JSX.Element;
}

const ingredient_data: DataType[] = [
   {
      id: 1,
      thumb: ingredientThumb_1,
      title: "Helps You Stick To Your Diet",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
   {
      id: 2,
      thumb: ingredientThumb_2,
      title: "Only 3g Net Carbs In Every Jar",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
   {
      id: 3,
      thumb: ingredientThumb_3,
      title: "Ingredients To Fuel Your Body",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
   {
      id: 4,
      thumb: ingredientThumb_4,
      title: "Clean Ingredients Only",
      desc: (<>A thing added to something else in order to complete or enhance it.</>)
   },
]

const HomeOneIngredient = () => {
   return (
      <section id="ingredient" className="ingredients-area">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-xl-5 col-lg-6 col-md-7">
                  <div className="ingredients-img">
                     <Image src={ingredientThumb} alt="img" />
                     <Image src={ingredientThumbShape} alt="img" className="shape" />
                  </div>
               </div>
               <div className="col-xl-7 col-lg-9">
                  <div className="ingredients-items-wrap">
                     <div className="section-title mb-60">
                        <p className="sub-title">.. Increased Energy With Suxnix ..</p>
                        <h2 className="title">Suxnix Ingredients</h2>
                     </div>
                     <div className="row justify-content-center justify-content-lg-start">
                        {ingredient_data.map((item) => (
                           <div key={item.id} className="col-md-6 col-sm-8">
                              <div className="ingredients-item wow fadeInUp" data-wow-delay=".2s">
                                 <div className="ingredients-thumb">
                                    <Image src={item.thumb} alt="img" />
                                 </div>
                                 <div className="ingredients-content">
                                    <h5 className="title">{item.title}</h5>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeOneIngredient
