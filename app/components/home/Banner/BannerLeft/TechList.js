import TechIconWhite1 from "@/assets/images/thumbs/tech-icon-white1.png";
import TechIconWhite3 from "@/assets/images/thumbs/tech-icon-white3.png";
import TechIcon1 from "@/assets/images/thumbs/tech-icon1.png";
import TechIcon2 from "@/assets/images/thumbs/tech-icon2.png";
import TechIcon3 from "@/assets/images/thumbs/tech-icon3.png";
import TechIcon4 from "@/assets/images/thumbs/tech-icon4.png";
import TechIcon5 from "@/assets/images/thumbs/tech-icon5.png";
import TechIcon6 from "@/assets/images/thumbs/tech-icon6.png";
import TechIcon7 from "@/assets/images/thumbs/tech-icon7.png";
import TechIcon8 from "@/assets/images/thumbs/tech-icon8.png";
import TechIcon9 from "@/assets/images/thumbs/tech-icon9.png";
import Image from "next/image";

export default function TechList() {
   return (
      <div className="tech-list">
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="WordPress">
            <Image
               height={20}
               width={20}
               src={TechIcon1}
               alt=""
               className="white-version"
            />
            <Image
               height={20}
               width={20}
               src={TechIconWhite1}
               alt=""
               className="dark-version"
            />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Laravel">
            <Image src={TechIcon2} alt="" />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="PHP">
            <Image
               height={20}
               width={20}
               src={TechIcon3}
               alt=""
               className="white-version"
            />
            <Image
               height={20}
               width={20}
               src={TechIconWhite3}
               alt=""
               className="dark-version"
            />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="HTML">
            <Image src={TechIcon4} alt="" />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Sketch">
            <Image src={TechIcon5} alt="" />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Figma">
            <Image src={TechIcon6} alt="" />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Bootstrap">
            <Image src={TechIcon7} alt="" />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tailwind">
            <Image src={TechIcon8} alt="" />
         </a>
         <a
            href="all-product.html"
            className="tech-list__item"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="React">
            <Image src={TechIcon9} alt="" />
         </a>
      </div>
   );
}
