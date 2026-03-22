import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FadeIn } from './FadeIn'

const faqs = [
  {
    pergunta: 'Já tentei terapia antes e não funcionou.',
    resposta:
      'Entendo essa desconfiança. Ela faz sentido. A maioria das abordagens trabalha o sintoma, não a causa raiz. O que faço é diferente: a Terapia de Alta Performance busca a origem do padrão para que a mudança seja real, não temporária.',
  },
  {
    pergunta: 'Funciona online?',
    resposta:
      'Sim, o atendimento online funciona plenamente. O que torna o processo eficaz não é o ambiente físico: é a qualidade do espaço seguro que criamos juntas. Tenho pacientes de diversas cidades que vivem transformações reais em sessões remotas.',
  },
  {
    pergunta: 'Qual é o investimento?',
    resposta:
      'Sei que é uma decisão financeira real. Sei também que continuar carregando esse peso custa mais: em energia, em presença, em saúde. O valor é definido na conversa inicial, depois de eu entender sua situação e o formato mais adequado para você. O que posso garantir agora: não trabalho com sessões indefinidas sem direção. Cada etapa tem propósito e você sabe onde está no processo.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'Cada processo é único, mas processos de causa raiz geralmente levam de 4 a 8 meses para transformações consolidadas. Não trabalho com promessa de resultado em X sessões porque isso seria desonesto com o que a mudança real exige. O que ofereço é clareza sobre o caminho desde o início.',
  },
  {
    pergunta: 'Nunca fiz terapia. Por onde começo?',
    resposta:
      'Pela conversa inicial. É um espaço sem compromisso onde você me conta o que está vivendo e eu explico como posso ajudar. Não há pré-requisito para começar: só a vontade de encontrar um caminho diferente.',
  },
]

function FAQItem({ pergunta, resposta }: { pergunta: string; resposta: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-6 gap-4 text-left group"
        aria-expanded={open}
      >
        <span
          className="font-sub text-[#F5F3EF] group-hover:text-[#C4A882] transition-colors duration-300"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
        >
          {pergunta}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#C4A882] transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="font-sans text-[#F5F3EF]/65 leading-relaxed pb-6"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)' }}
            >
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-[#0D1B2A]" aria-label="Perguntas frequentes">
      <div className="container-ultra max-w-[800px]">

        <FadeIn>
          <p className="eyebrow-ultra mb-3">Dúvidas frequentes</p>
          <h2
            className="font-display text-[#F5F3EF] mb-14"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Respostas para o que você pode estar se perguntando
          </h2>
        </FadeIn>

        <div>
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <FAQItem pergunta={faq.pergunta} resposta={faq.resposta} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
