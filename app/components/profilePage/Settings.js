export default function Settings() {
   return (
      <div
         class="tab-pane fade"
         id="pills-Settingss"
         role="tabpanel"
         aria-labelledby="pills-Settingss-tab"
         tabindex="0">
         <div class="row gy-4">
            <div class="col-lg-4 pe-xl-5">
               <div class="setting-sidebar">
                  <h6 class="setting-sidebar__title">Your Details</h6>
                  <ul class="setting-sidebar-list">
                     <li class="setting-sidebar-list__item">
                        <a
                           href="#personalInfo"
                           class="setting-sidebar-list__link active">
                           Personal Information
                        </a>
                     </li>
                     <li class="setting-sidebar-list__item">
                        <a href="#profile" class="setting-sidebar-list__link">
                           Profile
                        </a>
                     </li>
                     <li class="setting-sidebar-list__item">
                        <a
                           href="#paymentSystem"
                           class="setting-sidebar-list__link">
                           Setup Payment System
                        </a>
                     </li>
                     <li class="setting-sidebar-list__item">
                        <a
                           href="#emailSetting"
                           class="setting-sidebar-list__link">
                           Email Setting
                        </a>
                     </li>
                     <li class="setting-sidebar-list__item">
                        <a
                           href="#socialNetwork"
                           class="setting-sidebar-list__link">
                           Social Networks
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            <div class="col-lg-8">
               <form action="#">
                  <div
                     class="setting-content"
                     data-bs-spy="scroll"
                     data-bs-target="#sidebar-scroll-spy">
                     <div
                        class="card common-card border border-gray-five overflow-hidden mb-24"
                        id="personalInfo">
                        <div class="card-header">
                           <h6 class="title">Personal Information</h6>
                        </div>
                        <div class="card-body">
                           <div class="row gy-3">
                              <div class="col-sm-6 col-xs-6">
                                 <label for="fName" class="form-label">
                                    First Name
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="fName"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="lName" class="form-label">
                                    Last Name
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="lName"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="country" class="form-label">
                                    Country
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="country"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="address" class="form-label">
                                    Address
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="address"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="city" class="form-label">
                                    City
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="city"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="zipCode" class="form-label">
                                    Zip Code
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="zipCode"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="card common-card border border-gray-five overflow-hidden mb-24"
                        id="profile">
                        <div class="card-header">
                           <h6 class="title">Personal Information</h6>
                        </div>
                        <div class="card-body">
                           <div class="row gy-3">
                              <div class="col-sm-6 col-xs-6">
                                 <label for="fileUpload" class="form-label">
                                    Upload a New Avatar
                                 </label>
                                 <input
                                    type="file"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="fileUpload"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="fileUploadTwo" class="form-label">
                                    Upload a New Avatar
                                 </label>
                                 <input
                                    type="file"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="fileUploadTwo"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="ProfileHeading" class="form-label">
                                    Profile Heading
                                 </label>
                                 <input
                                    type="text"
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="ProfileHeading"
                                 />
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label class="form-label">
                                    Show Country on Your
                                 </label>
                                 <div class="flx-align gap-3 mt-2">
                                    <div class="common-check common-radio mb-0">
                                       <input
                                          class="form-check-input"
                                          type="radio"
                                          name="showCountry"
                                          id="yes"
                                       />
                                       <label
                                          class="form-check-label ps-2"
                                          for="yes">
                                          Yes
                                       </label>
                                    </div>
                                    <div class="common-check common-radio mb-0">
                                       <input
                                          class="form-check-input"
                                          type="radio"
                                          name="showCountry"
                                          id="no"
                                       />
                                       <label
                                          class="form-check-label ps-2"
                                          for="no">
                                          No
                                       </label>
                                    </div>
                                 </div>
                              </div>

                              <div class="col-sm-12">
                                 <label for="aboutProfile" class="form-label">
                                    Write Something About Your Profile
                                 </label>
                                 <textarea
                                    class="common-input common-input--md border--color-dark bg--white"
                                    id="aboutProfile"></textarea>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="card common-card border border-gray-five overflow-hidden mb-24"
                        id="paymentSystem">
                        <div class="card-header">
                           <h6 class="title">Payment Method</h6>
                        </div>
                        <div class="card-body">
                           <div class="payment-method mb-0">
                              <div class="payment-method__wrapper arrow-sm">
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment1"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment1">
                                       <img
                                          src="assets/images/thumbs/payment-method1.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment2"
                                       hidden
                                       checked
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment2">
                                       <img
                                          src="assets/images/thumbs/payment-method2.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment3"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment3">
                                       <img
                                          src="assets/images/thumbs/payment-method3.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment4"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment4">
                                       <img
                                          src="assets/images/thumbs/payment-method4.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment5"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment5">
                                       <img
                                          src="assets/images/thumbs/payment-method5.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment6"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment6">
                                       <img
                                          src="assets/images/thumbs/payment-method6.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment7"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment7">
                                       <img
                                          src="assets/images/thumbs/payment-method7.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment8"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment8">
                                       <img
                                          src="assets/images/thumbs/payment-method8.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment9"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment9">
                                       <img
                                          src="assets/images/thumbs/payment-method9.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment10"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment10">
                                       <img
                                          src="assets/images/thumbs/payment-method10.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment11"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment11">
                                       <img
                                          src="assets/images/thumbs/payment-method11.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment12"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment12">
                                       <img
                                          src="assets/images/thumbs/payment-method12.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                                 <div class="payment-method__item">
                                    <input
                                       class="form-check-input"
                                       type="radio"
                                       name="payment"
                                       id="payment13"
                                       hidden
                                    />
                                    <label
                                       class="form-check-label"
                                       for="payment13">
                                       <img
                                          src="assets/images/thumbs/payment-method13.png"
                                          alt=""
                                       />
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="card common-card border border-gray-five overflow-hidden mb-24"
                        id="emailSetting">
                        <div class="card-header">
                           <h6 class="title">Email Settings</h6>
                        </div>
                        <div class="card-body">
                           <div class="row gy-3">
                              <div class="col-sm-6 col-xs-6">
                                 <div class="common-check">
                                    <input
                                       class="form-check-input"
                                       type="checkbox"
                                       id="ratingReminder"
                                    />
                                    <label
                                       class="form-check-label"
                                       for="ratingReminder">
                                       Rating reminder send an email for client
                                       rating
                                    </label>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <div class="common-check">
                                    <input
                                       class="form-check-input"
                                       type="checkbox"
                                       id="reviewNotification"
                                    />
                                    <label
                                       class="form-check-label"
                                       for="reviewNotification">
                                       Item review notification
                                    </label>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <div class="common-check">
                                    <input
                                       class="form-check-input"
                                       type="checkbox"
                                       id="updateNotification"
                                    />
                                    <label
                                       class="form-check-label"
                                       for="updateNotification">
                                       Item update notification
                                    </label>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <div class="common-check">
                                    <input
                                       class="form-check-input"
                                       type="checkbox"
                                       id="dailyNootification"
                                    />
                                    <label
                                       class="form-check-label"
                                       for="dailyNootification">
                                       Daily update notification
                                    </label>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <div class="common-check">
                                    <input
                                       class="form-check-input"
                                       type="checkbox"
                                       id="itemNotification"
                                    />
                                    <label
                                       class="form-check-label"
                                       for="itemNotification">
                                       Item Notification
                                    </label>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <div class="common-check">
                                    <input
                                       class="form-check-input"
                                       type="checkbox"
                                       id="commentNotification"
                                    />
                                    <label
                                       class="form-check-label"
                                       for="commentNotification">
                                       Item comment notification
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        class="card common-card border border-gray-five overflow-hidden mb-24"
                        id="socialNetwork">
                        <div class="card-header">
                           <h6 class="title">Social Network Settings</h6>
                        </div>
                        <div class="card-body">
                           <div class="row gy-3">
                              <div class="col-sm-6 col-xs-6">
                                 <label for="facebookUrl" class="form-label">
                                    Facebook Profile Url
                                 </label>
                                 <div class="position-relative">
                                    <input
                                       type="url"
                                       class="common-input common-input--md common-input--withLeftIcon"
                                       id="facebookUrl"
                                       placeholder="Facebook Profile Url"
                                    />
                                    <span class="input-icon input-icon--left text-main">
                                       <i class="fab fa-facebook-f"></i>
                                    </span>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="linkedinUrl" class="form-label">
                                    Linkedin Profile Url
                                 </label>
                                 <div class="position-relative">
                                    <input
                                       type="url"
                                       class="common-input common-input--md common-input--withLeftIcon"
                                       id="linkedinUrl"
                                       placeholder="Linkedin Profile Url"
                                    />
                                    <span class="input-icon input-icon--left text-main">
                                       <i class="fab fa-linkedin-in"></i>
                                    </span>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="behanceUrl" class="form-label">
                                    Behance Profile Url
                                 </label>
                                 <div class="position-relative">
                                    <input
                                       type="url"
                                       class="common-input common-input--md common-input--withLeftIcon"
                                       id="behanceUrl"
                                       placeholder="Behance Profile Url"
                                    />
                                    <span class="input-icon input-icon--left text-main">
                                       <i class="fab fa-behance"></i>
                                    </span>
                                 </div>
                              </div>
                              <div class="col-sm-6 col-xs-6">
                                 <label for="dribbleUrl" class="form-label">
                                    Dribble Profile Url
                                 </label>
                                 <div class="position-relative">
                                    <input
                                       type="url"
                                       class="common-input common-input--md common-input--withLeftIcon"
                                       id="dribbleUrl"
                                       placeholder="Dribble Profile Url"
                                    />
                                    <span class="input-icon input-icon--left text-main">
                                       <i class="fab fa-dribbble"></i>
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <button type="button" class="btn w-100 btn-main btn-md">
                        Save Information
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}
