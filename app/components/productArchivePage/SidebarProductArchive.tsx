export default function SidebarProductArchive() {
   return (
      <div className="col-xl-3 col-lg-4">
         <div className="filter-sidebar">
            <button
               type="button"
               className="filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block">
               <i className="las la-times"></i>
            </button>
            <div className="filter-sidebar__item">
               <h5 className="fw-900 mb-4">Category</h5>
               <div className="filter-sidebar__content">
                  <ul className="filter-sidebar-list">
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           All Categories <span className="qty">25489</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Site Template <span className="qty">12,501</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           WordPress <span className="qty">1258</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           UI Template <span className="qty">1520</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Templates Kits <span className="qty">210</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           eCommerce <span className="qty">158</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Marketing <span className="qty">178</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           CMS Template <span className="qty">122</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Muse Themes <span className="qty">450</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Blogging <span className="qty">155</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Courses <span className="qty">125</span>
                        </a>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <a href="" className="filter-sidebar-list__text">
                           Forums <span className="qty">35</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="filter-sidebar__item">
               <h5 className="fw-900 mb-4">Rating</h5>
               <div className="filter-sidebar__content">
                  <ul className="filter-sidebar-list">
                     <li className="filter-sidebar-list__item">
                        <div className="filter-sidebar-list__text">
                           <div className="common-check common-radio">
                              <input
                                 className="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="veiwAll"
                              />
                              <label className="form-check-label" htmlFor="veiwAll">
                                 {" "}
                                 View All
                              </label>
                           </div>
                           <span className="qty">(1859)</span>
                        </div>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <div className="filter-sidebar-list__text">
                           <div className="common-check common-radio">
                              <input
                                 className="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="oneStar"
                              />
                              <label className="form-check-label" htmlFor="oneStar">
                                 {" "}
                                 1 Star and above
                              </label>
                           </div>
                           <span className="qty">(785)</span>
                        </div>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <div className="filter-sidebar-list__text">
                           <div className="common-check common-radio">
                              <input
                                 className="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="twoStar"
                              />
                              <label className="form-check-label" htmlFor="twoStar">
                                 {" "}
                                 2 Star and above
                              </label>
                           </div>
                           <span className="qty">(685)</span>
                        </div>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <div className="filter-sidebar-list__text">
                           <div className="common-check common-radio">
                              <input
                                 className="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="threeStar"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="threeStar">
                                 {" "}
                                 3 Star and above
                              </label>
                           </div>
                           <span className="qty">(7580)</span>
                        </div>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <div className="filter-sidebar-list__text">
                           <div className="common-check common-radio">
                              <input
                                 className="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="fourStar"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="fourStar">
                                 {" "}
                                 4 Star and above
                              </label>
                           </div>
                           <span className="qty">(1450)</span>
                        </div>
                     </li>
                     <li className="filter-sidebar-list__item">
                        <div className="filter-sidebar-list__text">
                           <div className="common-check common-radio">
                              <input
                                 className="form-check-input"
                                 type="radio"
                                 name="radio"
                                 id="fiveStar"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="fiveStar">
                                 {" "}
                                 5 Star Rating
                              </label>
                           </div>
                           <span className="qty">(2530)</span>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
