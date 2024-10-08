import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import blog_rc_img_1 from "@/assets/img/blog/rp_post01.jpg";
import blog_rc_img_2 from "@/assets/img/blog/rp_post02.jpg";

interface DataType {
   id: number;
   img: StaticImageData;
   date: string;
   title: string;
   desc: JSX.Element
}[]

const rc_post_data: DataType[] = [
   {
      id: 1,
      img: blog_rc_img_1,
      date: "4 March, 2023",
      title: "A series of iOS 7 inspire vector icons sense.",
      desc: (<>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit sed doing.</>),
   },
   {
      id: 2,
      img: blog_rc_img_2,
      date: "10 March, 2023",
      title: "Sed ut perspiciatis unde omnis iste natus.",
      desc: (<>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit sed doing.</>),
   },
]

const BlogRelatedPost = () => {
   return (
      <div className="related-post mt-45">
         <h3>Releted Post</h3>
         <div className="row">
            {rc_post_data.map((item) => (
               <div key={item.id} className="col-md-6">
                  <div className="single-rp mb-45">
                     <div className="rp-thumb">
                        <Link href="#"><Image src={item.img} alt="img" /></Link>
                     </div>
                     <div className="rp-content">
                        <span className="rp-date"><i className="far fa-calendar-alt"></i>{item.date}</span>
                        <h4><Link href="#">{item.title}</Link></h4>
                        <p>{item.desc}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BlogRelatedPost
