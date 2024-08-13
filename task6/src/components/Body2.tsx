import About from "./About";
import Categories2 from "./Categories2";
import Description from "./Description";
import Ideal from "./Ideal";
import Required from "./Required";
import Responsiblities from "./Responsiblities";
import When from "./When";

type candidate = {
  age: String;
  gender: String;
  traits: string[];
};

type aboutT = {
  posted_on: String;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
};

type posting = {
  title: String;
  description: String;
  responsibilities: String[];
  ideal_candidate: candidate;
  when_where: string;
  about: aboutT;
  company: string;
  image: string;
};

export default function Body2({ data }: { data: posting }) {
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
          <Ideal traits={data.ideal_candidate.traits} />
          <When where={data.when_where} />
        </div>

        <div>
          <About
            posted_on={data.about.posted_on}
            end_date={data.about.end_date}
            Deadline={data.about.deadline}
            Location={data.about.location}
            start_date={data.about.start_date}
          />
          <Categories2 cat={data.about.categories} />
          <Required reqs={data.about.required_skills} />
        </div>
      </div>
    </div>
  );
}
