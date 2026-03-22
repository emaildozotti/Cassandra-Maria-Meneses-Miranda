import { FadeIn } from './FadeIn'

const WA_LINK = 'https://wa.me/5598987147131?text=Ol%C3%A1%2C%20Cassandra!%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20conversa%20inicial.%20Pode%20me%20contar%20como%20funciona%3F'

export function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-white/5" aria-label="Rodapé e CTA final">
      {/* CTA Final */}
      <section className="section-padding-lg" aria-label="Chamada final">
        <div className="container-ultra text-center max-w-[720px]">

          <FadeIn>
            <h2
              className="font-display text-[#F5F3EF] italic mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Você começou a ler aqui cansada de dar conta de tudo.
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              className="font-sub text-[#F5F3EF]/70 leading-relaxed mb-4"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
            >
              Se algo do que leu fez sentido, talvez seja hora de parar de fingir que está bem.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              className="font-sub text-[#F5F3EF]/60 leading-relaxed mb-12"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)' }}
            >
              Não estou pedindo decisão: estou convidando para uma conversa.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer"
            >
              Quero minha conversa inicial
            </a>
          </FadeIn>

        </div>
      </section>

      {/* Rodapé */}
      <div className="border-t border-white/5 py-16">
        <div className="container-ultra flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl italic text-[#C4A882]">Cassandra Miranda</p>
            <p className="font-sans text-[#F5F3EF]/40 text-sm mt-1">Psicóloga Clínica | São Luís, MA</p>
          </div>
          <div className="text-center md:text-right">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[#F5F3EF]/50 text-sm hover:text-[#C4A882] transition-colors duration-300"
            >
              (98) 98714-7131
            </a>
            <p className="font-sans text-[#F5F3EF]/20 text-xs mt-3">
              © {new Date().getFullYear()} Cassandra Miranda. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
