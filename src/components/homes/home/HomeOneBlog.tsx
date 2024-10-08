import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/common/Faq";
import blog_data from "@/data/BlogData";


const HomeOneBlog = () => {
   return (
      <section id="news" className="blog-post-area">
         <div className="container">
            <div className="blog-inner-wrapper">
               <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-10">
                     <div className="blog-posts-wrapper">
                        <div className="section-title mb-50">
                           <p className="sub-title">.. Suxnix News ..</p>
                           <h2 className="title">Latest News</h2>
                        </div>
                        
                        {blog_data.filter((item) => item.page === "home_1").map((item) => (
                           <div key={item.id} className="blog-post-item">
                              <Link href="/blog-details">
                                 <Image className="blog-post-thumb" src={item.img} alt="" />
                              </Link>
                              <div className="blog-post-content">
                                 <div className="content-top">
                                    <div className="tags"><Link href="#">{item.tag}</Link></div>
                                    <span className="date"><i className="far fa-clock"></i>{item.date}</span>
                                 </div>
                                 <h3 className="title"><Link href="/blog-details">{item.title}</Link></h3>
                                 <div className="content-bottom">
                                    <ul className="list-wrap">
                                       <li className="user">Post By - <Link href="#">Admin</Link></li>
                                       <li className="comments"><i className="far fa-envelope"></i> {item.comment}</li>
                                       <li className="viewers"><i className="far fa-eye"></i> {item.view}k</li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="col-lg-6 col-md-10">
                     <div className="faq-wrapper">
                        <div className="section-title mb-50">
                           <p className="sub-title">.. Ask Question ..</p>
                           <h2 className="title">Get Every Answers</h2>
                        </div>
                        <FAQ/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="blog-bg-shape one"></div>
         <div className="blog-bg-shape two"></div>
      </section>
   )
}

export default HomeOneBlog
