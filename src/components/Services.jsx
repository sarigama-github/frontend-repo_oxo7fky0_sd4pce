import { Cpu, HardDrive, ShieldCheck, Sparkles, Syringe, Wrench } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Troca e upgrade de peças',
    desc: 'RAM, SSD, placa-mãe, fonte, placa de vídeo e mais, com testes e garantia.',
  },
  {
    icon: Sparkles,
    title: 'Instalação e configuração de softwares',
    desc: 'Instalação licenciada, configurações, suites de escritório, drivers e utilitários.',
  },
  {
    icon: Cpu,
    title: 'Formatação e reinstalação de sistemas',
    desc: 'Windows, Linux ou macOS com drivers, atualização e otimizações essenciais.',
  },
  {
    icon: Syringe,
    title: 'Limpeza interna e otimização',
    desc: 'Higienização completa, troca de pasta térmica e airflow ajustado.',
  },
  {
    icon: ShieldCheck,
    title: 'Remoção de vírus e malware',
    desc: 'Desinfecção profunda, proteção em tempo real e boas práticas de segurança.',
  },
  {
    icon: HardDrive,
    title: 'Backup e migração de dados',
    desc: 'Cópias seguras, espelhamento de discos e transferência entre máquinas.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Serviços</h2>
          <p className="mt-3 text-gray-600">Tudo o que seu computador precisa em um só lugar</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
