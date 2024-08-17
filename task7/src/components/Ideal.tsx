export default function Ideal({ traits }: { traits: String }) {
  return (
    <div className="w-3/4 mt-5">
      <h1 className="font-bold text-3xl text-black mb-3 font-serif">
        Ideal Candiadate we want
      </h1>
      <ul className="text-black list-disc">
        {
          <li>
            <span className="font-medium text-lg">{traits}</span>
          </li>
        }
      </ul>
    </div>
  );
}
