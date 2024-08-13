import { SlLocationPin } from "react-icons/sl";

export default function When({ where }: { where: String }) {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-3xl text-black mb-3 font-serif">
        When & Where
      </h1>
      <div className="flex gap-5 text-black items-center mb-3">
        <div className="rounded-full border-2 border- p-2">
          <SlLocationPin className="text-2xl text-blue-700" />
        </div>
        <div>
          <div className="font-normal">{where}</div>
        </div>
      </div>
    </div>
  );
}
