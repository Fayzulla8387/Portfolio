import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="home" className="section-pad">
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <p className="text-accent-500 font-medium">{t.hero.intro}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">{t.hero.name}</h1>
          <p className="mt-4 text-lg text-base-700">{t.hero.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-2 rounded bg-accent-500 text-white hover:brightness-110 transition">{t.hero.viewProjects}</a>
            <a href="#contact" className="px-5 py-2 rounded border border-base-200 hover:bg-base-100 transition">{t.hero.contactMe}</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/images/fayzulla.jpg"
            alt={t.hero.name}
            className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-white shrink-0"
          />
        </motion.div>
      </div>
    </section>
  )
}


