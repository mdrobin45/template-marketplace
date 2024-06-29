import Banner from "components/home/Banner/Banner";
import NewArrival from "components/home/NewArrival";
import PopularCategories from "components/home/PopularCategories";

export default function Page() {
   return (
      <>
         <Banner />
         <PopularCategories />
         <NewArrival />
      </>
   );
}
