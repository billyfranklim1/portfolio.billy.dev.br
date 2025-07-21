import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        404 - Página não encontrada
      </h1>
      <p className="mb-4">
        Ops! A página que você está procurando não existe.
      </p>
      <p className="mb-8">
        Pode ser que o link esteja quebrado ou a página tenha sido removida.
      </p>
      <Link
        href="/"
        className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
      >
        Voltar para a página inicial
      </Link>
    </section>
  );
}