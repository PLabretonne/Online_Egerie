import { useEffect, useRef, useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const isIOS =
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const navLinks = [
    { name: 'Galerie', href: '#' },
    { name: 'About Us', href: '#' },
  ]

  useEffect(() => {
    if (!isIOS || !videoRef.current) return

    const tryPlay = () => {
      videoRef.current?.play().catch(() => {})
      window.removeEventListener('touchstart', tryPlay)
      window.removeEventListener('click', tryPlay)
    }

    window.addEventListener('touchstart', tryPlay, { once: true })
    window.addEventListener('click', tryPlay, { once: true })

    return () => {
      window.removeEventListener('touchstart', tryPlay)
      window.removeEventListener('click', tryPlay)
    }
  }, [isIOS])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay={!isIOS}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        poster={`${import.meta.env.BASE_URL}logo.png`}
      >
        <source
          src={`${import.meta.env.BASE_URL}video-bg.mp4`}
          type="video/mp4"
        />
      </video>

      {isIOS && (
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/40" />

      <nav className="absolute top-0 right-0 z-50 px-8 py-8">
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white transition-colors text-sm tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-all ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Egerie Climbing"
          className="max-w-[80%] md:max-w-[50%] lg:max-w-[40%]"
        />
      </div>
    </div>
  )
}

export default App
