import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

export default function Responsiblities({ resp }: { resp: String[] }) {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-3xl text-black mb-2 font-serif">
        Responsibilities
      </h1>
      {resp.map((res, index) => (
        <div className="flex gap-1 text-black items-center" key={index}>
          <IoCheckmarkDoneCircleOutline className="text-green-400 text-xl" />
          <p className="text-lg">{res}</p>
        </div>
      ))}
    </div>
  );
}
