export default function FilterTabs() {
   return (
      <div class="col-lg-12">
         <div class="filter-tab gap-3 flx-between">
            <ul
               class="nav common-tab nav-pills mb-0 gap-lg-2 gap-1 ms-lg-auto"
               id="pills-tab"
               role="tablist">
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link active"
                     id="pills-product-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-product"
                     type="button"
                     role="tab"
                     aria-controls="pills-product"
                     aria-selected="true">
                     All Item
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-bestMatch-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-bestMatch"
                     type="button"
                     role="tab"
                     aria-controls="pills-bestMatch"
                     aria-selected="false">
                     Best Match
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-bestRating-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-bestRating"
                     type="button"
                     role="tab"
                     aria-controls="pills-bestRating"
                     aria-selected="false">
                     Best Rating
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-trending-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-trending"
                     type="button"
                     role="tab"
                     aria-controls="pills-trending"
                     aria-selected="false">
                     Site Template
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-bestOffers-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-bestOffers"
                     type="button"
                     role="tab"
                     aria-controls="pills-bestOffers"
                     aria-selected="false">
                     Best Offers
                  </button>
               </li>
               <li class="nav-item" role="presentation">
                  <button
                     class="nav-link"
                     id="pills-bestSelling-tab"
                     data-bs-toggle="pill"
                     data-bs-target="#pills-bestSelling"
                     type="button"
                     role="tab"
                     aria-controls="pills-bestSelling"
                     aria-selected="false">
                     Best Selling
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
}
