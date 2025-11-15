import { useState } from 'react'
import { Menu, Phone, Wrench, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Wrench className="h-7 w-7 text-blue-600" />
          <span className="font-extrabold text-gray-900 tracking-tight">TechCare</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
          <a href="#vantagens" className="hover:text-blue-600 transition-colors">Por que nós</a>
          <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+550000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition-colors">
            <Phone className="h-4 w-4" />
            Ligar agora
          </a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            <a href="#servicos" className="block px-2 py-2 rounded hover:bg-blue-50" onClick={() => setOpen(false)}>Serviços</a>
            <a href="#vantagens" className="block px-2 py-2 rounded hover:bg-blue-50" onClick={() => setOpen(false)}>Por que nós</a>
            <a href="#contato" className="block px-2 py-2 rounded hover:bg-blue-50" onClick={() => setOpen(false)}>Contato</a>
            <a href="tel:+550000000000" className="block px-2 py-2 rounded bg-blue-600 text-white text-center">Ligar agora</a>
          </div>
        </div>
      )}
    </header>
  )
}
