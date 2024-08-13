export default function Ideal({ traits }: { traits: String[] }) {
  return (
    <div className="w-3/4 mt-5">
      <h1 className="font-bold text-3xl text-black mb-3 font-serif">
        Ideal Candiadate we want
      </h1>
      <ul className="text-black list-disc">
        {traits.map((trait, index) => {
          let vals = trait.split(":");
          return (
            <li key={index}>
              <span className="font-bold text-lg">{vals[0]}</span>
              {vals[1] ? ":" + vals[1] : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
