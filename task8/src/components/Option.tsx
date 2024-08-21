export default function Option({ word }: { word: String }) {
  return (
    <div className="flex gap-3 justify-center text-black items-center mt-5">
      <hr className="border-t border-gray-400 w-20" />
      <p className="font-thin">{word}</p>
      <hr className="border-t border-gray-400 w-20" />
    </div>
  );
}
