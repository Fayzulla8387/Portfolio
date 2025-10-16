import { useI18n } from './i18n'
import uzAbout from '../locales/uz/about.json'
import enAbout from '../locales/en/about.json'
import ruAbout from '../locales/ru/about.json'

type Dict = Record<string, any>

const namespaces: Record<string, Record<'uz'|'en'|'ru', Dict>> = {
  about: { uz: uzAbout as Dict, en: enAbout as Dict, ru: ruAbout as Dict },
}

export function useTranslation(namespace: keyof typeof namespaces) {
  const { lang } = useI18n()
  const dict = namespaces[namespace][lang]

  function get(obj: Dict, path: string): any {
    return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj)
  }

  function t(path: string): string {
    const value = get(dict, path)
    return typeof value === 'string' ? value : ''
  }

  return { t, lang }
}


