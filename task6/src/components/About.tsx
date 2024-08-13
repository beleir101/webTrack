import { CiCirclePlus } from "react-icons/ci";
import { SlFire } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { CiCalendarDate } from "react-icons/ci";
import { LuCalendarCheck } from "react-icons/lu";

export default function About({
  posted_on,
  Deadline,
  Location,
  start_date,
  end_date,
}: {
  posted_on: String;
  Deadline: String;
  Location: String;
  start_date: String;
  end_date: String;
}) {
  return (
    <>
      <h1 className="font-bold text-3xl text-black mb-3 font-serif">About</h1>
      <div className="flex gap-5 text-black items-center mb-3">
        <div className="rounded-full border-2 border- p-2">
          <CiCirclePlus className="text-2xl text-blue-700" />
        </div>
        <div>
          <div className="font-thin">Posted on</div>
          <div className="font-bold">jul, 20203</div>
        </div>
      </div>
      <div className="flex gap-5 text-black items-center mb-3">
        <div className="rounded-full border-2 border- p-2">
          <SlFire className="text-2xl text-blue-700" />
        </div>
        <div>
          <div className="font-thin">Deadline</div>
          <div className="font-bold">jul, 20203</div>
        </div>
      </div>
      <div className="flex gap-5 text-black items-center mb-3">
        <div className="rounded-full border-2 border- p-2">
          <SlLocationPin className="text-2xl text-blue-700" />
        </div>
        <div>
          <div className="font-thin">Location</div>
          <div className="font-bold">jul, 20203</div>
        </div>
      </div>
      <div className="flex gap-5 text-black items-center mb-3">
        <div className="rounded-full border-2 border- p-2">
          <CiCalendarDate className="text-2xl text-blue-700" />
        </div>
        <div>
          <div className="font-thin">Start Date</div>
          <div className="font-bold">jul, 20203</div>
        </div>
      </div>
      <div className="flex gap-5 text-black items-center mb-3">
        <div className="rounded-full border-2 border- p-2">
          <LuCalendarCheck className="text-2xl text-blue-700" />
        </div>
        <div>
          <div className="font-thin">End Date</div>
          <div className="font-bold">jul, 20203</div>
        </div>
      </div>
    </>
  );
}
