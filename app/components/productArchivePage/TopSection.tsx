import "./styles.css";

export default function ArchiveTopSection() {
   return (
      <section className="breadcrumb breadcrumb-one padding-y-60 section-bg position-relative z-index-1 overflow-hidden">
         <img
            src="assets/images/gradients/breadcrumb-gradient-bg.png"
            alt=""
            className="bg--gradient"
         />

         <img
            src="assets/images/shapes/element-moon3.png"
            alt=""
            className="element one"
         />
         <img
            src="assets/images/shapes/element-moon1.png"
            alt=""
            className="element three"
         />

         <div className="container container-two">
            <div className="row justify-content-center">
               <div className="col-lg-7">
                  <div className="breadcrumb-one-content">
                     <h3 className="breadcrumb-one-content__title text-center mb-3 text-capitalize">
                        58,000+ products available for purchase
                     </h3>
                     <p className="breadcrumb-one-content__desc text-center text-black-three">
                        Explore the best premium themes and plugins available
                        for sale. Our unique collection is hand-curated by
                        experts. Find and buy the perfect premium theme.
                     </p>

                     <form action="#" className="search-box">
                        <input
                           type="text"
                           className="common-input common-input--lg pill shadow-sm"
                           placeholder="Search theme, plugins &amp; more..."
                        />
                        <button
                           type="submit"
                           className="btn btn-main btn-icon icon border-0">
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
