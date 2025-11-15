import { CheckCircle2, Clock4, Shield, Star } from 'lucide-react'

const items = [
  {
    icon: Shield,
    title: 'Confiabilidade e segurança',
    desc: 'Processos padronizados, proteção de dados e transparência total.'
  },
  {
    icon: Clock4,
    title: 'Agilidade com qualidade',
    desc: 'Diagnóstico rápido e prazos curtos sem abrir mão do capricho.'
  },
  {
    icon: Star,
    title: 'Profissionalismo comprovado',
    desc: 'Técnicos certificados, peças de qualidade e atendimento humano.'
  },
  {
    icon: CheckCircle2,
    title: 'Garantia em todo serviço',
    desc: 'Nota de serviço e suporte pós-atendimento para sua tranquilidade.'
  },
]

export default function WhyUs() {
  return (
    <section id="vantagens" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Por que escolher a TechCare?</h2>
            <p className="mt-4 text-gray-600">Nossa missão é manter seu computador confiável, seguro e com alto desempenho, sempre com atendimento claro e honesto.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-600/15 to-purple-600/15 border border-black/5 shadow-inner" />
            <div className="absolute -inset-4 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none rounded-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  )
}
