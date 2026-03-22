import { FadeIn } from './FadeIn'

const passos = [
  {
    num: '1',
    titulo: 'A Conversa Inicial',
    texto:
      'Começa com uma conversa sem compromisso. É o espaço onde você me conta o que está carregando e eu entendo se e como posso te ajudar. Não há julgamento, não há pressão: só escuta real.',
  },
  {
    num: '2',
    titulo: 'As Sessões',
    texto:
      'Cada sessão é um espaço de sustentação e construção. Trabalhamos juntas a raiz do que gera a dor, no seu ritmo, respeitando o tempo psíquico do seu processo. Não é sobre falar indefinidamente: é sobre chegar onde importa.',
  },
  {
    num: '3',
    titulo: 'A Transformação',
    texto:
      'Com o tempo, a confusão dá lugar à clareza. A insegurança cede espaço para a coragem de se posicionar. Você começa a estabelecer limites, tomar decisões e viver com leveza consciente, não como meta distante, mas como estado possível.',
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-[#F5F3EF]" aria-label="Como funciona">
      <div className="container-ultra">

        <FadeIn>
          <p className="eyebrow-ultra mb-3 text-[#3B6B9E]">O Processo</p>
          <h2
            className="font-display text-[#0D1B2A] mb-14"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Como começa o processo
          </h2>
        </FadeIn>

        <div className="relative flex flex-col gap-0">
          {/* Linha conectora vertical */}
          <div
            className="absolute left-[59px] top-16 bottom-16 w-px bg-[#C4A882]/30 hidden md:block"
            aria-hidden="true"
          />

          {passos.map((passo, i) => (
            <FadeIn key={passo.num} delay={i * 0.15} className="relative flex gap-8 items-start pb-12 last:pb-0">
              {/* Número grande decorativo */}
              <div className="relative flex-shrink-0 w-[120px] hidden md:flex justify-center">
                <span
                  className="font-display text-[#0D1B2A] select-none pointer-events-none leading-none"
                  style={{ fontSize: '7.5rem', opacity: 0.07 }}
                  aria-hidden="true"
                >
                  {passo.num}
                </span>
                {/* Número visível */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 font-display text-[#C4A882]"
                  style={{ fontSize: '1.5rem' }}
                >
                  {passo.num}
                </span>
              </div>

              {/* Mobile: número pequeno */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C4A882]/15 border border-[#C4A882]/40 flex items-center justify-center md:hidden">
                <span className="font-display text-[#C4A882] text-lg">{passo.num}</span>
              </div>

              <div className="flex-1 pt-1 md:pt-6">
                <h3
                  className="font-display text-[#0D1B2A] mb-3"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
                >
                  {passo.titulo}
                </h3>
                <p
                  className="font-sans text-[#0D1B2A]/70 leading-relaxed"
                  style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
                >
                  {passo.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-14 pt-10 border-t border-[#0D1B2A]/10">
          <p
            className="font-sub text-[#0D1B2A]/60 italic mb-8 max-w-2xl"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
          >
            Sei que encaixar mais uma coisa na agenda parece impossível agora.
            Mas o processo que alivia a sobrecarga começa com uma única conversa, e ela pode ser a mais importante da sua semana.
          </p>
          <button
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-10 py-5 border border-[#C4A882] text-[#C4A882] font-sans text-sm font-medium tracking-[0.08em] uppercase rounded-[4px] hover:bg-[#C4A882]/10 transition-colors duration-300 cursor-pointer"
            aria-label="Ir para perguntas frequentes"
          >
            Quero minha conversa inicial
          </button>
        </FadeIn>

      </div>
    </section>
  )
}
