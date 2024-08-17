export default function Description({ description }: { description: String }) {
  return (
    <div className="text-black w-2/3">
      <h1 className="font-bold text-3xl mb-3 font-serif">Description</h1>
      <p>{description}</p>
    </div>
  );
}
