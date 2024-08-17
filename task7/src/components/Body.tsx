import Link from "next/link";
import Card from "./Card";
import Opp from "./Opp";
import path from "path";

type format = {
  success: boolean;
  message?: String;
  data: posting[];
  errors?: String[];
  count: number;
};

type posting = {
  id: String;
  title: String;
  description: String;
  responsibilities: String[];
  ideal_candidate: String;
  whenAndWhere: String;
  datePosted: String;
  orgID: String;
  deadline: String;
  location: String[];
  start_date: String;
  end_date: String;
  categories: String[];
  required_skills: String;
  opType: String;
  logoUrl: string;
  status: String;
  applicantsCount: number;
  viewsCount: number;
  orgName: String;
  isBookmarked: boolean;
  isRolling: boolean;
  questions?: String[];
  perksAndBenefits?: String[];
  createdAt: String;
  updatedAt: String;
  orgPrimaryPhone: String;
  orgEmail: String;
  average_rating: number;
  total_views: number;
};
export default async function Body() {
  const postingss = await fetch(
    "https://akil-backend.onrender.com/opportunities/search ",
    { cache: "no-store" }
  ).then((res) => res.json());
  const postings: posting[] = postingss.data;
  return (
    <div
      className="p-5 bg-white flex-col   overflow-auto "
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Opp />
      {postings.map((post, index) => (
        <Link href={`/description/${post.id}`}>
          <Card post={post} key={index} />
        </Link>
      ))}
    </div>
  );
}
