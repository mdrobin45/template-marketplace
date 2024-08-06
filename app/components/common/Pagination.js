export default function Pagination() {
   return (
      <nav aria-label="Page navigation example">
         <ul className="pagination common-pagination">
            <li className="page-item">
               <a className="page-link" href="#">
                  1
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  2
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  3
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  4
               </a>
            </li>
            <li className="page-item">
               <a className="page-link" href="#">
                  5
               </a>
            </li>
            <li className="page-item">
               <a className="page-link flx-align gap-2 flex-nowrap" href="#">
                  Next
                  <span className="icon line-height-1 font-20">
                     <i className="las la-arrow-right"></i>
                  </span>
               </a>
            </li>
         </ul>
      </nav>
   );
}
