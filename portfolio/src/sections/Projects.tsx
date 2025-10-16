import SectionHeading from '../components/SectionHeading'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n'

type ProjectItem = {
  name: string
  description: string
  url: string
}

const PROJECTS: ProjectItem[] = [
  {
    name: 'GavharRestaurant.uz',
    description:
      'An online restaurant management and ordering system for a modern restaurant chain.',
    url: 'http://gavharrestaurant.uz/2?lang=ru&service=1',
  },
  {
    name: 'Amusoft.uz',
    description:
      'Official website for an IT service company specializing in web and mobile app development.',
    url: 'https://amusoft.uz/',
  },
  {
    name: 'To‘rtko‘l Bozor System',
    description: 'A digital marketplace management platform for local bazaars.',
    url: '#',
  },
  {
    name: 'Car Booking',
    description: 'An online system for booking and managing transport services.',
    url: '#',
  },
  {
    name: 'Baraka Golden Licorise',
    description: 'Corporate website for a natural product manufacturing company.',
    url: '#',
  },
  {
    name: 'Student Dormitory',
    description:
      'A dormitory management system for students with booking and payment tracking features.',
    url: '#',
  },
]

export default function Projects() {
  const { t } = useI18n()
  return (
    <motion.section
      id="projects"
      className="section-pad"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.name}
              className="rounded-2xl border border-base-200 bg-white p-6 text-center shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-soft-rose via-soft-sky to-soft-mint mb-4" />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-base-700 mt-2">{p.description}</p>
              <div className="mt-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent-500 text-white hover:brightness-110 transition"
                >
                  Visit
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M13.5 4.5h6v6m0-6L10 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M21 10v8.25A2.25 2.25 0 0 1 18.75 20.5H5.25A2.25 2.25 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3h8.75" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}


