import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Galerie', href: '#' },
    { name: 'About Us', href: '#' },
  ]

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        className="absolute inset-0 w-full h-full object-cover"
        poster={`${import.meta.env.BASE_URL}logo.png`}
      >
        <source
          src={`${import.meta.env.BASE_URL}video-bg.mp4`}
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <nav className="absolute top-0 right-0 z-50 px-8 py-8">
        <div className="flex items-center">
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
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
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-2xl tracking-wider hover:text-white/70 transition-colors"
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
          className="max-w-[80%] md:max-w-[50%] lg:max-w-[40%] h-auto"
        />
      </div>
    </div>
  )
}

export default App
