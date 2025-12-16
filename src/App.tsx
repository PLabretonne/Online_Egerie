import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isIOS =
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const navLinks = [
    { name: 'Galerie', href: '#' },
    { name: 'About Us', href: '#' },
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {!isIOS ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={`${import.meta.env.BASE_URL}video-bg.mp4`}
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}bg-mobile.gif`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/40" />

      <nav className="absolute top-0 right-0 z-[60] px-8 py-8">
        <button
          className="md:hidden text-white text-2xl"
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
          className={`md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl tracking-wider"
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
