import { FadeIn } from './FadeIn'

const dores = [
  {
    num: '01',
    texto: 'Acorda todo dia já pesada, antes de o dia sequer começar.',
  },
  {
    num: '02',
    texto: 'Cuida de todo mundo, mas quando precisou de alguém, não havia ninguém para você.',
  },
  {
    num: '03',
    texto: 'Faz tudo certo e ainda se sente vazia, vivendo no piloto automático.',
  },
  {
    num: '04',
    texto: 'Tem tanto medo de errar que acaba paralisada, sem conseguir avançar.',
  },
]

export function PainPoints() {
  return (
    <section className="section-padding bg-[#1E3A5F]" aria-label="Identificação">
      <div className="container-ultra">

        <FadeIn>
          <p className="eyebrow-ultra mb-3">Identificação</p>
          <h2
            className="font-display text-[#F5F3EF] mb-14"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Você se reconhece em algum desses?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dores.map((dor, i) => (
            <FadeIn key={dor.num} delay={i * 0.1}>
              <div className="relative p-10 rounded-[8px] border border-[#3B6B9E] bg-[#0D1B2A]/30 overflow-hidden">
                {/* Número decorativo */}
                <span
                  className="absolute top-4 right-6 font-display text-[#F5F3EF] select-none pointer-events-none leading-none"
                  style={{ fontSize: '5rem', opacity: 0.06 }}
                  aria-hidden="true"
                >
                  {dor.num}
                </span>
                <p
                  className="font-sub text-[#F5F3EF]/85 leading-relaxed relative z-10"
                  style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
                >
                  {dor.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-14">
          <p
            className="font-display text-[#C4A882] text-center italic"
            style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}
          >
            Essa confusão tem nome. E tem saída.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
