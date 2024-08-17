"use client";

import Body2 from "@/components/Body2";
import { useParams } from "next/navigation";

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
  responsibilities: String;
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
export default async function Homee() {
  const params = useParams();
  const idx = params.idx as string;
  const postingss = await fetch(
    `https://akil-backend.onrender.com/opportunities/${idx}`,
    { cache: "no-store" }
  ).then((res) => res.json());

  const postings = postingss.data;
  return <Body2 data={postings} />;
}
