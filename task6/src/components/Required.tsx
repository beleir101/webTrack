export default function Required({ reqs }: { reqs: String[] }) {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-3xl text-black mb-3 font-serif">
        Required Skills
      </h1>
      {reqs.map((element, index) => (
        <div
          className=" rounded-xl bg-white border-2 gap-3 font-normal  p-1  text-black  items-center  inline-flex "
          key={index}
        >
          {element}
        </div>
      ))}
    </div>
  );
}
