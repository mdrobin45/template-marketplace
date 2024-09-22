"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "utils/api";
import Image from "next/image";
import Link from "next/link";

interface AuthorMoreItemProps {
  username: string;
}

const AuthorMoreItem = ({ username }: AuthorMoreItemProps) => {
 const { data: author, isLoading } = useQuery({
    queryKey: ["author-moreItems"],
    queryFn: () => getUserByUsername(username),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!author) {
    return null;
  }

  return (
    <div className="more-item">
    <div className="flx-between mb-4">
       <h5 className="more-item__title">More Items</h5>
       <Link
          href="#"
          className="text-heading fw-500 hover-text-decoration-underline">
          View Author Profile
       </Link>
    </div>
    <div className="more-item__content flx-align">
       {author.templates.map((template:any) => (
       <div key={template?._id} className="more-item__item">
          <Link
             href={`/templates/${template.slug}`}
             className="link d-block">
             <Image src={template.thumbnail} alt={template.title} width={100} height={100} />
          </Link>
          </div>
       ))}
    </div>
    </div>
  );
};

export default AuthorMoreItem;
