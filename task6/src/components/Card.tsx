import Avatar from "./Avatar";
import Categories from "./Categories";
import Header from "./Header";
import Inperson from "./Inperson";
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
export default function Card({ post }: { post: posting }) {
  return (
    <div className="flex justify-center">
      <div className="card rounded-xl w-3/4 shadow-xl border text-black p-5 h-1/2 mt-10">
        <div className="flex gap-10">
          <Avatar />
          <div>
            <Header
              title={post.title}
              company={post.company}
              location={post.about.location}
            />
            <p className="font-normal text-base">{post.description}</p>
            <div className="flex gap-4 mt-5">
              <Inperson /> <div className="h-10 w-px bg-slate-500"></div>{" "}
              <Categories elements={post.about.categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
