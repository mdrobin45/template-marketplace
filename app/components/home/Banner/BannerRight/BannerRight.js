export default function BannerRight() {
   return (
      <div className="col-lg-6">
         <div className="banner-thumb">
            <img src="./assets/images/thumbs/banner-img.png" alt="" />
            <img
               src="./assets/images/shapes/dots.png"
               alt=""
               className="dotted-img white-version"
            />
            <img
               src="./assets/images/shapes/dots-white.png"
               alt=""
               className="dotted-img dark-version"
            />
            <img
               src="./assets/images/shapes/element2.png"
               alt=""
               className="element two end-0"
            />

            <div className="statistics animation bg-main text-center">
               <h5 className="statistics__amount text-white">50k</h5>
               <span className="statistics__text text-white font-14">
                  Customers
               </span>
            </div>

            <div className="statistics style-two bg-white text-center">
               <h5 className="statistics__amount statistics__amount-two text-heading">
                  22k
               </h5>
               <span className="statistics__text text-heading font-14">
                  Themes & Plugins
               </span>
            </div>
         </div>
      </div>
   );
}
