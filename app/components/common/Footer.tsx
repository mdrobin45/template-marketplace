import footerBg from "@/assets/images/gradients/footer-gradient.png";
import logo from "@/assets/images/logo/white-logo.png";
import Image from "next/image";
import Link from "next/link";

interface linkTypes{
   linkUrl: string,
   linkText:string
}
// Social links
const socialList = [
   {
      url: "#",
      icon: <i className="fa-brands fa-facebook-f"></i>,
   },
   {
      url: "#",
      icon: <i className="fa-brands fa-twitter"></i>,
   },
   {
      url: "#",
      icon: <i className="fa-brands fa-instagram"></i>,
   },
   {
      url: "#",
      icon: <i className="fa-brands fa-linkedin-in"></i>,
   },
];

// Useful links
const useFullLinks:linkTypes[] = [
   {
      linkUrl: "#",
      linkText: "Product",
   },
   {
      linkUrl: "#",
      linkText: "Product Details",
   },
   {
      linkUrl: "#",
      linkText: "Become a Member",
   },
   {
      linkUrl: "#",
      linkText: "Affiliate",
   },
   {
      linkUrl: "#",
      linkText: "Profile",
   },
];

// Useful links
const quickLinks:linkTypes[] = [
   {
      linkUrl: "#",
      linkText: "Product",
   },
   {
      linkUrl: "#",
      linkText: "Product Details",
   },
   {
      linkUrl: "#",
      linkText: "Become a Member",
   },
   {
      linkUrl: "#",
      linkText: "Affiliate",
   },
   {
      linkUrl: "#",
      linkText: "Profile",
   },
];

export default function Footer() {
   return (
      <footer className="footer">
         <Image
            width={300}
            height={300}
            src={footerBg}
            alt=""
            className="bg--gradient"
         />

         <div className="container container-two">
            <div className="row gy-5">
               <div className="col-xl-3 col-sm-6">
                  <div className="footer-item">
                     <div className="footer-item__logo">
                        <a href="index.html">
                           <Image width={100} height={100} src={logo} alt="" />
                        </a>
                     </div>
                     <p className="footer-item__desc">
                        Lorem consultancy elitsed do eiusmod tempor inci didunt
                        ut labore dolore magna aliqua sed do eiusmod.
                     </p>
                     <div className="footer-item__social">
                        <ul className="social-list">
                           {socialList.map((item, index) => (
                              <li key={index} className="social-list__item">
                                 <a
                                    href={item.url}
                                    className="social-list__link flx-center">
                                    {item.icon}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-xl-2 col-sm-6 col-xs-6">
                  <div className="footer-item">
                     <h5 className="footer-item__title">Useful Link</h5>
                     <ul className="footer-menu">
                        {useFullLinks.map((item, index) => (
                           <li key={index} className="footer-menu__item">
                              <Link
                                 href={item.linkUrl}
                                 className="footer-menu__link">
                                 {item.linkText}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-xl-1 d-xl-block d-none"></div>
               <div className="col-xl-2 col-sm-6 col-xs-6">
                  <div className="footer-item">
                     <h5 className="footer-item__title">Quick Links</h5>
                     <ul className="footer-menu">
                        {quickLinks.map((item, index) => (
                           <li key={index} className="footer-menu__item">
                              <Link
                                 href={item.linkUrl}
                                 className="footer-menu__link">
                                 {item.linkText}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="col-xl-4 col-sm-6">
                  <div className="footer-item">
                     <h5 className="footer-item__title">Subscribe</h5>
                     <p className="footer-item__desc">
                        Subscribe our newsletter to get updated the latest news
                     </p>
                     <form
                        action="#"
                        className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
                        <input
                           type="text"
                           className="form-control common-input pill text-white"
                           placeholder="Enter Mail"
                        />
                        <button
                           type="submit"
                           className="btn btn-main btn-lg w-100 pill">
                           Subscribe Now
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
