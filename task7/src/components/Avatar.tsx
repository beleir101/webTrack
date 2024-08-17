export default function Avatar({ url }: { url: string }) {
  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={url} />
        </div>
      </div>
    </div>
  );
}
