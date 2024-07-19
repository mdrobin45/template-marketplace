export default function Pagination() {
   return (
      <nav aria-label="Page navigation example">
         <ul class="pagination common-pagination">
            <li class="page-item">
               <a class="page-link" href="#">
                  1
               </a>
            </li>
            <li class="page-item">
               <a class="page-link" href="#">
                  2
               </a>
            </li>
            <li class="page-item">
               <a class="page-link" href="#">
                  3
               </a>
            </li>
            <li class="page-item">
               <a class="page-link" href="#">
                  4
               </a>
            </li>
            <li class="page-item">
               <a class="page-link" href="#">
                  5
               </a>
            </li>
            <li class="page-item">
               <a class="page-link flx-align gap-2 flex-nowrap" href="#">
                  Next
                  <span class="icon line-height-1 font-20">
                     <i class="las la-arrow-right"></i>
                  </span>
               </a>
            </li>
         </ul>
      </nav>
   );
}
