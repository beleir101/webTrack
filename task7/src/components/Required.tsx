export default function Required({ reqs }: { reqs: String }) {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-3xl text-black mb-3 font-serif">
        Required Skills
      </h1>
      <div className=" rounded-xl bg-white border-2 gap-3 font-normal  p-1  text-black  items-center  inline-flex ">
        {reqs}
      </div>
    </div>
  );
}
