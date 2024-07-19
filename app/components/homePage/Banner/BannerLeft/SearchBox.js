import Image from "next/image";

export default function SearchBox() {
   return (
      <div className="search-box">
         <input
            type="text"
            className="common-input common-input--lg pill shadow-sm"
            placeholder="Search theme, plugins & more..."
         />
         <button type="submit" className="btn btn-main btn-icon icon border-0">
            <Image
               height={20}
               width={20}
               src="/icons/search.svg"
               alt="Banner search input icon"
            />
         </button>
      </div>
   );
}
