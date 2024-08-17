import Categories from "./Categories";

export default function Categories2({ cat }: { cat: String[] }) {
  return (
    <div className="mt-5">
      <h1 className=" text-3xl text-black mb-4 font-extrabold font-serif">
        Categories
      </h1>
      <Categories elements={cat} />
    </div>
  );
}
