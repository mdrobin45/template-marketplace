import Banner from "components/home/Banner/Banner";
import BestSellingProduct from "components/home/BestSellingProduct/BestSellingProduct";
import FeaturedAuthor from "components/home/FeaturedAuthor";
import FeaturedProduct from "components/home/FeaturedProduct";
import NewArrival from "components/home/NewArrival";
import PopularCategories from "components/home/PopularCategories";

export default function Page() {
   return (
      <>
         <Banner />
         <PopularCategories />
         <NewArrival />
         <FeaturedProduct />
         <BestSellingProduct />
         <FeaturedAuthor />
      </>
   );
}
