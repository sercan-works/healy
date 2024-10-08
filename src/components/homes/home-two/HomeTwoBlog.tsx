import blog_data from '@/data/BlogData'
import Image from 'next/image'
import Link from 'next/link'

const HomeTwoBlog = () => {
   return (
      <section id="news" className="tg-blog-area pt-120 pb-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="tg-section-title text-center mb-60">
                     <h6 className="sub-title">Latest News</h6>
                     <h2 className="title">Suxnix News Feeds</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {blog_data.filter((item) => item.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                     <div className="tg-blog-post-item mb-30 wow fadeInUp" data-wow-delay=".2s">
                        <div className="tg-blog-post-thumb">
                           <Link href="/blog-details"><Image src={item.img} alt="" /></Link>
                           <div className="tg-blog-overlay-tag">
                              <Link href="#">{item.tag}</Link>
                           </div>
                        </div>
                        <div className="tg-blog-post-content">
                           <div className="post-date"><i className="far fa-calendar-alt"></i>{item.date}</div>
                           <h4 className="title"><Link href="/blog-details">{item.title}</Link></h4>
                           <Link href="/blog-details" className="read-more"><span>Read More</span> <i className="fas fa-arrow-right"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default HomeTwoBlog
