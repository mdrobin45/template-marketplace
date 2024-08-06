import Image from "next/image";
import Link from "next/link";

export default function Process({
   colorIcon,
   whiteIcon,
   activeClass,
   title,
   url,
}) {
   return (
      <li className={`process-list__item ${activeClass && activeClass}`}>
         <Link href={url} className="process-list__link">
            <div className="icons">
               {whiteIcon ? (
                  <span className="icon white">
                     <Image
                        width={40}
                        height={40}
                        src={whiteIcon}
                        alt={title}
                     />
                  </span>
               ) : (
                  ""
               )}

               {colorIcon ? (
                  <span className="icon colored">
                     <Image
                        width={40}
                        height={40}
                        src={colorIcon}
                        alt={title}
                     />
                  </span>
               ) : (
                  ""
               )}
            </div>
            <span className="text">{title}</span>
         </Link>
      </li>
   );
}
