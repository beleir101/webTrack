export default function Header({ show }: { show: String }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="text-5xl font-extrabold text-black anton">{show}</div>
    </div>
  );
}
