import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import avatarImg_1 from "@/assets/img/blog/c_01.png"
import avatarImg_2 from "@/assets/img/blog/c_02.png"
import avatarImg_3 from "@/assets/img/blog/c_03.png"

interface DataType {
   id: number;
   avatar: StaticImageData;
   avatar_name: string;
   date: string;
   desc: JSX.Element
   class_name?: string;
}

const comment_data: DataType[] = [
   {
      id: 1,
      avatar: avatarImg_1,
      avatar_name: "Rosalina Kelian",
      date: "19th August 2022",
      desc: (<>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>),
   },
   {
      id: 2,
      avatar: avatarImg_2,
      avatar_name: "Kelian Williamson",
      date: "15th August 2022",
      desc: (<>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>),
      class_name: "children",
   },
   {
      id: 3,
      avatar: avatarImg_3,
      avatar_name: "Arista Williamson",
      date: "10th August 2022",
      desc: (<>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>),
   },
]
const BlogComment = () => {
   return (
      <div className="comment-wrap mb-45">
         <div className="comment-wrap-title mb-35">
            <h5>03 Comments</h5>
         </div>
         <div className="latest-comments">
            <ul className="list-wrap">
               {comment_data.map((item) => (
                  <li key={item.id} className={item.class_name}>
                     <div className="comments-box">
                        <div className="comments-avatar">
                           <Image src={item.avatar} alt="" />
                        </div>
                        <div className="comment-text">
                           <div className="avatar-name mb-10">
                              <h6>{item.avatar_name} <Link href="#" className="comment-reply-link"><i className="fas fa-reply"></i>Reply</Link></h6>
                              <span>{item.date}</span>
                           </div>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default BlogComment
