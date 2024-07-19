import "./styles.css";

export default function ArchiveTopSection() {
   return (
      <section class="breadcrumb breadcrumb-one padding-y-60 section-bg position-relative z-index-1 overflow-hidden">
         <img
            src="assets/images/gradients/breadcrumb-gradient-bg.png"
            alt=""
            class="bg--gradient"
         />

         <img
            src="assets/images/shapes/element-moon3.png"
            alt=""
            class="element one"
         />
         <img
            src="assets/images/shapes/element-moon1.png"
            alt=""
            class="element three"
         />

         <div class="container container-two">
            <div class="row justify-content-center">
               <div class="col-lg-7">
                  <div class="breadcrumb-one-content">
                     <h3 class="breadcrumb-one-content__title text-center mb-3 text-capitalize">
                        58,000+ products available for purchase
                     </h3>
                     <p class="breadcrumb-one-content__desc text-center text-black-three">
                        Explore the best premium themes and plugins available
                        for sale. Our unique collection is hand-curated by
                        experts. Find and buy the perfect premium theme.
                     </p>

                     <form action="#" class="search-box">
                        <input
                           type="text"
                           class="common-input common-input--lg pill shadow-sm"
                           placeholder="Search theme, plugins &amp; more..."
                        />
                        <button
                           type="submit"
                           class="btn btn-main btn-icon icon border-0">
                           <img src="assets/images/icons/search.svg" alt="" />
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
