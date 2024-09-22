"use client";

import { useQuery } from "@tanstack/react-query";
import Download from "components/profilePage/Download";
import Earnings from "components/profilePage/Earnings";
import ProfileInfo from "components/profilePage/ProfileDescription";
import Reviews from "components/profilePage/Reviews";
import Settings from "components/profilePage/Settings";
import Statement from "components/profilePage/Statement";
import Templates from "components/profilePage/Templates";
import TopAreaProfile from "components/profilePage/TopAreaProfile";
import { getUserByUsername } from "utils/api";


export default function UserProfile({params}) {
  const {data:author, isLoading} = useQuery({
    queryKey: [`user-profile`],
    queryFn: () => getUserByUsername(params?.username),
  });
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TopAreaProfile author={author} />
      <section className="profile pt-5 padding-b-120">
        <div className="container container-two">
          <div className="tab-content" id="pills-tabb">
            <ProfileInfo />
            <Templates />
            <Settings />
            <Earnings />
            <Statement />
            <Reviews />
            <Download />
          </div>
        </div>
      </section>
    </>
  );
}
