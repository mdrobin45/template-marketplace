import Banner from "components/homePage/Banner/Banner";
import BestSellingProduct from "components/homePage/BestSellingProduct/BestSellingProduct";
import Brand from "components/homePage/Brand";
import CTA from "components/homePage/CTA/CTA";
import FeaturedAuthor from "components/homePage/FeaturedAuthor";
import FeaturedProduct from "components/homePage/FeaturedProduct";
import NewArrival from "components/homePage/NewArrival";
import PopularCategories from "components/homePage/PopularCategories";

export default function Home() {
   return (
      <>
         <Banner />
         <PopularCategories />
         <NewArrival />
         <FeaturedProduct />
         <BestSellingProduct />
         <FeaturedAuthor />
         <CTA />
         <Brand />
      </>
   );
}
