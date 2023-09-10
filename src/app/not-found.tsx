import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Não encontrado 404</h2>
      <p>Não foi possível encontrar a página desejada</p>
      <Link href="/" className="font-bold">Volte a página inicial</Link>
    </div>
  );
}
