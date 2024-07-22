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
      <li class={`process-list__item ${activeClass && activeClass}`}>
         <Link href={url} class="process-list__link">
            <div class="icons">
               {whiteIcon ? (
                  <span class="icon white">
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
                  <span class="icon colored">
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
            <span class="text">{title}</span>
         </Link>
      </li>
   );
}
