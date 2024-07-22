export default function Breadcrumb({ breadcrumbs }) {
   return (
      <>
         <ul class="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
            {breadcrumbs.map((item, index) => (
               <li key={index} class="breadcrumb-list__item font-14 text-body">
                  <a
                     href="index.html"
                     class="breadcrumb-list__link text-body hover-text-main">
                     Home
                  </a>
               </li>
            ))}
         </ul>
      </>
   );
}
