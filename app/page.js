import searchSVG from "@/assets/images/icons/search.svg";
import Banner from "components/home/Banner/Banner";
import PopularCategories from "components/home/popularCategories/PopularCategories";

export default function Page() {
   console.log("Import" + searchSVG);
   return (
      <>
         <Banner />
         <PopularCategories />
      </>
   );
}
