import Image from "next/image"
import Link from "next/link"

import formulaImg from "@/assets/img/others/formula_img.png"

const fonrmula_list: string[] = ["Tastes like dessert without added sugars or sugar alcohols", "No artificial sweeteners, dairy, say or corn fiber", "10G of collagen protein from grass-fed cows", "Formulated to reduce blood sugar intact", "Organic almond Butter, Sunflower Lecithin", "No energy crashes. Collagen Protein, Stevia", "10G of collagen protein from grass-fed cows",]

const HomeOneFormula = () => {
   return (
      <section className="formula-area formula-bg" style={{ backgroundImage: `url(/assets/img/bg/formula_bg.jpg)` }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 order-0 order-lg-2">
                  <div className="formula-img">
                     <Image src={formulaImg} alt="img" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="formula-content">
                     <div className="section-title white-title mb-50">
                        <p className="sub-title">.. Suxnix Formula ..</p>
                        <h2 className="title">Why We Chose This Formula</h2>
                     </div>
                     <ul className="formula-list list-wrap">
                        {fonrmula_list.map((list, i) => (
                           <li key={i}>{list}</li>
                        ))}
                     </ul>
                     <Link href="/contact" className="eg-btn btn-two">Know More</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeOneFormula
