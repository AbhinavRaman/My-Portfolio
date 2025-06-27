import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-[#1a1a1d] border-b border-border sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="font-bold text-xl tracking-wide text-accent">
          Abhinav Raman
        </div>
        
        <button
          className="hidden text-2xl cursor-pointer text-accent md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <ul className={`hidden md:flex gap-10 list-none m-0 p-0`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-text font-medium text-lg relative px-2 py-1 rounded transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-6 bg-card-bg flex-col gap-5 shadow-lg p-5 rounded-lg md:hidden min-w-40 z-50">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-text font-medium text-lg block py-2 transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header 