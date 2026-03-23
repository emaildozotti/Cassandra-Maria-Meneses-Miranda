const WA_LINK = 'https://wa.me/5598987147131?text=Ol%C3%A1%2C%20Cassandra!%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20conversa%20inicial.%20Pode%20me%20contar%20como%20funciona%3F'

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col bg-[#0D1B2A] overflow-hidden"
      aria-label="Hero"
    >
      {/* Aurora blobs */}
      <div
        aria-hidden="true"
        className="absolute top-[-20%] left-[-10%] w-[55vw] h-[55vw] rounded-full blur-[100px] pointer-events-none"
        style={{
          backgroundColor: '#1E4A6A55',
          animation: 'aurora-1 14s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full blur-[90px] pointer-events-none"
        style={{
          backgroundColor: '#1E3A5F50',
          animation: 'aurora-2 18s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] rounded-full blur-[80px] pointer-events-none"
        style={{
          backgroundColor: '#EDF2F726',
          animation: 'aurora-3 22s ease-in-out infinite',
        }}
      />

      {/* Sticky header — desktop only */}
      <header className="hidden md:block sticky top-0 z-50 w-full border-b border-white/5 bg-[#0D1B2A]/80 backdrop-blur-sm">
        <div className="container-ultra flex items-center justify-between py-4">
          <span className="font-display text-lg italic text-[#C4A882]">
            Cassandra Miranda
          </span>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-shimmer text-sm">
            Conversa inicial
          </a>
        </div>
      </header>

      {/* Main hero content */}
      <div className="container-ultra flex-1 flex items-center py-20 md:py-0 min-h-screen">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left — Headline (mobile: first) */}
          <div className="flex flex-col gap-6 order-1 md:order-1">
            {/* Callout — FIXED: no longer repeats H1 */}
            <div
              className="eyebrow-ultra"
              style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0s', opacity: 0 }}
            >
              SAÚDE EMOCIONAL
            </div>

            <h1
              className="font-display text-[#F5F3EF] leading-[1.1] tracking-tight"
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                animation: 'fadeUp 0.8s ease forwards',
                animationDelay: '0.15s',
                opacity: 0,
              }}
            >
              Cansada de dar conta de tudo. E de fingir que está bem.
            </h1>

            <p
              className="font-sub text-[#F5F3EF]/75 leading-relaxed"
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                animation: 'fadeUp 0.8s ease forwards',
                animationDelay: '0.30s',
                opacity: 0,
              }}
            >
              Um espaço para soltar o peso e encontrar sua leveza consciente.
            </p>

            <div
              style={{ animation: 'fadeUp 0.8s ease forwards', animationDelay: '0.45s', opacity: 0 }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer"
              >
                Quero minha conversa inicial
              </a>
            </div>
          </div>

          {/* Right — Foto (mobile: second) */}
          <div
            className="flex justify-center md:justify-end order-2 md:order-2"
            style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '0.2s', opacity: 0 }}
          >
            <div className="relative w-full max-w-[420px]">
              {/* Frame Treatment A — rotated back frame */}
              <div className="absolute inset-0 -rotate-2 rounded-sm bg-[#0D1B2A] border border-[#3B6B9E]/40 translate-x-3 translate-y-3" />
              <img
                src="/images/about.jpg"
                alt="Cassandra Miranda"
                className="relative w-full aspect-[3/4] object-cover rounded-sm"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const placeholder = target.nextElementSibling as HTMLElement
                  if (placeholder) placeholder.style.display = 'flex'
                }}
              />
              {/* Placeholder */}
              <div
                className="relative w-full aspect-[3/4] rounded-sm bg-[#1E3A5F] border border-[#3B6B9E]/30 flex-col items-center justify-center gap-3 hidden"
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
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-[#F5F3EF] text-xs tracking-widest uppercase">Role para baixo</span>
        <div className="w-px h-10 bg-[#C4A882] animate-pulse" />
      </div>
    </section>
  )
}
