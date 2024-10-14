import CardList from "./cardList/page";

export default function industrialShopp() {
  return (
    // text-[#F3F3F3]/70 text-[#F3F3F3]/35
    <main className="w-screen h-screen bg-dark_heuristic text-[#F3F3F3]">
      <h1>Lista de desejos.</h1>

      <CardList />
    </main>
  )
}
