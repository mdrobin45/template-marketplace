import Image from "next/image";

export default function Process({ colorIcon, whiteIcon, activeClass, title }) {
   return (
      <li class={`process-list__item ${activeClass && activeClass}`}>
         <a href="cart-personal.html" class="process-list__link">
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
         </a>
      </li>
   );
}
