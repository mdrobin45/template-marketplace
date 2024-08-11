import ArchiveTabContent from "components/productArchivePage/ArchiveTabContent";
import FilterTabs from "components/productArchivePage/FilterTabs";
import SidebarProductArchive from "components/productArchivePage/SidebarProductArchive";
import ArchiveTopSection from "components/productArchivePage/TopSection";

export default function ProductArchive() {
   return (
      <>
         <ArchiveTopSection />
         <section className="all-product padding-y-120">
            <div className="container container-two">
               <div className="row">
                  <FilterTabs />
                  <SidebarProductArchive />
                  <ArchiveTabContent />
               </div>
            </div>
         </section>
      </>
   );
}
