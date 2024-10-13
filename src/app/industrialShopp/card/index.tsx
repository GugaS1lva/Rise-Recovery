import Link from 'next/link';

export default function Card() {
  return (
    <Link
      href={"https://google.com"}
      target="_blank"
      className="w-80 h-96 bg-dark_heuristic rounded-xl text-yellow_heuristic p-4 hover:scale-105 transition-all flex flex-col justify-end gap-2">
        <h3>item name</h3>

        <p>Description</p>
        <p>Spec</p>
    </Link>
  )
}