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
      linkText: "Project",
      linkURL: "/",
      submenu: false,
   },
   {
      linkText: "Profile",
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
         {
            linkText: "PHP",
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
                  </ul>
               </div>
               <div class="header-right flx-align">
                  <a
                     href="cart.html"
                     class="header-right__button cart-btn position-relative">
                     <Image
                        width={20}
                        height={20}
                        src="/icons/cart.svg"
                        alt=""
                        class="white-version"
                     />
                     <span class="qty-badge font-12">0</span>
                  </a>

                  <div class="header-right__inner gap-3 flx-align d-lg-flex d-none">
                     <a href="register.html" class="btn btn-main pill">
                        <span class="icon-left icon">
                           <Image
                              width={20}
                              height={20}
                              src="/icons/user.svg"
                              alt=""
                           />{" "}
                        </span>
                        Create Account
                     </a>
                     <div class="language-select flx-align select-has-icon">
                        <Image
                           width={20}
                           height={20}
                           src="/icons/globe.svg"
                           alt=""
                           class="globe-icon white-version"
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
