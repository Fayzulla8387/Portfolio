import { useState } from 'react'
import { useI18n } from '../i18n/i18n'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-base-200">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold">{t.hero.name}</a>

        <button
          className="md:hidden p-2 rounded hover:bg-base-100"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="block w-5 h-0.5 bg-base-900 mb-1"></span>
          <span className="block w-5 h-0.5 bg-base-900 mb-1"></span>
          <span className="block w-5 h-0.5 bg-base-900"></span>
        </button>

        <ul className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-base-700 hover:text-base-900 transition-colors">
                {l.href === '#home' && t.nav.home}
                {l.href === '#about' && t.nav.about}
                {l.href === '#projects' && t.nav.projects}
                {l.href === '#contact' && t.nav.contact}
              </a>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-1 border rounded-full px-1 py-0.5">
              {(['uz','en','ru'] as const).map(code => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-0.5 text-sm rounded-full ${lang===code ? 'bg-accent-500 text-white' : 'hover:bg-base-100'}`}
                  aria-pressed={lang===code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden container pb-4 space-y-2">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2">
                {l.href === '#home' && t.nav.home}
                {l.href === '#about' && t.nav.about}
                {l.href === '#projects' && t.nav.projects}
                {l.href === '#contact' && t.nav.contact}
              </a>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-1">
              {(['uz','en','ru'] as const).map(code => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-2 py-1 text-sm rounded ${lang===code ? 'bg-accent-500 text-white' : 'border border-base-200'}`}
                  aria-pressed={lang===code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      )}
    </header>
  )
}


