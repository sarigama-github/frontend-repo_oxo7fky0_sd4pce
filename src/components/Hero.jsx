import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden" id="inicio">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20">
              Suporte Técnico Especializado
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Manutenção de Computadores com Excelência e Agilidade
            </h1>
            <p className="text-lg text-gray-700">
              Soluções completas para sua máquina voltar ao máximo desempenho. Atendimento rápido, transparente e com garantia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contato" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors">
                Solicitar Orçamento
              </a>
              <a href="#servicos" className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-white text-gray-900 ring-1 ring-black/10 hover:bg-gray-50 transition-colors">
                Ver Serviços
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-sm text-gray-600">
                Tempo médio de conclusão: <span className="font-semibold text-gray-900">24–48h</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="text-sm text-gray-600">
                Garantia em todos os serviços
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="md:pl-6">
            <div className="relative rounded-2xl p-6 bg-white/70 backdrop-blur border border-black/5 shadow-xl">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {[
                  'Troca e upgrade de peças (RAM, SSD, placa-mãe, fonte, etc.)',
                  'Instalação e configuração de softwares',
                  'Formatação e reinstalação de sistemas operacionais',
                  'Limpeza interna e otimização de desempenho',
                  'Remoção de vírus e malware',
                  'Backup e migração de dados'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-gray-500">Atendimento em domicílio e retirada/entrega sob consulta.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
