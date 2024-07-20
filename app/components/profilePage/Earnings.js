export default function Earnings() {
   return (
      <div
         class="tab-pane fade"
         id="pills-earning"
         role="tabpanel"
         aria-labelledby="pills-earning-tab"
         tabindex="0">
         <div class="row gy-4">
            <div class="col-lg-4 col-sm-6">
               <div class="earning-card position-relative z-index-1">
                  <img
                     src="assets/images/gradients/testimonial-bg.png"
                     alt=""
                     class="hover-bg visible opacity-100"
                  />
                  <div>
                     <h6 class="earning-card__title font-body font-16 mb-2 text-white fw-600">
                        Procuring This Month
                     </h6>
                     <p class="earning-card__text font-14 text-white fw-200">
                        Sales earnings this month (March), after associated
                        author fees, & before taxes:
                     </p>
                  </div>
                  <div>
                     <h5 class="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                        $6422
                     </h5>
                     <p class="earning-card__text font-14 text-white fw-200">
                        All out Procuring after purchaser charge
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6">
               <div class="earning-card position-relative z-index-1">
                  <img
                     src="assets/images/gradients/testimonial-bg.png"
                     alt=""
                     class="hover-bg visible opacity-100"
                  />
                  <div>
                     <h6 class="earning-card__title font-body font-16 mb-2 text-white fw-600">
                        Your Balance
                     </h6>
                  </div>
                  <div>
                     <h5 class="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                        $6422
                     </h5>
                     <p class="earning-card__text font-14 text-white fw-200">
                        Your Total Blance
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-sm-6">
               <div class="earning-card position-relative z-index-1">
                  <img
                     src="assets/images/gradients/testimonial-bg.png"
                     alt=""
                     class="hover-bg visible opacity-100"
                  />
                  <div>
                     <h6 class="earning-card__title font-body font-16 mb-2 text-white fw-600">
                        Absolute Worth of Your Deals.
                     </h6>
                     <p class="earning-card__text font-14 text-white fw-200">
                        Total Value of your sales, before taxes:
                     </p>
                  </div>
                  <div>
                     <h5 class="earning-card__amount mb-1 mt-3 pt-3 border-top text-white">
                        $6422
                     </h5>
                     <p class="earning-card__text font-14 text-white fw-200">
                        Total Value of Sale Before Fee
                     </p>
                  </div>
               </div>
            </div>

            <div class="col-lg-8">
               <div class="dashboard-card">
                  <div class="dashboard-card__header">
                     <h6 class="dashboard-card__title mb-0">Item Sales</h6>
                  </div>
                  <div id="earningChart"></div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="dashboard-card">
                  <div class="dashboard-card__header">
                     <h6 class="dashboard-card__title mb-0">Top Countries</h6>
                  </div>
                  <ul class="country-list">
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag1.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">United States</span>
                        </div>
                        <span class="country-list__amount">$58.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag2.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Maxico</span>
                        </div>
                        <span class="country-list__amount">$69.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag3.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Brazil</span>
                        </div>
                        <span class="country-list__amount">$120.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag4.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Canada</span>
                        </div>
                        <span class="country-list__amount">$25.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag5.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Ireland</span>
                        </div>
                        <span class="country-list__amount">$85.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag6.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Newzealand</span>
                        </div>
                        <span class="country-list__amount">$99.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag7.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Spain</span>
                        </div>
                        <span class="country-list__amount">$89.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag8.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Turkey</span>
                        </div>
                        <span class="country-list__amount">$72.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag9.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Italy</span>
                        </div>
                        <span class="country-list__amount">$465.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag10.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Argentina</span>
                        </div>
                        <span class="country-list__amount">$45.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag11.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Maxico</span>
                        </div>
                        <span class="country-list__amount">$42.00</span>
                     </li>
                     <li class="country-list__item flx-between gap-2">
                        <div class="country-list__content flx-align gap-2">
                           <span class="country-list__flag">
                              <img
                                 src="assets/images/thumbs/flag12.png"
                                 alt=""
                              />
                           </span>
                           <span class="country-list__name">Newzealand</span>
                        </div>
                        <span class="country-list__amount">$89.00</span>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="col-lg-12">
               <div class="card common-card border shadow-none border-gray-five">
                  <div class="card-body">
                     <div class="table-responsive">
                        <table class="table text-body mt--24">
                           <thead>
                              <tr>
                                 <th>Date</th>
                                 <th>Item Sales Count</th>
                                 <th>Earning</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>Friday</td>
                                 <td>2</td>
                                 <td>$5.31</td>
                              </tr>
                              <tr>
                                 <td>Saturday</td>
                                 <td>6</td>
                                 <td>$30.62</td>
                              </tr>
                              <tr>
                                 <td>Sunday</td>
                                 <td>10</td>
                                 <td>$100.34</td>
                              </tr>
                              <tr>
                                 <td>Monday</td>
                                 <td>1</td>
                                 <td>$21.24</td>
                              </tr>
                              <tr>
                                 <td>Tuesday</td>
                                 <td>3</td>
                                 <td>$32.56</td>
                              </tr>
                              <tr>
                                 <td>Wednesday</td>
                                 <td>1</td>
                                 <td>$5.15</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
