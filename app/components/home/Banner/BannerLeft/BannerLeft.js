import SearchBox from "./SearchBox";
import TechList from "./TechList";

export default function BannerLeft() {
   return (
      <div className="col-lg-6">
         <div className="banner-inner position-relative pe-lg-5">
            <div className="banner-content">
               <h1 className="banner-content__title">
                  2M+ curated digital products
               </h1>
               <p className="banner-content__desc font-18">
                  Explore the best premium themes and plugins available for
                  sale. Our unique collection is hand-curated by experts. Find
                  and buy the perfect premium theme today.
               </p>
               <SearchBox />
               <TechList />
            </div>
         </div>
      </div>
   );
}
