import About from "./About";
import Categories2 from "./Categories2";
import Description from "./Description";
import Ideal from "./Ideal";
import Required from "./Required";
import Responsiblities from "./Responsiblities";
import When from "./When";

type format = {
  success: boolean;
  message?: String;
  data: posting;
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
export default function Body2({ data }: { data: posting }) {
  console.log(data);
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
      <div className="flex gap-5">
        <div className="w-3/4 ml-5">
          <Description description={data.description} />
          <Responsiblities resp={data.responsibilities} />
          <Ideal traits={data.ideal_candidate} />
          <When where={data.whenAndWhere} />
        </div>

        <div>
          <About
            posted_on={data.datePosted}
            end_date={data.end_date}
            Deadline={data.deadline}
            Location={data.location}
            start_date={data.start_date}
          />
          <Categories2 cat={data.categories} />
          <Required reqs={data.required_skills} />
        </div>
      </div>
    </div>
  );
}
