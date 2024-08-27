export default function ProductDescription() {
   return (
      <div
         className="tab-pane fade show active"
         id="pills-product-details"
         role="tabpanel"
         aria-labelledby="pills-product-details-tab"
         tabIndex={0}>
         <div className="product-details">
            <div className="product-details__thumb">
               <img src="assets/images/thumbs/product-details.png" alt="" />
            </div>
            <div className="product-details__buttons flx-align justify-content-center gap-3">
               <a
                  href="#"
                  className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center">
                  Live Preview
                  <img src="assets/images/icons/eye-outline.svg" alt="" />
               </a>

               <a
                  href="#"
                  className="screenshot-btn btn btn-white pill px-sm-5"
                  data-images='["assets/images/thumbs/product-details.png", "assets/images/thumbs/product-details.png"]'>
                  Screenshot
               </a>
            </div>

            <p className="product-details__desc">
               System management saas products, consectetur adipiscing elit, sed
               do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
               enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat
               nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            <div className="product-details__item">
               <h5 className="product-details__title mb-3">
                  Template Features
               </h5>
               <ul className="product-list">
                  <li className="product-list__item">
                     Modern and Professional design
                  </li>
                  <li className="product-list__item">
                     Built with Elementor Pro
                  </li>
                  <li className="product-list__item">
                     100% Responsive & mobile-friendly
                  </li>
                  <li className="product-list__item">
                     12+ pre-built templates
                  </li>
                  <li className="product-list__item">Easy to customize</li>
                  <li className="product-list__item">
                     Fully responsive website
                  </li>
               </ul>
            </div>
            <div className="product-details__item">
               <h5 className="product-details__title mb-3">Layout Features</h5>
               <ul className="product-list">
                  <li className="product-list__item">One-Click demo import</li>
                  <li className="product-list__item">Unlimited color style</li>
                  <li className="product-list__item">850+ google fonts</li>
                  <li className="product-list__item">Powered by dpmarket</li>
                  <li className="product-list__item">
                     Hight resolution images
                  </li>
                  <li className="product-list__item">Easy to customize</li>
               </ul>
            </div>
            <div className="product-details__item">
               <h5 className="product-details__title mb-3">Font Family</h5>
               <ul className="product-list">
                  <li className="product-list__item text-heading">
                     <a
                        href="https://fonts.google.com/specimen/Fira+Sans?query=fira"
                        className="link text-body hover-text-main hover-text-decoration-underline">
                        Fira Sans
                     </a>
                  </li>
                  <li className="product-list__item text-heading">
                     <a
                        href="https://fonts.google.com/specimen/Inter?query=inter"
                        className="link text-body hover-text-main hover-text-decoration-underline">
                        Inter
                     </a>
                  </li>
               </ul>
            </div>
            <div className="product-details__item">
               <h5 className="product-details__title mb-3">Support</h5>
               <p className="product-details__desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
               </p>
            </div>

            <div className="more-item">
               <div className="flx-between mb-4">
                  <h5 className="more-item__title">More Items</h5>
                  <a
                     href="profile.html"
                     className="text-heading fw-500 hover-text-decoration-underline">
                     View Author Profile
                  </a>
               </div>
               <div className="more-item__content flx-align">
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item1.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item2.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item3.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item4.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item5.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item6.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item7.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item8.png" alt="" />
                     </a>
                  </div>
                  <div className="more-item__item">
                     <a
                        href="all-product.html"
                        className="link w-100 h-100 d-block">
                        <img src="assets/images/thumbs/more-item9.png" alt="" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
