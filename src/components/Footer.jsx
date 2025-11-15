export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {year} TechCare. Todos os direitos reservados.</p>
        <div className="flex items-center gap-6">
          <a href="#servicos" className="hover:text-gray-900">Serviços</a>
          <a href="#vantagens" className="hover:text-gray-900">Por que nós</a>
          <a href="#contato" className="hover:text-gray-900">Contato</a>
        </div>
      </div>
    </footer>
  )
}
