export default function ProductComments() {
   return (
      <div
         class="tab-pane fade"
         id="pills-comments"
         role="tabpanel"
         aria-labelledby="pills-comments-tab"
         tabindex="0">
         <div class="comment mt-64 mb-64">
            <h5 class="mb-32">2 Comments</h5>
            <ul class="comment-list">
               <li class="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                  <div class="comment-list__thumb flex-shrink-0">
                     <img
                        src="assets/images/thumbs/comment1.png"
                        class="cover-img"
                        alt=""
                     />
                  </div>
                  <div class="comment-list__content">
                     <div class="flx-between gap-2 align-items-start">
                        <div>
                           <h6 class="comment-list__name font-18 mb-sm-2 mb-1">
                              Jenny Wilson
                           </h6>
                           <span class="comment-list__date font-14">
                              Jan 21, 2024 at 11:25 pm
                           </span>
                        </div>
                        <a
                           class="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                           href="#comment-box">
                           Reply
                           <span class="icon">
                              <img
                                 src="assets/images/icons/reply-icon.svg"
                                 alt=""
                              />
                           </span>
                        </a>
                     </div>
                     <p class="comment-list__desc mt-3">
                        Lorem ipsum dolor sit amet consectetur. Nec nunc
                        pellentesque massa pretium. Quam sapien nec venenatis
                        vivamus sed cras faucibus mi viverra. Quam faucibus
                        morbi cras vitae neque. Necnunc pellentesque massa
                        pretium.
                     </p>
                  </div>
               </li>
               <li>
                  <ul class="comment-list comment-list--two">
                     <li class="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                        <div class="comment-list__thumb flex-shrink-0">
                           <img
                              src="assets/images/thumbs/comment2.png"
                              class="cover-img"
                              alt=""
                           />
                        </div>
                        <div class="comment-list__content">
                           <div class="flx-between gap-2 align-items-start">
                              <div>
                                 <h6 class="comment-list__name font-18 mb-sm-2 mb-1">
                                    Courtney Henry
                                 </h6>
                                 <span class="comment-list__date font-14">
                                    Jan 21, 2024 at 11:25 pm
                                 </span>
                              </div>
                              <a
                                 class="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline"
                                 href="#comment-box">
                                 Reply
                                 <span class="icon">
                                    <img
                                       src="assets/images/icons/reply-icon.svg"
                                       alt=""
                                    />
                                 </span>
                              </a>
                           </div>
                           <p class="comment-list__desc mt-3">
                              Lorem ipsum dolor sit amet consectetur. Nec nunc
                              pellentesque massa pretium. Quam sapien nec
                              venenatis vivamus sed cras faucibus.
                           </p>
                        </div>
                     </li>
                  </ul>
               </li>
            </ul>
         </div>
      </div>
   );
}
