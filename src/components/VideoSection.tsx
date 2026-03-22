import { FadeIn } from './FadeIn'

export function VideoSection() {
  return (
    <section className="section-padding bg-[#0D1B2A]" aria-label="Vídeo VSL">
      <div className="container-ultra">

        <FadeIn>
          <p
            className="font-sub text-[#F5F3EF]/80 text-center leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
          >
            Entendo essa exaustão porque conheço de perto o que significa carregar um peso invisível.
            No vídeo abaixo, explico o que é a Terapia de Alta Performance e por que ela funciona quando outros processos não funcionaram.
            Assista: leva menos de dois minutos e pode mudar o que você pensa sobre cuidar de si mesma.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex justify-center">
          <div
            id="video-placeholder"
            className="relative ring-1 ring-[#C4A882] shadow-2xl rounded-[4px] overflow-hidden"
            style={{ width: '100%', maxWidth: '300px', aspectRatio: '9/16' }}
          >
            <iframe
              src="https://www.youtube.com/embed/WOhQ7CZ7ai4"
              title="Cassandra Miranda — Terapia de Alta Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10">
          <p
            className="font-sub text-[#C4A882] text-center italic"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
          >
            O que esse processo faz é diferente de tudo que você já viu. E começa muito antes da primeira sessão.
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
