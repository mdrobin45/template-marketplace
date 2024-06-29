import { getPopularCategory } from "utils/dataFetch";

export default function PopularCategories() {
   // const [categories, setCategories] = useState([]);

   // Fetch categories
   // useEffect(() => {
   //    fetch("../../../data/popularCategories.json")
   //       .then((res) => res.json())
   //       .then((data) => console.log(data));
   // }, []);
   const categories = getPopularCategory();
   console.log(categories);
   return (
      <section class="popular padding-y-120 overflow-hidden">
         <div class="container container-two">
            <div class="section-heading style-left mb-64">
               <h5 class="section-heading__title">Popular Categories</h5>
            </div>
            <div class="popular-slider arrow-style-two row gy-4">
               {}
               <div class="col-lg-2">
                  <a href="all-product.html" class="popular-item w-100">
                     <span class="popular-item__icon">
                        {/* <Image
                           src="assets/images/icons/popular-icon1.svg"
                           alt=""
                        /> */}
                     </span>
                     <h6 class="popular-item__title font-18">WordPress</h6>
                     <span class="popular-item__qty text-body">15,296</span>
                  </a>
               </div>
            </div>
            <div class="popular__button text-center">
               <a
                  href="all-product.html"
                  class="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">
                  Explore More
               </a>
            </div>
         </div>
      </section>
   );
}
