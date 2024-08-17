const colors = [
  "border-yellow-500",
  "border-blue-600",
  "border-red-500",
  "border-purple-600",
];
const texts = [
  "text-yellow-700",
  "text-blue-700",
  "text-red-700",
  "text-purple-700",
];
export default function Categories({ elements }: { elements: String[] }) {
  return (
    <div className="flex gap-3">
      {elements.map((element, index) => (
        <div
          className={` ${colors[index % 4]} ${
            texts[index % 4]
          } rounded-3xl bg-white border-2  p-1 min-w-20  items-center font-bold flex justify-center`}
          key={index}
        >
          {element}
        </div>
      ))}
    </div>
  );
}
