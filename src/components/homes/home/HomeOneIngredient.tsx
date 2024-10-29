import Image, { StaticImageData } from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


import ingredientThumb from "@/assets/img/others/ingredients_img.png";
import ingredientThumbShape from "@/assets/img/others/ingredients_shape.png";

import ingredientThumb_1 from "@/assets/img/others/ingredients_item01.png";
import ingredientThumb_2 from "@/assets/img/others/ingredients_item02.png";
import ingredientThumb_3 from "@/assets/img/others/ingredients_item03.png";
import ingredientThumb_4 from "@/assets/img/others/ingredients_item04.png";
import { BsArrow90DegDown } from "react-icons/bs";

interface DataType {
  id: number;
  thumb: any;
  title: string;
  desc: JSX.Element;
  programs: any[];
}

const ingredient_data: DataType[] = [
  {
    id: 1,
    thumb:
      "https://i0.wp.com/frekanslaringucu.com.tr/wp-content/uploads/2022/04/pa-altin-dongu.jpg?resize=552%2C1024&ssl=1",
    title: "Altın Döngü (Gold Cycle)",
    desc: (
      <>
        Nuno Nina’nın Altın Döngüsü’ndeki bu programlar son derece değerlidir.
        Bu güçlü programlar destek ve önleme, olumsuz etkilerden kurtulma,
        optimum enerji dengesi, refah ve en önemlisi rahatlama sağlar. 7 adet
        karma programdan oluşur. Bu programlar bağışıklığı düzenleyici, dengeye
        getirici, sinir sistemini rahatlatıcı, kaslar ve boşaltım sistemi ile
        ilgili olarak ortalama bir insanın ihtiyacı olan genel program
        frekanslarını içerir.
      </>
    ),
    programs: [
      {
        id: 1,
        title: "Saf(Pure)",
        desc: (
          <>
            Her hücrenin enerji alanının çevresel kirleticiler, toksinler,
            sağlıksız beslenme ve diğer olumsuz faktörlerin biyoenerjetik
            etkisinden kurtulmasına yardımcı olmak için tasarlanmıştır.
          </>
        )
      },
      {
        id: 2,
        title: "Bakım(Care)",
        desc: (
          <>
            Zayıflamış bir biyoenerjetik alanı birçok akut ve kronik
            dengesizliğin nedeni olarak görüyoruz. Çevreniz tarafından sürekli
            olarak bombalanan bağışıklık sisteminizi güçlendirmeye yardımcı
            olmak için tasarlanmıştır.
          </>
        )
      },
      {
        id: 3,
        title: "Denge(Balance)",
        desc: (
          <>
            Çeşitli bedensel fonksiyonların hassas dengesi esenliğimiz ve
            sağlığımız için çok önemlidir. Denge; böbreklerin, dolaşımın,
            lenfatik sistemin ve hormonların biyoenerjetik dengesini ifade eder.
            Vücudun genel enerji alanının derin biyoenerjetik dengesi için ideal
            bir programdır.
          </>
        )
      }
    ]
  },
  {
    id: 2,
    thumb: ingredientThumb_4,
    title: "Only 3g Net Carbs In Every Jar",
    desc: (
      <>A thing added to something else in order to complete or enhance it.</>
    ),
    programs: []
  },
  {
    id: 3,
    thumb: ingredientThumb_4,
    title: "Ingredients To Fuel Your Body",
    desc: (
      <>A thing added to something else in order to complete or enhance it.</>
    ),
    programs: []
  },
  {
    id: 4,
    thumb: ingredientThumb_4,
    title: "Clean Ingredients Only",
    desc: (
      <>A thing added to something else in order to complete or enhance it.</>
    ),
    programs: []
  }
];

const HomeOneIngredient = () => {
  return (
    <section id="ingredient" className="ingredients-area">
      <div className="container">
        {ingredient_data.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary expandIcon={<BsArrow90DegDown />}>
              <h1 className="title">{item.title}</h1>
            </AccordionSummary>
            <AccordionDetails>
              <div className="row align-items-center justify-content-center my-5">
                <div className="col-xl-5 col-lg-6 col-md-7">
                  <div className="ingredients-img ">
                    <Image
                      src={item.thumb}
                      width={250}
                      height={500}
                      alt="img"
                      className="mx-auto"
                    />
                    <Image
                      src={ingredientThumbShape}
                      alt="img"
                      className="shape"
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-9">
                  <div className="ingredients-items-wrap">
                    <div className="row justify-content-center justify-content-lg-start">
                      <div className="">
                        <div
                          className="ingredients-item wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <div className="ingredients-thumb">
                            <Image layout="fill" src={item.thumb} alt="img" />
                          </div>
                          <div className="ingredients-content">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                          </div>
                          <div className="ingredients-programs">
                            {item.programs.map((program) => (
                              <div className=" my-5" key={program.id}>
                                <h1>{program.title}</h1>
                                <p>{program.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default HomeOneIngredient;
