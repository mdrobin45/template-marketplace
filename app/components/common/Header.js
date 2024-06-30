import logo from "@/assets/images/logo/logo-two.png";
import Image from "next/image";
import Link from "next/link";

const menu = [
   {
      linkText: "Home",
      linkURL: "/",
      submenu: false,
   },
   {
      linkText: "Templates",
      linkURL: "/",
      submenu: [
         {
            linkText: "WordPress",
            linkURL: "#",
         },
         {
            linkText: "HTML",
            linkURL: "#",
         },
      ],
   },
];
export default function Header() {
   return (
      <header class="header">
         <div class="container container-full">
            <nav class="header-inner flx-between">
               <div class="logo">
                  <Link href="/" class="link white-version">
                     <Image src={logo} alt="Logo" />
                  </Link>
               </div>
               <div class="header-menu d-lg-block d-none">
                  <ul class="nav-menu flx-align">
                     {menu.map((item, index) => (
                        <li
                           key={index}
                           class={`nav-menu__item ${
                              item.submenu && "has-submenu"
                           }`}>
                           <Link href={item.linkURL} class="nav-menu__link">
                              {item.linkText}
                           </Link>
                           {item.submenu && (
                              <ul class="nav-submenu">
                                 {item?.submenu?.map((subItem, index) => (
                                    <li key={index} class="nav-submenu__item">
                                       <Link
                                          href={subItem.linkURL}
                                          class="nav-submenu__link">
                                          {subItem.linkText}
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           )}
                        </li>
                     ))}
                     {/* <li class="nav-menu__item has-submenu">
                        <Link to="/" class="nav-menu__link">
                           Home
                        </Link>
                     </li>
                     <li class="nav-menu__item has-submenu">
                        <a href="javascript:void(0)" class="nav-menu__link">
                           Products
                        </a>
                        <ul class="nav-submenu">
                           <li class="nav-submenu__item">
                              <a
                                 href="all-product.html"
                                 class="nav-submenu__link">
                                 All Products
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="product-details.html"
                                 class="nav-submenu__link">
                                 Product Details
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li class="nav-menu__item has-submenu">
                        <a href="javascript:void(0)" class="nav-menu__link">
                           Pages
                        </a>
                        <ul class="nav-submenu">
                           <li class="nav-submenu__item">
                              <a href="profile.html" class="nav-submenu__link">
                                 Profile
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a href="cart.html" class="nav-submenu__link">
                                 Shopping Cart
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="cart-personal.html"
                                 class="nav-submenu__link">
                                 Mailing Address
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="cart-payment.html"
                                 class="nav-submenu__link">
                                 Payment Method
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="cart-thank-you.html"
                                 class="nav-submenu__link">
                                 Preview Order
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="dashboard.html"
                                 class="nav-submenu__link">
                                 Dashboard
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li class="nav-menu__item has-submenu">
                        <a href="javascript:void(0)" class="nav-menu__link">
                           Blog
                        </a>
                        <ul class="nav-submenu">
                           <li class="nav-submenu__item">
                              <a href="blog.html" class="nav-submenu__link">
                                 Blog
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="blog-details.html"
                                 class="nav-submenu__link">
                                 Blog Details
                              </a>
                           </li>
                           <li class="nav-submenu__item">
                              <a
                                 href="blog-details-sidebar.html"
                                 class="nav-submenu__link">
                                 Blog Details Sidebar
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li class="nav-menu__item">
                        <a href="contact.html" class="nav-menu__link">
                           Contact
                        </a>
                     </li> */}
                  </ul>
               </div>
               <div class="header-right flx-align">
                  <a
                     href="cart.html"
                     class="header-right__button cart-btn position-relative">
                     <img
                        src="assets/images/icons/cart.svg"
                        alt=""
                        class="white-version"
                     />
                     <img
                        src="assets/images/icons/cart-white.svg"
                        alt=""
                        class="dark-version"
                     />
                     <span class="qty-badge font-12">0</span>
                  </a>

                  <div class="theme-switch-wrapper position-relative">
                     <label class="theme-switch" for="checkbox">
                        <input type="checkbox" class="d-none" id="checkbox" />
                        <span class="slider text-black header-right__button white-version">
                           <img src="assets/images/icons/sun.svg" alt="" />
                        </span>
                        <span class="slider text-black header-right__button dark-version">
                           <img src="assets/images/icons/moon.svg" alt="" />
                        </span>
                     </label>
                  </div>

                  <div class="header-right__inner gap-3 flx-align d-lg-flex d-none">
                     <a href="register.html" class="btn btn-main pill">
                        <span class="icon-left icon">
                           <img src="assets/images/icons/user.svg" alt="" />{" "}
                        </span>
                        Create Account
                     </a>
                     <div class="language-select flx-align select-has-icon">
                        <img
                           src="assets/images/icons/globe.svg"
                           alt=""
                           class="globe-icon white-version"
                        />
                        <img
                           src="assets/images/icons/globe-white.svg"
                           alt=""
                           class="globe-icon dark-version"
                        />
                        <select class="select py-0 ps-2 border-0 fw-500">
                           <option value="1">Eng</option>
                           <option value="2">Bn</option>
                           <option value="3">Eur</option>
                           <option value="4">Urd</option>
                        </select>
                     </div>
                  </div>
                  <button type="button" class="toggle-mobileMenu d-lg-none">
                     <i class="las la-bars"></i>
                  </button>
               </div>
            </nav>
         </div>
      </header>
   );
}
