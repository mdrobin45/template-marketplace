import Image from "next/image";

interface CategoriesItemType{
   title: string,
   totalCount: number,
   image: string
}
const categories:CategoriesItemType[] = [
   {
      title: "WordPress",
      totalCount: 12900,
      image: "icons/popular-icon1.svg",
   },
   {
      title: "HTML",
      totalCount: 12900,
      image: "icons/popular-icon3.svg",
   },
   {
      title: "JavaScript",
      totalCount: 12900,
      image: "icons/popular-icon4.svg",
   },
   {
      title: "Mobile App",
      totalCount: 12900,
      image: "icons/popular-icon5.svg",
   },
   {
      title: "PHP Script",
      totalCount: 12900,
      image: "/icons/popular-icon6.svg",
   },
   {
      title: "Plugins",
      totalCount: 12900,
      image: "icons/popular-icon2.svg",
   },
];

export default function PopularCategories() {
   return (
      <section className="popular padding-y-120 overflow-hidden">
         <div className="container container-two">
            <div className="section-heading style-left mb-64">
               <h5 className="section-heading__title">Popular Categories</h5>
            </div>
            <div className="popular-slider arrow-style-two row gy-4">
               {categories.map((category, index) => (
                  <div key={index} className="col-lg-2">
                     <a href="all-product.html" className="popular-item w-100">
                        <span className="popular-item__icon">
                           <Image
                              height={40}
                              width={40}
                              src={category.image}
                              alt=""
                           />
                        </span>
                        <h6 className="popular-item__title font-18">
                           {category.title}
                        </h6>
                        <span className="popular-item__qty text-body">
                           {category.totalCount}
                        </span>
                     </a>
                  </div>
               ))}
            </div>
            <div className="popular__button text-center">
               <a
                  href="all-product.html"
                  className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">
                  Explore More
               </a>
            </div>
         </div>
      </section>
   );
}
