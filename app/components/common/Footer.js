import footerBg from "@/assets/images/gradients/footer-gradient.png";
import logo from "@/assets/images/logo/white-logo.png";
import Image from "next/image";
import Link from "next/link";
import {
   FaFacebookF,
   FaInstagram,
   FaLinkedinIn,
   FaTwitter,
} from "react-icons/fa6";

// Social links
const socialList = [
   {
      url: "#",
      icon: <FaFacebookF />,
   },
   {
      url: "#",
      icon: <FaTwitter />,
   },
   {
      url: "#",
      icon: <FaInstagram />,
   },
   {
      url: "#",
      icon: <FaLinkedinIn />,
   },
];

// Useful links
const useFullLinks = [
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
const quickLinks = [
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
      <footer class="footer">
         <Image
            width={300}
            height={300}
            src={footerBg}
            alt=""
            class="bg--gradient"
         />

         <div class="container container-two">
            <div class="row gy-5">
               <div class="col-xl-3 col-sm-6">
                  <div class="footer-item">
                     <div class="footer-item__logo">
                        <a href="index.html">
                           <Image width={100} height={100} src={logo} alt="" />
                        </a>
                     </div>
                     <p class="footer-item__desc">
                        Lorem consultancy elitsed do eiusmod tempor inci didunt
                        ut labore dolore magna aliqua sed do eiusmod.
                     </p>
                     <div class="footer-item__social">
                        <ul class="social-list">
                           {socialList.map((item, index) => (
                              <li key={index} class="social-list__item">
                                 <a
                                    href={item.url}
                                    class="social-list__link flx-center">
                                    {item.icon}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xl-2 col-sm-6 col-xs-6">
                  <div class="footer-item">
                     <h5 class="footer-item__title">Useful Link</h5>
                     <ul class="footer-menu">
                        {useFullLinks.map((item, index) => (
                           <li key={index} class="footer-menu__item">
                              <Link
                                 href={item.linkUrl}
                                 class="footer-menu__link">
                                 {item.linkText}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div class="col-xl-1 d-xl-block d-none"></div>
               <div class="col-xl-2 col-sm-6 col-xs-6">
                  <div class="footer-item">
                     <h5 class="footer-item__title">Quick Links</h5>
                     <ul class="footer-menu">
                        {quickLinks.map((item, index) => (
                           <li key={index} class="footer-menu__item">
                              <Link
                                 href={item.linkUrl}
                                 class="footer-menu__link">
                                 {item.linkText}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div class="col-xl-4 col-sm-6">
                  <div class="footer-item">
                     <h5 class="footer-item__title">Subscribe</h5>
                     <p class="footer-item__desc">
                        Subscribe our newsletter to get updated the latest news
                     </p>
                     <form
                        action="#"
                        class="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
                        <input
                           type="text"
                           class="form-control common-input pill text-white"
                           placeholder="Enter Mail"
                        />
                        <button
                           type="submit"
                           class="btn btn-main btn-lg w-100 pill">
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
