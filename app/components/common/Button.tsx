import Link from "next/link";

interface ButtonPropsType{
   url:string, label:string, secondary?:boolean, children?:string, size?:string
}
export default function Button({ url, label, secondary, children, size }:ButtonPropsType) {
   return (
      <>
         {secondary ? (
            size === "small" ? (
               <Link
                  href={url}
                  className="btn btn-outline-light flx-align gap-2 pill btn-lg">
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
                  className="btn btn-outline-light flx-align gap-2 pill btn-lg py-3 px-5">
                  {children ? (
                     <span className="icon-left icon">{children}</span>
                  ) : (
                     ""
                  )}

                  {label}
               </Link>
            )
         ) : size === "small" ? (
            <Link
               href={url}
               className="btn btn-main flx-align gap-2 pill btn-lg">
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
               className="btn btn-main flx-align gap-2 pill btn-lg py-3 px-5">
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
