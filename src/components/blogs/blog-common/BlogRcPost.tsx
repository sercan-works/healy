import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import blog_rc_img_1 from "@/assets/img/blog/insta_post02.jpg";
import blog_rc_img_2 from "@/assets/img/blog/insta_post03.jpg";
import blog_rc_img_3 from "@/assets/img/blog/insta_post04.jpg";
import blog_rc_img_4 from "@/assets/img/blog/insta_post05.jpg";

interface DataType {
   id: number;
   img: StaticImageData;
   date: string;
   title: string;
}[]

const rc_post_data: DataType[] = [
   {
      id: 1,
      img: blog_rc_img_1,
      date: "4 March, 2023",
      title: "Lorem ipsum dolor sit cing elit do.",
   },
   {
      id: 2,
      img: blog_rc_img_2,
      date: "10 March, 2023",
      title: "In reprehenderit in velit esse.",
   },
   {
      id: 3,
      img: blog_rc_img_3,
      date: "15 March, 2023",
      title: "Magna aliqua Ut enim ad venia.",
   },
   {
      id: 4,
      img: blog_rc_img_4,
      date: "20 March, 2023",
      title: "Excepteur sint ocat lamnu in tatu.",
   },
]

const BlogRcPost = () => {
   return (
      <div className="widget mb-40">
         <div className="sidebar-title mb-25">
            <h3 className="title">Popular Feeds</h3>
         </div>
         {rc_post_data.map((item) => (
            <div key={item.id} className="rc-post">
               <div className="rc-post-thumb">
                  <Link href="/blog-details"><Image src={item.img} alt="img" /></Link>
               </div>
               <div className="rc-post-content">
                  <h5><Link href="/blog-details">{item.title}</Link></h5>
                  <div className="rc-post-date">
                     <span><i className="far fa-calendar-alt"></i>{item.date}</span>
                  </div>
               </div>
            </div>
         ))}
      </div>
   )
}

export default BlogRcPost
