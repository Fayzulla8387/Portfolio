import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../i18n/useTranslation'

export default function About() {
  const { t, lang } = useTranslation('about')

  return (
    <section id="about" className="section-pad">
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-800 py-16 px-4 text-left"
          >
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{t('title')}</h2>
            <p className="mt-4">{t('paragraph')}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}


