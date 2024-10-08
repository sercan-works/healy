import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import blogInsta_1 from "@/assets/img/blog/insta_post01.jpg"
import blogInsta_2 from "@/assets/img/blog/insta_post02.jpg"
import blogInsta_3 from "@/assets/img/blog/insta_post03.jpg"
import blogInsta_4 from "@/assets/img/blog/insta_post04.jpg"
import blogInsta_5 from "@/assets/img/blog/insta_post05.jpg"
import blogInsta_6 from "@/assets/img/blog/insta_post06.jpg"
import blogInsta_7 from "@/assets/img/blog/insta_post07.jpg"
import blogInsta_8 from "@/assets/img/blog/insta_post08.jpg"
import blogInsta_9 from "@/assets/img/blog/insta_post09.jpg"

const insta_data: StaticImageData[] = [blogInsta_1, blogInsta_2, blogInsta_3, blogInsta_4, blogInsta_5, blogInsta_6, blogInsta_7, blogInsta_8, blogInsta_9]

const BlogInstagram = () => {
   return (
      <div className="widget mb-40">
         <div className="sidebar-title mb-25">
            <h3 className="title">Instagram Feeds</h3>
         </div>
         <div className="sidebar-insta-post">
            <ul className="list-wrap">
               {insta_data.map((item, index) => (
                  <li key={index}>
                     <Link href="#">
                        <Image src={item} alt="img" />
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default BlogInstagram
