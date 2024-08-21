export default function Fehler({ error }: { error: string | undefined }) {
  return <p className="text-red-500 text-xs italic mt-2">{error}</p>;
}
