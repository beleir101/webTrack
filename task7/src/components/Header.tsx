export default function Header({
  title,
  location,
  company,
}: {
  title: String;
  location: String[];
  company: String;
}) {
  return (
    <>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="relative inline-block font-thin">
        {company}
        <span className="inline-block align-middle mx-2 text-2xl font-thin">
          •
        </span>
        {location[0]}
      </div>
    </>
  );
}
