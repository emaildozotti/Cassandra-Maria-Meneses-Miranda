import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const depoimentos = [
  {
    nome: 'Renata S.',
    resultado: 'Clareza e limites em 8 semanas',
    texto:
      'Eu vivia no piloto automático. Trabalhava, cuidava dos filhos, atendia todo mundo. Mas não sabia mais quem eu era. Com Cassandra aprendi que cuidar de mim não era egoísmo, era a única forma de continuar sendo boa pra quem eu amo. Em dois meses consegui dizer não pela primeira vez na vida.',
    destaque: 'Aprendi que cuidar de mim não era egoísmo. Era a base de tudo.',
  },
  {
    nome: 'Mariana T.',
    resultado: 'Fim das crises de ansiedade em 3 meses',
    texto:
      'Acordava toda madrugada com o coração acelerado. Já tinha tentado outra terapia, mas ficava anos falando das mesmas coisas sem sair do lugar. O método da Cassandra é diferente: ela me ajudou a entender o que estava gerando minha ansiedade e me deu ferramentas concretas. Em três meses as crises pararam.',
    destaque: 'Três meses. As crises pararam.',
  },
  {
    nome: 'Patrícia M.',
    resultado: 'Filho adolescente abriu para diálogo',
    texto:
      'Meu filho tinha parado de falar comigo completamente. Qualquer conversa virava briga. Cassandra atendeu ele por dois meses e foi como se alguém tivesse destrancado uma porta. Ele voltou a conversar. Voltou a sorrir dentro de casa. Não tenho palavras para o que ela fez pela nossa família.',
    destaque: 'Foi como se alguém tivesse destrancado uma porta.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))

  return (
    <section className="section-padding bg-[#1E3A5F]" aria-label="Depoimentos">
      <div className="container-ultra">

        <div className="mb-12">
          <p className="eyebrow-ultra mb-3">Resultados reais</p>
          <h2
            className="font-display text-[#F5F3EF]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            O que dizem quem já percorreu esse caminho
          </h2>
        </div>

        <div className="relative min-h-[380px] md:min-h-[320px]">
          {/* Aspa decorativa gigante */}
          <span
            className="absolute top-0 left-0 font-display text-[#F5F3EF] select-none pointer-events-none leading-none"
            style={{ fontSize: '120px', opacity: 0.06 }}
            aria-hidden="true"
          >
            "
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative z-10 pt-8"
            >
              <p
                className="font-sub text-[#C4A882] italic mb-6"
                style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.9rem)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {depoimentos[current].resultado}
              </p>

              <p
                className="font-sub text-[#F5F3EF]/85 leading-relaxed mb-6 max-w-2xl"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                {depoimentos[current].texto}
              </p>

              <p
                className="font-display text-[#C4A882] italic mb-6"
                style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)' }}
              >
                "{depoimentos[current].destaque}"
              </p>

              <p className="font-sans text-[#F5F3EF]/50 text-sm">
                — {depoimentos[current].nome}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles prev/next + indicadores */}
        <div className="flex items-center gap-6 mt-10">
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="w-11 h-11 rounded-full border border-[#3B6B9E] text-[#F5F3EF]/70 flex items-center justify-center hover:border-[#C4A882] hover:text-[#C4A882] transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: i === current ? '#C4A882' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="w-11 h-11 rounded-full border border-[#3B6B9E] text-[#F5F3EF]/70 flex items-center justify-center hover:border-[#C4A882] hover:text-[#C4A882] transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
