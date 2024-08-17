import Avatar from "./Avatar";
import Categories from "./Categories";
import Header from "./Header";
import Inperson from "./Inperson";
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
export default function Card({ post }: { post: posting }) {
  return (
    <div className="flex justify-center">
      <div className="card rounded-xl w-3/4 shadow-xl border text-black p-5 h-1/2 mt-10">
        <div className="flex gap-10">
          <Avatar url={post.logoUrl} />
          <div>
            <Header
              title={post.title}
              company={post.orgName}
              location={post.location}
            />
            <p className="font-normal text-base">{post.description}</p>
            <div className="flex gap-4 mt-5">
              <Inperson /> <div className="h-10 w-px bg-slate-500"></div>{" "}
              <Categories elements={post.categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
