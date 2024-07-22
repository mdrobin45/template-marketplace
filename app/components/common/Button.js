import Link from "next/link";

export default function Button({ url, label, secondary, children, size }) {
   return (
      <>
         {secondary ? (
            size === "small" ? (
               <Link
                  href={url}
                  class="btn btn-outline-light flx-align gap-2 pill btn-lg">
                  {children ? (
                     <span className="icon-left icon">{children}</span>
                  ) : (
                     ""
                  )}

                  {label}
               </Link>
            ) : (
               <Link
                  href={url}
                  class="btn btn-outline-light flx-align gap-2 pill btn-lg py-3 px-5">
                  {children ? (
                     <span className="icon-left icon">{children}</span>
                  ) : (
                     ""
                  )}

                  {label}
               </Link>
            )
         ) : size === "small" ? (
            <Link href={url} class="btn btn-main flx-align gap-2 pill btn-lg">
               {children ? (
                  <span className="icon-left icon">{children}</span>
               ) : (
                  ""
               )}
               {label}
            </Link>
         ) : (
            <Link
               href={url}
               class="btn btn-main flx-align gap-2 pill btn-lg py-3 px-5">
               {children ? (
                  <span className="icon-left icon">{children}</span>
               ) : (
                  ""
               )}
               {label}
            </Link>
         )}
      </>
   );
}
