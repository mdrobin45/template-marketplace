import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import badge1 from "assets/images/logo/3-Years-of-Membership.webp";
import badge2 from "assets/images/logo/Collector-Level-1-badge.webp";
import badge3 from "assets/images/logo/Exclusive-Author-badge.webp";

interface AuthorInfoProps {
    author: {
        avatar: string;
        name: string;
        username: string;
    };
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
    console.log("AuthorInfo", author);
    return (
        <div className="author-details">
            <div className="d-flex align-items-center gap-2">
                <div className="author-details__thumb flex-shrink-0">
                    <Image
                        src={author?.avatar || "https://i.ibb.co.com/nmCN10Z/avatar.png"}
                        alt={author?.name}
                        width={100}
                        height={100}
                    />
                </div>
                <div className="author-details__content">
                    <h6 className="author-details__name font-18 mb-2">
                        <Link href={`/profile/${author.username}`} className="link hover-text-main">
                            {author.name}
                        </Link>
                    </h6>

                    <span className="d-flex align-items-center gap-1">
                        {/* TODO: Add rating */}
                        <span className="star-rating__text text-body">5.0</span>
                    </span>
                </div>
            </div>

            <ul className="badge-list flx-align gap-2 mt-3">
                {
                    [badge1, badge2, badge3].map((badge: StaticImageData, index: number) => (
                        <li key={index} className="badge-list__item">
                            <Image width={100} height={100} src={badge} alt="" />
                        </li>
                    ))
                }

            </ul>
            <Link
                href={`/profile/${author.username}`}
                className="btn btn-outline-light w-100 pill mt-32">
                View Portfolio
            </Link>
        </div>
    );
}
