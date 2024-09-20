import Image from "next/image";
import Link from "next/link";

interface AuthorInfoProps {
   author: {
      avatar: string;
      firstName: string;
      lastName: string;
   };
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
   return (
      <div className="author-details">
         <div className="d-flex align-items-center gap-2">
            <div className="author-details__thumb flex-shrink-0">
               <Image
                  src={author.avatar}
                  alt={author.firstName}
                  width={100}
                  height={100}
               />
            </div>
            <div className="author-details__content">
               <h6 className="author-details__name font-18 mb-2">
                  <Link href={`/profile/${author.firstName}`} className="link hover-text-main">
                     {author.firstName} {author.lastName}
                  </Link>
               </h6>

               <span className="d-flex align-items-center gap-1">
                  {/* TODO: Add rating */}
                  <span className="star-rating__text text-body">5.0</span>
               </span>
            </div>
         </div>

         <ul className="badge-list flx-align gap-2 mt-3">
            <li
               className="badge-list__item"
               data-bs-toggle="tooltip"
               data-bs-placement="top"
               data-bs-title="Badge Info">
               <img src="assets/images/thumbs/badge1.png" alt="" />
            </li>
            <li
               className="badge-list__item"
               data-bs-toggle="tooltip"
               data-bs-placement="top"
               data-bs-title="Badge Info">
               <img src="assets/images/thumbs/badge2.png" alt="" />
            </li>
            <li
               className="badge-list__item"
               data-bs-toggle="tooltip"
               data-bs-placement="top"
               data-bs-title="Badge Info">
               <img src="assets/images/thumbs/badge3.png" alt="" />
            </li>
         </ul>
         <Link
            href={`/profile/${author.firstName}`}
            className="btn btn-outline-light w-100 pill mt-32">
            View Portfolio
         </Link>
      </div>
   );
}
