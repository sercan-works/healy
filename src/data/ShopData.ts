import { StaticImageData } from "next/image";

import productThumb_1 from "@/assets/img/products/home_shop_thumb01.png"
import productThumb_2 from "@/assets/img/products/home_shop_thumb02.png"
import productThumb_3 from "@/assets/img/products/home_shop_thumb03.png"


interface ImageLink {
   alt: string;
   src: string; // Change this to string if src is not of type StaticImageData
}

interface dataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   images_link?: ImageLink[];
   discount?: number;
   batch_details?: {
      batch: string;
      batch_icon: string;
   };
   class_name?: string;
   category: string;
   tag?: string;
   title: string;
   price: number | string;
   old_price?: number | string;
   desc?: string;
   rating: number;
   total_rating?: number;
   popular?: string;
   view?: string;
   list?: string[];
   detail_programs?: {key:string,value:string}[];
   alerts?: string[];
   after_sale_support?: {title:string,value:string}[];
   new?: string; // Add this line to include the 'new' property
   healy_product_link?: string;
}

const shopData: dataType[] = [

   // for home one
   {
      id: 1,
      page: "home_1",
      thumb: productThumb_1,
      images_link: [
         { alt: "Healy Rezonans", src: "" },
         { alt: "Healy Rezonans", src: "productThumb_1" },
         { alt: "Healy Rezonans", src: "productThumb_1" },
         { alt: "Healy Rezonans", src: "productThumb_1" },
      ],
      title: "Healy Rezonans",
      discount: 50,
      category: "cihaz",
      price: 27.355,
      total_rating: 0,
      tag: "Frekans Cihazı",
      rating: 0,
      popular: "popular",
   },
   {
      id: 2,
      page: "home_1",
      thumb: productThumb_1,
      images_link: [
         { alt: "Healy Rezonans Plus", src: "" },
         { alt: "Healy Rezonans Plus", src: "productThumb_1" },
         { alt: "Healy Rezonans Plus", src: "productThumb_1" },
         { alt: "Healy Rezonans Plus", src: "productThumb_1" },
      ],
      title: "Healy Rezonans Plus",
      class_name: "yellow",
      discount: 50,
      category: " ",
      price: 45.663,
      total_rating: 0,
      tag: "Frekans Cihazı",
      rating: 0,
      popular: "popular",
   },
   {
      id: 3,
      page: "home_1",
      thumb: productThumb_1,
      images_link: [
         { alt: "Healy Professional", src: "" },
         { alt: "Healy Professional", src: "productThumb_1" },
         { alt: "Healy Professional", src: "productThumb_1" },
         { alt: "Healy Professional", src: "productThumb_1" },
      ],
      title: "Healy Professional",
      class_name: "purple",
      category: "ACCESSORIES",
      discount: 50,
      price: 72.995,
      total_rating: 0,
      tag: "Frekans Cihazı ",
      rating: 0,
      view: "popular",
   },
   {
      id: 4,
      page: "home_1",
      thumb: productThumb_2,
      images_link: [
         { alt: "Healy Obsidian", src: "" },
         { alt: "Healy Obsidian", src: "productThumb_2" },
         { alt: "Healy Obsidian", src: "productThumb_2" },
         { alt: "Healy Obsidian", src: "productThumb_2" },
      ],
      title: "Healy Obsidian",
      class_name: "gray",
      category: "ACCESSORIES",
      price: "166.440",
      total_rating: 0,
      tag: "Frekans Cihazı",
      rating: 0,
      view: "view",
   },
   {
      id: 5,
      page: "home_1",
      thumb: productThumb_3,
      images_link: [
         { alt: "Mag Healy Professional", src: "" },
         { alt: "Mag Healy Professional", src: "productThumb_3" },
         { alt: "Mag Healy Professional", src: "productThumb_3" },
         { alt: "Mag Healy Professional", src: "productThumb_3" },
      ],
      title: "MagHealy Class",
      class_name: "blue",
      discount: 50,
      category: "man gym ",
      price: "61.320",
      total_rating: 0,
      tag: "Frekans Cihazı",
      rating: 0,
      view: "popular",
   },

   // for shop

   {
      id: 1,
      page: "shop",
      thumb: productThumb_1,
      healy_product_link: "https://turkiye.healy.shop/tr/product/healy-resonance-edition/?partnername=0136-1592-2551",
      images_link: [
         { alt: "Healy Rezonans", src: "https://eu.healy.shop/wp-content/uploads/2021/06/healy_02.jpg" },
         { alt: "Healy Rezonans", src: "https://eu.healy.shop/wp-content/uploads/2021/06/healy_03.jpg" },
      ],
      title: "Healy Rezonans",
      discount: 50,
      category: "Frekans Cihazı",
      desc: "Healy Rezonans, kablosuz ve kablolu iletişim teknolojisi ile çalışan bir frekans cihazıdır. Bu cihaz, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar. Healy Rezonans, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar.",
      price: "28.852", //old_price %50
      old_price: 57.705,
      total_rating: 10,
      tag: "",
      rating: 5,
      popular: "popular",
      list: [
         "Gold Cycle",
         "Biyoenerjetik Destek",
         "Uzman Programı sayfası",
         "Biyoenerjetik Uyum 1",
         "Biyoenerjetik Uyum 2",
         "Zihinsel Denge",
         "Meridyenler 1",
         "Meridyenler 2",
         "Çakralar",
         "Zindelik",
         "HealAdvisor Search Modülü",
         "HealAdvisor Analyse Modülleri",
         "HealAdvisor Analyse Resonance Modülü",
         "HealAdvisor Analyse Aura Modülü",
         "HealAdvisor Analyse Success Coach Modülü",
      ],
      detail_programs:[
        {key:"Gold Cycle",value:"Saf, Denge, Varlık, Rahatlık,Bırakma,Enerji,Bakım"},
        {key:"Biyoenerjetik Destek",value:""},
        {key:"Uzman Programı sayfası",value:""},
        {key:"Biyoenerjetik Uyum 1",value:"Bağışıklık Sistemi, Soğuk, Alerjiler, Gözler, Hormonlar, Bağırsak, Sinirler, Hareketlilik, Dolaşım Sistemi, Cinsel Güç, Olgun Kadınlar İçin, Kadınlar İçin "},
        {key:"Biyoenerjetik Uyum 2",value:""},
        {key:"Zihinsel Denge",value:""},
        {key:"Meridyenler 1",value:"Alerji, Bağ Doku, İdrar Torbası, Kalın Bağırsak, İnce Bağırsak, Yağ Dejenereasyonu, Safra Kesesi, Eklem, Cilt, Kalp"},
        {key:"Meridyenler 2",value:"Hormon Dengesi, Dolaşım Sistemi, Karaciğer, Akciğer, Lenf Sistemi, Midye, Dalak Pankreas, Sinir Meridyeni, Böbrekler, Organ Meridyeni"},
        {key:"Çakralar",value:"Taç Çakra, 3.Göz Çakrası, Boğaz Çakrası, Kalp Çakrası, Karın Çakrası, Sakral Çakra, Kök, Çakra"},
        {key:"Zindelik",value:""},

      ],
      alerts: [
         "Ürünün kullanımı, uygulama alanında metalik yabancı cisimler varsa, kalp pilleri veya implante edilmiş defibrilatörler mevcutsa ya da kanama varsa, kanama veya emboli riski varsa gerçekleştirilmemelidir. Cilt, radyoterapötik olarak tedavi edilmişse veya ciltte bir duyusal bozukluk varsa veya kullanıcının ateşi varsa, cilt bölgelerinde uygulama gerçekleştirilmemelidir.",
         "Hamile kadınlarda kullanılması uygun değildir",
         "Epilepsi hastalarında kullanılması uygun değildir",
         "Kalp pili kullanan ya da kalp rahatsızlığı bulunan kişiler kullanmamalıdır",
         "Elektrotları cildin sıyrık, kızarıklık ya da yara bulunan bölgelerine uygulama",
         "Elektrotları asla doğrudan gözlerin üzerine, ağzı kapatacak şekilde, boynun ön tarafına (özellikle de karotid sinüse) ve kalpten geçecek biçimde veya göğüs ve sırtın üst kısmına yerleştirme",
         "Saç, cilt lezyonları veya yara izleri, ciltte kıvrımlar veya kemik çıkıntıları olmayan ve metalik implantların yakınında olmayan bir alan seç.",
         "Hedeflenen kullanıcı grubu yetişkinlerdir",
      ],
      after_sale_support:[
         {title:"Garanti :",value:"24 Ay"},
         {title:"İade :",value:"İlk 14 gün içerisinde"},
         {title:"Program Kurulum Desteği :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından kurulum desteği verilir."},
         {title:"Healy Modülleri Eğitimi :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından eğitim verilir."},
         {title:"Tecrübe :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, kullanıcı paylaşım grubuna alınarak, tecrübe paylaşımı gerçekleştirilir."},
         {title:"Genel olarak:",value:"Her kısımda yanınızdayız.Tek yapmanız gereken Whatsapp üzerinden bizimle iletişime geçmek."},
      ]

   },
   {
      id: 2,
      page: "shop",
      thumb: productThumb_1,
      healy_product_link: "https://turkiye.healy.shop/tr/product/healy-resonance-plus-edition/?partnername=0136-1592-2551",
      images_link: [
         { alt: "Healy Rezonans", src: "https://eu.healy.shop/wp-content/uploads/2021/06/healy_02.jpg" },
         { alt: "Healy Rezonans", src: "https://eu.healy.shop/wp-content/uploads/2021/06/healy_03.jpg" },
      ],
      title: "Healy Rezonans Plus",
      discount: 50,
      category: "Frekans Cihazı",
      desc: "Healy Rezonans, kablosuz ve kablolu iletişim teknolojisi ile çalışan bir frekans cihazıdır. Bu cihaz, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar. Healy Rezonans, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar.",
      price: 48.164, // old_price %50
      old_price: 96.329,
      total_rating: 10,
      tag: "",
      rating: 5,
      popular: "popular",
      list: [
         "Gold Cycle",
         "Biyoenerjetik Destek",
         "Uzman Programı sayfası",
         "Biyoenerjetik Uyum 1",
         "Biyoenerjetik Uyum 2",
         "Zihinsel Denge",
         "Meridyenler 1",
         "Meridyenler 2",
         "Çakralar",
         "Zindelik",
         "Lokal Stimülasyon (Program I’i de içerir)",
         "Uyku",
         "Üçün Gücü",
         "Deep Cycle",
         "Öğrenme",
         "Cilt",
         "HealAdvisor Search Module",
         "HealAdvisor Analyse Resonance Module",
         "HealAdvisor Analyse Aura Module",
         "HealAdvisor Analyse Success Coach Module",
      ],
      detail_programs:[
        {key:"Gold Cycle",value:"Saf, Denge, Varlık, Rahatlık,Bırakma,Enerji,Bakım"},
        {key:"Biyoenerjetik Destek",value:""},
        {key:"Uzman Programı sayfası",value:""},
        {key:"Biyoenerjetik Uyum 1",value:"Bağışıklık Sistemi, Soğuk, Alerjiler, Gözler, Hormonlar, Bağırsak, Sinirler, Hareketlilik, Dolaşım Sistemi, Cinsel Güç, Olgun Kadınlar İçin, Kadınlar İçin "},
        {key:"Biyoenerjetik Uyum 2",value:""},
        {key:"Zihinsel Denge",value:""},
        {key:"Meridyenler 1",value:"Alerji, Bağ Doku, İdrar Torbası, Kalın Bağırsak, İnce Bağırsak, Yağ Dejenereasyonu, Safra Kesesi, Eklem, Cilt, Kalp"},
        {key:"Meridyenler 2",value:"Hormon Dengesi, Dolaşım Sistemi, Karaciğer, Akciğer, Lenf Sistemi, Midye, Dalak Pankreas, Sinir Meridyeni, Böbrekler, Organ Meridyeni"},
        {key:"Çakralar",value:"Taç Çakra, 3.Göz Çakrası, Boğaz Çakrası, Kalp Çakrası, Karın Çakrası, Sakral Çakra, Kök, Çakra"},
        {key:"Zindelik",value:""},

      ],
      alerts: [
         "Ürünün kullanımı, uygulama alanında metalik yabancı cisimler varsa, kalp pilleri veya implante edilmiş defibrilatörler mevcutsa ya da kanama varsa, kanama veya emboli riski varsa gerçekleştirilmemelidir. Cilt, radyoterapötik olarak tedavi edilmişse veya ciltte bir duyusal bozukluk varsa veya kullanıcının ateşi varsa, cilt bölgelerinde uygulama gerçekleştirilmemelidir.",
         "Hamile kadınlarda kullanılması uygun değildir",
         "Epilepsi hastalarında kullanılması uygun değildir",
         "Kalp pili kullanan ya da kalp rahatsızlığı bulunan kişiler kullanmamalıdır",
         "Elektrotları cildin sıyrık, kızarıklık ya da yara bulunan bölgelerine uygulama",
         "Elektrotları asla doğrudan gözlerin üzerine, ağzı kapatacak şekilde, boynun ön tarafına (özellikle de karotid sinüse) ve kalpten geçecek biçimde veya göğüs ve sırtın üst kısmına yerleştirme",
         "Saç, cilt lezyonları veya yara izleri, ciltte kıvrımlar veya kemik çıkıntıları olmayan ve metalik implantların yakınında olmayan bir alan seç.",
         "Hedeflenen kullanıcı grubu yetişkinlerdir",
      ],
      after_sale_support:[
         {title:"Garanti :",value:"24 Ay"},
         {title:"İade :",value:"İlk 14 gün içerisinde"},
         {title:"Program Kurulum Desteği :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından kurulum desteği verilir."},
         {title:"Healy Modülleri Eğitimi :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından eğitim verilir."},
         {title:"Tecrübe :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, kullanıcı paylaşım grubuna alınarak, tecrübe paylaşımı gerçekleştirilir."},
         {title:"Genel olarak:",value:"Her kısımda yanınızdayız.Tek yapmanız gereken Whatsapp üzerinden bizimle iletişime geçmek."},
      ]

   },
   {
      id: 3,
      page: "shop",
      thumb: productThumb_1,
      healy_product_link: "https://turkiye.healy.shop/tr/product/healy-professional-edition/?partnername=0136-1592-2551",
      images_link: [
         { alt: "Healy Rezonans", src: "https://eu.healy.shop/wp-content/uploads/2021/06/healy_02.jpg" },
         { alt: "Healy Rezonans", src: "https://eu.healy.shop/wp-content/uploads/2021/06/healy_03.jpg" },
      ],
      title: "Healy Professional",
      discount: 50,
      category: "Frekans Cihazı",
      desc: "Healy Rezonans, kablosuz ve kablolu iletişim teknolojisi ile çalışan bir frekans cihazıdır. Bu cihaz, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar. Healy Rezonans, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar.",
      price: "76.992", // old_price %50
      old_price: "153.985",
      total_rating: 10,
      tag: "",
      rating: 5,
      popular: "popular",
      list: [
         "Gold Cycle",
         "Biyoenerjetik Destek",
         "Uzman Programı sayfası",
         "Biyoenerjetik Uyum 1",
         "Biyoenerjetik Uyum 2",
         "Zihinsel Denge",
         "Meridyenler 1",
         "Meridyenler 2",
         "Çakralar",
         "Zindelik",
         "Lokal Stimülasyon (Program I’i de içerir)",
         "Uyku",
         "Üçün Gücü",
         "Deep Cycle",
         "Öğrenme",
         "Cilt",
         "Biyoenerjetik Savunma",
         "İş",
         "Güzellik",
         "HealAdvisor Search Module",
         "HealAdvisor Digital Nutrition",
         "HealAdvisor Bioenergetic Vitalisation Module",
         "HealAdvisor Analyse Resonance Module",
         "HealAdvisor Analyse Aura Module",
         "HealAdvisor Analyse Success Coach Module",
      ],
      detail_programs:[
        {key:"Gold Cycle",value:"Saf, Denge, Varlık, Rahatlık,Bırakma,Enerji,Bakım"},
        {key:"Biyoenerjetik Destek",value:""},
        {key:"Uzman Programı sayfası",value:""},
        {key:"Biyoenerjetik Uyum 1",value:"Bağışıklık Sistemi, Soğuk, Alerjiler, Gözler, Hormonlar, Bağırsak, Sinirler, Hareketlilik, Dolaşım Sistemi, Cinsel Güç, Olgun Kadınlar İçin, Kadınlar İçin "},
        {key:"Biyoenerjetik Uyum 2",value:""},
        {key:"Zihinsel Denge",value:""},
        {key:"Meridyenler 1",value:"Alerji, Bağ Doku, İdrar Torbası, Kalın Bağırsak, İnce Bağırsak, Yağ Dejenereasyonu, Safra Kesesi, Eklem, Cilt, Kalp"},
        {key:"Meridyenler 2",value:"Hormon Dengesi, Dolaşım Sistemi, Karaciğer, Akciğer, Lenf Sistemi, Midye, Dalak Pankreas, Sinir Meridyeni, Böbrekler, Organ Meridyeni"},
        {key:"Çakralar",value:"Taç Çakra, 3.Göz Çakrası, Boğaz Çakrası, Kalp Çakrası, Karın Çakrası, Sakral Çakra, Kök, Çakra"},
        {key:"Zindelik",value:""},

      ],
      alerts: [
         "Ürünün kullanımı, uygulama alanında metalik yabancı cisimler varsa, kalp pilleri veya implante edilmiş defibrilatörler mevcutsa ya da kanama varsa, kanama veya emboli riski varsa gerçekleştirilmemelidir. Cilt, radyoterapötik olarak tedavi edilmişse veya ciltte bir duyusal bozukluk varsa veya kullanıcının ateşi varsa, cilt bölgelerinde uygulama gerçekleştirilmemelidir.",
         "Hamile kadınlarda kullanılması uygun değildir",
         "Epilepsi hastalarında kullanılması uygun değildir",
         "Kalp pili kullanan ya da kalp rahatsızlığı bulunan kişiler kullanmamalıdır",
         "Elektrotları cildin sıyrık, kızarıklık ya da yara bulunan bölgelerine uygulama",
         "Elektrotları asla doğrudan gözlerin üzerine, ağzı kapatacak şekilde, boynun ön tarafına (özellikle de karotid sinüse) ve kalpten geçecek biçimde veya göğüs ve sırtın üst kısmına yerleştirme",
         "Saç, cilt lezyonları veya yara izleri, ciltte kıvrımlar veya kemik çıkıntıları olmayan ve metalik implantların yakınında olmayan bir alan seç.",
         "Hedeflenen kullanıcı grubu yetişkinlerdir",
      ],
      after_sale_support:[
         {title:"Garanti :",value:"24 Ay"},
         {title:"İade :",value:"İlk 14 gün içerisinde"},
         {title:"Program Kurulum Desteği :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından kurulum desteği verilir."},
         {title:"Healy Modülleri Eğitimi :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından eğitim verilir."},
         {title:"Tecrübe :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, kullanıcı paylaşım grubuna alınarak, tecrübe paylaşımı gerçekleştirilir."},
         {title:"Genel olarak:",value:"Her kısımda yanınızdayız.Tek yapmanız gereken Whatsapp üzerinden bizimle iletişime geçmek."},
      ]

   },
   {
      id: 4,
      page: "shop",
      thumb: productThumb_1,
      healy_product_link: "https://turkiye.healy.shop/tr/product/healy-professional-edition/?partnername=0136-1592-2551",
      images_link: [
         { alt: "Healy Obsidian", src: "https://turkiye.healy.shop/wp-content/uploads/2024/06/healy-editions_obsidian.jpg" },
         { alt: "Healy Obsidian", src: "https://turkiye.healy.shop/wp-content/uploads/2024/06/healy-editions_obsidian-02.jpg" },
         { alt: "Healy Obsidian", src: "https://turkiye.healy.shop/wp-content/uploads/2024/06/healy-editions_obsidian-04.jpg" },
         { alt: "Healy Obsidian", src: "https://turkiye.healy.shop/wp-content/uploads/2024/06/healy-editions_obsidian-04-without-earclips.jpg" },
      ],
      title: "Healy Obsidian",
      discount: 50,
      category: "Frekans Cihazı",
      desc: "Healy Rezonans, kablosuz ve kablolu iletişim teknolojisi ile çalışan bir frekans cihazıdır. Bu cihaz, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar. Healy Rezonans, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar.",
      price: "166.440",
      old_price: "166.440",
      total_rating: 10,
      tag: "",
      rating: 5,
      popular: "popular",
      list: [
         "Gold Cycle",
         "Biyoenerjetik Destek",
         "Uzman Programı sayfası",
         "Biyoenerjetik Uyum 1",
         "Biyoenerjetik Uyum 2",
         "Zihinsel Denge",
         "Meridyenler 1",
         "Meridyenler 2",
         "Çakralar",
         "Zindelik",
         "Lokal Stimülasyon (Program I’i de içerir)",
         "Uyku",
         "Üçün Gücü",
         "Deep Cycle",
         "Öğrenme",
         "Cilt",
         "Biyoenerjetik Savunma",
         "İş",
         "Güzellik",
         "HealAdvisor Search Module",
         "HealAdvisor Digital Nutrition",
         "HealAdvisor Bioenergetic Vitalisation Module",
         "HealAdvisor Analyse Resonance Module",
         "HealAdvisor Analyse Aura Module",
         "HealAdvisor Analyse Success Coach Module",
         "Healy Obsidian Edition, Energy Cycle program grubuyla sunduğu 12 özel Individualized Microcurrent Frequency (IMF) programı ile negatif enerjilere ve çevresel etkilere karşı enerjetik kalkanını oluşturmanı sağlıyor.",
         "Healy Obsidian Edition sadece bir ürün değil, aidiyet duygusunu ve toplumsallık bilincini geliştiren bir üyelik deneyimidir. Karşınızda VIP Obsidian Club."
      ],
      detail_programs:[
        {key:"Gold Cycle",value:"Saf, Denge, Varlık, Rahatlık,Bırakma,Enerji,Bakım"},
        {key:"Biyoenerjetik Destek",value:""},
        {key:"Uzman Programı sayfası",value:""},
        {key:"Biyoenerjetik Uyum 1",value:"Bağışıklık Sistemi, Soğuk, Alerjiler, Gözler, Hormonlar, Bağırsak, Sinirler, Hareketlilik, Dolaşım Sistemi, Cinsel Güç, Olgun Kadınlar İçin, Kadınlar İçin "},
        {key:"Biyoenerjetik Uyum 2",value:""},
        {key:"Zihinsel Denge",value:""},
        {key:"Meridyenler 1",value:"Alerji, Bağ Doku, İdrar Torbası, Kalın Bağırsak, İnce Bağırsak, Yağ Dejenereasyonu, Safra Kesesi, Eklem, Cilt, Kalp"},
        {key:"Meridyenler 2",value:"Hormon Dengesi, Dolaşım Sistemi, Karaciğer, Akciğer, Lenf Sistemi, Midye, Dalak Pankreas, Sinir Meridyeni, Böbrekler, Organ Meridyeni"},
        {key:"Çakralar",value:"Taç Çakra, 3.Göz Çakrası, Boğaz Çakrası, Kalp Çakrası, Karın Çakrası, Sakral Çakra, Kök, Çakra"},
        {key:"Zindelik",value:""},

      ],
      alerts: [
         "Ürünün kullanımı, uygulama alanında metalik yabancı cisimler varsa, kalp pilleri veya implante edilmiş defibrilatörler mevcutsa ya da kanama varsa, kanama veya emboli riski varsa gerçekleştirilmemelidir. Cilt, radyoterapötik olarak tedavi edilmişse veya ciltte bir duyusal bozukluk varsa veya kullanıcının ateşi varsa, cilt bölgelerinde uygulama gerçekleştirilmemelidir.",
         "Hamile kadınlarda kullanılması uygun değildir",
         "Epilepsi hastalarında kullanılması uygun değildir",
         "Kalp pili kullanan ya da kalp rahatsızlığı bulunan kişiler kullanmamalıdır",
         "Elektrotları cildin sıyrık, kızarıklık ya da yara bulunan bölgelerine uygulama",
         "Elektrotları asla doğrudan gözlerin üzerine, ağzı kapatacak şekilde, boynun ön tarafına (özellikle de karotid sinüse) ve kalpten geçecek biçimde veya göğüs ve sırtın üst kısmına yerleştirme",
         "Saç, cilt lezyonları veya yara izleri, ciltte kıvrımlar veya kemik çıkıntıları olmayan ve metalik implantların yakınında olmayan bir alan seç.",
         "Hedeflenen kullanıcı grubu yetişkinlerdir",
      ],
      after_sale_support:[
         {title:"Garanti :",value:"24 Ay"},
         {title:"İade :",value:"İlk 14 gün içerisinde"},
         {title:"Program Kurulum Desteği :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından kurulum desteği verilir."},
         {title:"Healy Modülleri Eğitimi :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından eğitim verilir."},
         {title:"Tecrübe :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, kullanıcı paylaşım grubuna alınarak, tecrübe paylaşımı gerçekleştirilir."},
         {title:"Genel olarak:",value:"Her kısımda yanınızdayız.Tek yapmanız gereken Whatsapp üzerinden bizimle iletişime geçmek."},
      ]

   },
   {
      id: 5,
      page: "shop",
      thumb: productThumb_1,
      healy_product_link: "https://turkiye.healy.shop/tr/product/maghealy-classic-edition/?partnername=0136-1592-2551",
      images_link: [
         { alt: "MagHealy Classic Edition", src: "https://turkiye.healy.shop/wp-content/uploads/2023/05/maghealy-classic-1.jpg" },
         { alt: "MagHealy Classic Edition", src: "https://turkiye.healy.shop/wp-content/uploads/2023/05/maghealy_02.jpg" },
         { alt: "MagHealy Classic Edition", src: "https://turkiye.healy.shop/wp-content/uploads/2023/05/maghealy_03-white.jpg" },
         { alt: "MagHealy Classic Edition", src: "https://turkiye.healy.shop/wp-content/uploads/2023/05/maghealy-applications_classic-1and2.jpg" },
      ],
      title: "MagHealy Classic",
      discount: 50,
      category: "Frekans Cihazı",
      desc: "Healy Rezonans, kablosuz ve kablolu iletişim teknolojisi ile çalışan bir frekans cihazıdır. Bu cihaz, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar. Healy Rezonans, kablosuz iletişim teknolojisi sayesinde kullanıcıların kablosuz olarak bağlanmasını sağlar.",
      price: "35.040",
      old_price: "35.040",
      total_rating: 0,
      tag: "",
      rating: 0,
      popular: "popular",
      list: [
         "Atmosphere",
         "Water",
         "McMakin ",
         "Classic Programları 1 (7 program)",
         "Classic Programları 2 (7 program)",
      ],    
      detail_programs:[
        {key:"Gold Cycle",value:"Saf, Denge, Varlık, Rahatlık,Bırakma,Enerji,Bakım"},
        {key:"Biyoenerjetik Destek",value:""},
        {key:"Uzman Programı sayfası",value:""},
        {key:"Biyoenerjetik Uyum 1",value:"Bağışıklık Sistemi, Soğuk, Alerjiler, Gözler, Hormonlar, Bağırsak, Sinirler, Hareketlilik, Dolaşım Sistemi, Cinsel Güç, Olgun Kadınlar İçin, Kadınlar İçin "},
        {key:"Biyoenerjetik Uyum 2",value:""},
        {key:"Zihinsel Denge",value:""},
        {key:"Meridyenler 1",value:"Alerji, Bağ Doku, İdrar Torbası, Kalın Bağırsak, İnce Bağırsak, Yağ Dejenereasyonu, Safra Kesesi, Eklem, Cilt, Kalp"},
        {key:"Meridyenler 2",value:"Hormon Dengesi, Dolaşım Sistemi, Karaciğer, Akciğer, Lenf Sistemi, Midye, Dalak Pankreas, Sinir Meridyeni, Böbrekler, Organ Meridyeni"},
        {key:"Çakralar",value:"Taç Çakra, 3.Göz Çakrası, Boğaz Çakrası, Kalp Çakrası, Karın Çakrası, Sakral Çakra, Kök, Çakra"},
        {key:"Zindelik",value:""},

      ],
      alerts: [
         "Ürünün kullanımı, uygulama alanında metalik yabancı cisimler varsa, kalp pilleri veya implante edilmiş defibrilatörler mevcutsa ya da kanama varsa, kanama veya emboli riski varsa gerçekleştirilmemelidir. Cilt, radyoterapötik olarak tedavi edilmişse veya ciltte bir duyusal bozukluk varsa veya kullanıcının ateşi varsa, cilt bölgelerinde uygulama gerçekleştirilmemelidir.",
         "Hamile kadınlarda kullanılması uygun değildir",
         "Epilepsi hastalarında kullanılması uygun değildir",
         "Kalp pili kullanan ya da kalp rahatsızlığı bulunan kişiler kullanmamalıdır",
         "Elektrotları cildin sıyrık, kızarıklık ya da yara bulunan bölgelerine uygulama",
         "Elektrotları asla doğrudan gözlerin üzerine, ağzı kapatacak şekilde, boynun ön tarafına (özellikle de karotid sinüse) ve kalpten geçecek biçimde veya göğüs ve sırtın üst kısmına yerleştirme",
         "Saç, cilt lezyonları veya yara izleri, ciltte kıvrımlar veya kemik çıkıntıları olmayan ve metalik implantların yakınında olmayan bir alan seç.",
         "Hedeflenen kullanıcı grubu yetişkinlerdir",
      ],
      after_sale_support:[
         {title:"Garanti :",value:"24 Ay"},
         {title:"İade :",value:"İlk 14 gün içerisinde"},
         {title:"Program Kurulum Desteği :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından kurulum desteği verilir."},
         {title:"Healy Modülleri Eğitimi :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, ilgili Partner tarafından eğitim verilir."},
         {title:"Tecrübe :",value:"Cihaz Healy World Partneri üzerinden alındığı takdirde, kullanıcı paylaşım grubuna alınarak, tecrübe paylaşımı gerçekleştirilir."},
         {title:"Genel olarak:",value:"Her kısımda yanınızdayız.Tek yapmanız gereken Whatsapp üzerinden bizimle iletişime geçmek."},
      ]

   },
   

]

export default shopData;
