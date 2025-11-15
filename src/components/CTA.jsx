import { Mail, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contato" className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Pronto para dar um up no seu PC?</h2>
            <p className="mt-3 text-white/80">Fale com a nossa equipe agora mesmo e receba um diagnóstico rápido e um orçamento justo.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+550000000000" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-50 transition-colors">
                <Phone className="h-5 w-5" /> Ligar agora
              </a>
              <a href="mailto:contato@techcare.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 ring-1 ring-white/20 text-white hover:bg-white/15 transition-colors">
                <Mail className="h-5 w-5" /> Enviar e-mail
              </a>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 ring-1 ring-white/20">
            <form className="grid grid-cols-1 gap-4">
              <input placeholder="Seu nome" className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none" />
              <input placeholder="Seu e-mail" className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none" />
              <textarea placeholder="Explique seu problema" rows={4} className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none" />
              <button type="button" className="px-6 py-3 rounded-lg bg-black/80 text-white font-semibold hover:bg-black">Enviar mensagem</button>
              <p className="text-xs text-white/70">Também atendemos via WhatsApp. Resposta em até 1h útil.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
