import { useI18n } from '../i18n/i18n'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-base-200 bg-white/70 backdrop-blur">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-base-700">© {new Date().getFullYear()} {t.hero.name}. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Fayzulla8387/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-base-200 hover:bg-base-100 transition-colors"
          >
            {/* GitHub icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.606-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.468-1.11-1.468-.908-.62.069-.607.069-.607 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.486 17.523 2 12 2Z"/></svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="https://t.me/Xojan1yozov_Fayzulla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-base-200 hover:bg-base-100 transition-colors"
          >
            {/* Telegram icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.036 15.585 8.8 19.4c.39 0 .559-.167.761-.366l1.826-1.748 3.786 2.777c.694.383 1.188.182 1.377-.642l2.494-11.71.001-.002c.221-1.03-.372-1.433-1.05-1.18L3.9 9.75c-1.005.39-.99.952-.171 1.206l4.356 1.36 10.126-6.384c.476-.31.91-.139.553.171L9.036 15.585Z"/></svg>
            <span className="hidden sm:inline">Telegram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/fayzulla-x%C3%B4jayev-8b4540244/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-base-200 hover:bg-base-100 transition-colors"
          >
            {/* LinkedIn icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a2.06 2.06 0 1 0 0 4.12 2.06 2.06 0 0 0 0-4.12Zm7.44 7.02c-1.8 0-2.6 1-2.93 1.7V8.5H6.56c.05 1.1 0 11.5 0 11.5h3.2v-6.43c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.87 1.05 1.87 2.58V20h3.33v-6.62c0-3.55-1.9-5.2-4.39-5.2Z"/></svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}


