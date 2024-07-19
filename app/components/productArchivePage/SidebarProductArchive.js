export default function SidebarProductArchive() {
   return (
      <div class="col-xl-3 col-lg-4">
         <div class="filter-sidebar">
            <button
               type="button"
               class="filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block">
               <i class="las la-times"></i>
            </button>
            <div class="filter-sidebar__item">
               <h5 className="fw-900 mb-4">Category</h5>
               <div class="filter-sidebar__content">
                  <ul class="filter-sidebar-list">
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           All Categories <span class="qty">25489</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Site Template <span class="qty">12,501</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           WordPress <span class="qty">1258</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           UI Template <span class="qty">1520</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Templates Kits <span class="qty">210</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           eCommerce <span class="qty">158</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Marketing <span class="qty">178</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           CMS Template <span class="qty">122</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Muse Themes <span class="qty">450</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Blogging <span class="qty">155</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Courses <span class="qty">125</span>
                        </a>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <a href="" class="filter-sidebar-list__text">
                           Forums <span class="qty">35</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="filter-sidebar__item">
               <h5 className="fw-900 mb-4">Rating</h5>
               <div class="filter-sidebar__content">
                  <ul class="filter-sidebar-list">
                     <li class="filter-sidebar-list__item">
                        <div class="filter-sidebar-list__text">
                           <div class="common-check common-radio">
                              <input
                                 class="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="veiwAll"
                              />
                              <label class="form-check-label" for="veiwAll">
                                 {" "}
                                 View All
                              </label>
                           </div>
                           <span class="qty">(1859)</span>
                        </div>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <div class="filter-sidebar-list__text">
                           <div class="common-check common-radio">
                              <input
                                 class="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="oneStar"
                              />
                              <label class="form-check-label" for="oneStar">
                                 {" "}
                                 1 Star and above
                              </label>
                           </div>
                           <span class="qty">(785)</span>
                        </div>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <div class="filter-sidebar-list__text">
                           <div class="common-check common-radio">
                              <input
                                 class="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="twoStar"
                              />
                              <label class="form-check-label" for="twoStar">
                                 {" "}
                                 2 Star and above
                              </label>
                           </div>
                           <span class="qty">(685)</span>
                        </div>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <div class="filter-sidebar-list__text">
                           <div class="common-check common-radio">
                              <input
                                 class="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="threeStar"
                              />
                              <label class="form-check-label" for="threeStar">
                                 {" "}
                                 3 Star and above
                              </label>
                           </div>
                           <span class="qty">(7580)</span>
                        </div>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <div class="filter-sidebar-list__text">
                           <div class="common-check common-radio">
                              <input
                                 class="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="fourStar"
                              />
                              <label class="form-check-label" for="fourStar">
                                 {" "}
                                 4 Star and above
                              </label>
                           </div>
                           <span class="qty">(1450)</span>
                        </div>
                     </li>
                     <li class="filter-sidebar-list__item">
                        <div class="filter-sidebar-list__text">
                           <div class="common-check common-radio">
                              <input
                                 class="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="fiveStar"
                              />
                              <label class="form-check-label" for="fiveStar">
                                 {" "}
                                 5 Star Rating
                              </label>
                           </div>
                           <span class="qty">(2530)</span>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
