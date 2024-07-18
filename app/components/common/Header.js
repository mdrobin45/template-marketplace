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
      <header className="header">
         <div className="container container-full">
            <nav className="header-inner flx-between">
               <div className="logo">
                  <Link href="/" className="link white-version">
                     <Image src={logo} alt="Logo" />
                  </Link>
               </div>
               <div className="header-menu d-lg-block d-none">
                  <ul className="nav-menu flx-align">
                     {menu.map((item, index) => (
                        <li
                           key={index}
                           className={`nav-menu__item ${
                              item.submenu && "has-submenu"
                           }`}>
                           <Link href={item.linkURL} className="nav-menu__link">
                              {item.linkText}
                           </Link>
                           {item.submenu && (
                              <ul className="nav-submenu">
                                 {item?.submenu?.map((subItem, index) => (
                                    <li
                                       key={index}
                                       className="nav-submenu__item">
                                       <Link
                                          href={subItem.linkURL}
                                          className="nav-submenu__link">
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
               <div className="header-right flx-align">
                  <a
                     href="cart.html"
                     className="header-right__button cart-btn position-relative">
                     <Image
                        width={20}
                        height={20}
                        src="/icons/cart.svg"
                        alt=""
                        className="white-version"
                     />
                     <span className="qty-badge font-12">0</span>
                  </a>

                  <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                     <a href="register.html" className="btn btn-main pill">
                        <span className="icon-left icon">
                           <Image
                              width={20}
                              height={20}
                              src="/icons/user.svg"
                              alt=""
                           />{" "}
                        </span>
                        Create Account
                     </a>
                     <div className="language-select flx-align select-has-icon">
                        <Image
                           width={20}
                           height={20}
                           src="/icons/globe.svg"
                           alt=""
                           className="globe-icon white-version"
                        />
                        <select className="select py-0 ps-2 border-0 fw-500">
                           <option value="1">Eng</option>
                           <option value="2">Bn</option>
                           <option value="3">Eur</option>
                           <option value="4">Urd</option>
                        </select>
                     </div>
                  </div>
                  <button type="button" className="toggle-mobileMenu d-lg-none">
                     <i className="las la-bars"></i>
                  </button>
               </div>
            </nav>
         </div>
      </header>
   );
}
