import { FadeIn } from './FadeIn'

export function About() {
  return (
    <section className="section-padding bg-[#EDF2F7]" aria-label="Sobre Cassandra">
      <div className="container-ultra">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Texto — mobile: primeiro (order-1), desktop: order-1 */}
          <div className="order-1 md:order-1">
            <FadeIn>
              <p className="eyebrow-ultra mb-3 text-[#3B6B9E]">Sobre</p>
              <h2
                className="font-display text-[#0D1B2A] mb-8"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
              >
                A terapeuta que escolheu a profundidade sobre o conforto
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p
                className="font-sans text-[#0D1B2A]/75 leading-relaxed mb-5"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
              >
                Por muito tempo, entendi que o cuidado emocional era algo que se fazia pelos outros.
                Cresci com a percepção de que sentir demais era um peso a ser gerenciado, não uma verdade a ser ouvida.
                Carreguei esse padrão antes de entender que ele tinha raiz.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="border-l-2 border-[#C4A882] pl-5 my-7">
                <p
                  className="font-sub text-[#0D1B2A]/80 italic leading-relaxed"
                  style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}
                >
                  O ponto de virada foi quando percebi que a ferramenta mais poderosa de cura começa na coragem de olhar para as próprias vulnerabilidades.
                  Não fui observadora desse processo: fui guiada por ele.
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                className="font-sans text-[#0D1B2A]/75 leading-relaxed mb-8"
                style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
              >
                Hoje ajudo mulheres sobrecarregadas e adolescentes em crise a transformarem a exaustão em consciência.
                Trabalho com quem já tentou de tudo para ficar bem e precisa, desta vez, de alguém que entende que a dor é real, urgente e tem solução.
                Por ter percorrido esse caminho, sei criar o espaço que você precisa para percorrê-lo também.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p
                className="font-sans text-[#3B6B9E] text-sm leading-relaxed"
                style={{ letterSpacing: '0.02em' }}
              >
                Psicóloga Clínica | Especialista em Saúde Emocional e Desenvolvimento Humano | Atendimento Individual e para Adolescentes | São Luís, MA
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p
                className="font-display text-[#0D1B2A]/60 italic mt-8"
                style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
              >
                O que mais me perguntam é: como isso se parece, na prática, para alguém como eu?
              </p>
            </FadeIn>
          </div>

          {/* Foto — mobile: segundo (order-2), desktop: order-2 */}
          <div className="order-2 md:order-2 flex justify-center">
            <FadeIn className="relative w-full max-w-[400px]">
              {/* Frame rotacionado Porto Noturno */}
              <div
                className="absolute inset-0 rounded-[4px] bg-[#0D1B2A] border border-[#3B6B9E]/30"
                style={{ transform: 'rotate(-2deg) translate(10px, 10px)' }}
                aria-hidden="true"
              />
              <img
                src="/images/about.jpg"
                alt="Cassandra Miranda — Psicóloga Clínica"
                className="relative w-full aspect-[3/4] object-cover rounded-[4px]"
                style={{ transform: 'rotate(-2deg)' }}
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              {/* Placeholder */}
              <div
                className="relative w-full aspect-[3/4] rounded-[4px] bg-[#1E3A5F] hidden flex-col items-center justify-center gap-3"
                style={{ transform: 'rotate(-2deg)' }}
                aria-hidden="true"
              >
                <div className="w-16 h-16 rounded-full bg-[#3B6B9E]/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <p className="font-sub text-[#C4A882] text-sm italic opacity-60">Cassandra Miranda</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
