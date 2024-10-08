import Link from "next/link";

const social_icon: string[] = ["fab fa-facebook-f", "fab fa-twitter", "fab fa-pinterest-p", "fab fa-linkedin-in"];

const SocialIcon = () => {
   return (
      <>
         {social_icon.map((icon, index) => (
            <Link key={index} href="#"><i className={icon}></i></Link>
         ))}
      </>
   )
}

export default SocialIcon;
