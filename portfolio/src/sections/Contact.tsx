import SectionHeading from '../components/SectionHeading'
import { useI18n } from '../i18n/i18n'

export default function Contact() {
  const { t } = useI18n()
  return (
    <section id="contact" className="section-pad">
      <div className="container max-w-2xl">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
        <form action="https://formspree.io/f/XXXXXX" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">{t.contact.name}</label>
            <input id="name" name="name" required className="mt-1 w-full rounded border border-base-200 px-3 py-2 bg-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">{t.contact.email}</label>
            <input id="email" type="email" name="email" required className="mt-1 w-full rounded border border-base-200 px-3 py-2 bg-white" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">{t.contact.message}</label>
            <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded border border-base-200 px-3 py-2 bg-white" />
          </div>
          <button type="submit" className="px-5 py-2 rounded bg-accent-500 text-white hover:brightness-110 transition">{t.contact.send}</button>
        </form>
      </div>
    </section>
  )
}


