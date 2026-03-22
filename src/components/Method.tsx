import { motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const pilares = [
  {
    num: '01',
    titulo: 'Sustentação Emocional',
    texto:
      'Crio um espaço onde você pode ser exatamente quem é, sem precisar ser forte. A sustentação emocional é a base para que qualquer transformação real aconteça.',
  },
  {
    num: '02',
    titulo: 'Eficiência Emocional: o mecanismo',
    texto:
      'A maioria das abordagens trata o que dói agora. Meu processo vai à raiz. Eficiência emocional é a capacidade de compreender o que gera a dor, não apenas aliviar o sintoma. Isso significa entender por que os mesmos padrões se repetem. Significa aprender a modular as emoções em vez de suprimi-las. Significa desenvolver a clareza e a segurança interna para tomar decisões com protagonismo. É o mecanismo central que diferencia este processo de tudo que você já tentou antes.',
  },
  {
    num: '03',
    titulo: 'Clareza e Protagonismo',
    texto:
      'O processo termina quando você tem ferramentas para se sustentar. Clareza sobre si mesma e coragem para se posicionar: isso é alta performance emocional.',
  },
]

export function Method() {
  return (
    <section className="section-padding bg-[#F5F3EF]" aria-label="Método">
      <div className="container-ultra">

        <FadeIn>
          <p className="eyebrow-ultra mb-3 text-[#3B6B9E]">O Método</p>
          <h2
            className="font-display text-[#0D1B2A] mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Terapia de Alta Performance
          </h2>
          <p
            className="font-sub text-[#0D1B2A]/70 mb-16 max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
          >
            Minha abordagem não é terapia convencional passiva.
            Trabalho a eficiência emocional: a junção entre compreender a dor e criar o movimento real para novos sentidos.
          </p>
        </FadeIn>

        <motion.ul
          className="flex flex-col gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px 0px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {pilares.map((pilar) => (
            <motion.li
              key={pilar.num}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="relative flex gap-8 items-start"
            >
              {/* Número decorativo de fundo */}
              <span
                className="absolute -top-4 -left-2 font-display text-[#0D1B2A] select-none pointer-events-none leading-none"
                style={{ fontSize: '8rem', opacity: 0.08 }}
                aria-hidden="true"
              >
                {pilar.num}
              </span>

              <div className="relative z-10 flex-1 pl-4 border-l-2 border-[#C4A882]">
                <h3
                  className="font-display text-[#0D1B2A] mb-3"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)' }}
                >
                  {pilar.titulo}
                </h3>
                <p
                  className="font-sans text-[#0D1B2A]/70 leading-relaxed"
                  style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
                >
                  {pilar.texto}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <FadeIn delay={0.4} className="mt-16 pt-10 border-t border-[#0D1B2A]/10">
          <p
            className="font-sub text-[#0D1B2A]/60 italic mb-2"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
          >
            Não prometo cura instantânea nem milagres.
            Entrego um processo de construção interna: real, respeitoso com o seu tempo psíquico e focado em resultado duradouro.
          </p>
          <p
            className="font-display text-[#3B6B9E] italic"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
          >
            Esse método não nasceu de uma teoria. Nasceu de um peso que eu também carreguei por muito tempo.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
