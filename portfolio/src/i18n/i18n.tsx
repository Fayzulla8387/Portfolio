import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'uz' | 'en' | 'ru'

type Translations = typeof uz

const uz = {
  nav: { home: 'Bosh sahifa', about: 'Men haqimda', projects: 'Loyihalar', contact: "Bog'lanish" },
  hero: {
    intro: 'Salom, men',
    name: "Xo'janiyozov Fayzulla",
    tagline: 'Zamonaviy, moslashuvchan veb-ilovalar yaratuvchisi',
    viewProjects: 'Loyihalarni ko‘rish',
    contactMe: 'Menga yozish',
  },
  about: {
    title: 'Men haqimda',
    subtitle: 'Men va mening vositalarim haqida qisqacha',
    content:
      "Men Xo‘janiyozov Fayzulla, 2003 yilda tug‘ilganman.\nToshkent Axborot Texnologiyalari Universitetining Dasturiy injiniring yo‘nalishini tamomlaganman.\n\nAsosiy faoliyatim backend dasturlash bilan bog‘liq bo‘lib, PHP (Laravel) texnologiyasida chuqur tajribaga egaman.\nBundan tashqari, C++, Python va JavaScript dasturlash tillarida ham mustahkam bilim va amaliy tajribam mavjud.\n\nHozirga qadar 10 dan ortiq real loyihalarda ishtirok etganman. Ulardan ba’zilari:\n\nGavharRestaurant.uz\n\nRuslan Kafe\n\nTo‘rtko‘l Bozor tizimi\n\nCar Booking\n\nBaraka Golden Licorise\n\nStudent Dormitory tizimi\n\nShuningdek, men yoshlarni IT sohasiga o‘qitish bilan ham shug‘ullanaman.\nShu vaqtgacha 200 dan ortiq o‘quvchilarga dasturlash bo‘yicha saboq berganman.\n2024-yildan buyon “Al-Xorazmiy vorislari” loyihasi doirasida mentor sifatida faoliyat yuritib, yosh dasturchilarga yo‘l-yo‘riq ko‘rsatib kelmoqdaman.\n\nMening maqsadim — o‘z bilim va tajribam orqali yangi avlod dasturchilarini shakllantirish va milliy IT sohasining rivojiga hissa qo‘shish.",
    skillsTitle: 'Ko‘nikmalar',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Laravel', 'PHP', 'MySQL'],
  },
  projects: {
    title: 'Loyihalar',
    subtitle: 'Tanlangan ishlar va tajribalar',
  },
  contact: {
    title: "Bog'lanish",
    subtitle: 'Keling, birga ajoyib narsa qilamiz',
    name: 'Ism',
    email: 'Email',
    message: 'Xabar',
    send: 'Yuborish',
  },
}

const en: Translations = {
  nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
  hero: {
    intro: 'Hello, I’m',
    name: 'Fayzulla Khojaniyozov',
    tagline: 'Builder of modern, responsive web applications',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
  },
  about: {
    title: 'About Me',
    subtitle: 'A bit about me and my toolkit',
    content:
      "I’m Fayzulla Khojaniyozov, born in 2003.\nI graduated in Software Engineering from the Tashkent University of Information Technologies.\n\nMy core work is backend development with deep experience in PHP (Laravel).\nI also have solid knowledge and hands‑on practice with C++, Python, and JavaScript.\n\nSo far, I’ve contributed to 10+ real‑world projects. Some of them:\n\nGavharRestaurant.uz\n\nRuslan Cafe\n\nTo‘rtko‘l Market system\n\nCar Booking\n\nBaraka Golden Licorice\n\nStudent Dormitory system\n\nI also teach young people in the IT field.\nTo date, I’ve taught programming to 200+ students.\nSince 2024, I’ve been a mentor within the “Al‑Khwarizmi heirs” initiative, guiding aspiring developers.\n\nMy goal is to help shape the next generation of engineers and contribute to the growth of the national IT ecosystem.",
    skillsTitle: 'Skills',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Laravel', 'PHP', 'MySQL'],
  },
  projects: { title: 'Projects', subtitle: 'A selection of work and experiments' },
  contact: {
    title: 'Contact',
    subtitle: 'Let’s build something great together',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
  },
}

const ru: Translations = {
  nav: { home: 'Главная', about: 'Обо мне', projects: 'Проекты', contact: 'Контакты' },
  hero: {
    intro: 'Привет, я',
    name: 'Файзулла Ходжаниязов',
    tagline: 'Создаю современные адаптивные веб‑приложения',
    viewProjects: 'Смотреть проекты',
    contactMe: 'Связаться',
  },
  about: {
    title: 'Обо мне',
    subtitle: 'Немного обо мне и моих инструментах',
    content:
      'Я — Ходжаниязов Файзулла, 2003 года рождения.\nОкончил направление «Программная инженерия» Ташкентского университета информационных технологий.\n\nМоя основная деятельность — бэкенд‑разработка, глубокий опыт в PHP (Laravel).\nКроме того, обладаю прочными знаниями и практикой в C++, Python и JavaScript.\n\nК настоящему времени поучаствовал более чем в 10 реальных проектах. Некоторые из них:\n\nGavharRestaurant.uz\n\nRuslan Cafe\n\nСистема рынка Торткуль\n\nCar Booking\n\nBaraka Golden Licorice\n\nСистема студенческого общежития\n\nТакже занимаюсь обучением молодежи в сфере IT.\nНа данный момент обучил программированию более 200 учеников.\nС 2024 года являюсь ментором в инициативе «Наследники аль‑Хорезми», помогая начинающим разработчикам.\n\nМоя цель — делиться знаниями и опытом, формировать новое поколение инженеров и вносить вклад в развитие национальной IT‑отрасли.',
    skillsTitle: 'Навыки',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Laravel', 'PHP', 'MySQL'],
  },
  projects: { title: 'Проекты', subtitle: 'Подборка работ и экспериментов' },
  contact: {
    title: 'Контакты',
    subtitle: 'Давайте сделаем что‑то классное вместе',
    name: 'Имя',
    email: 'Email',
    message: 'Сообщение',
    send: 'Отправить',
  },
}

const DICT: Record<Lang, Translations> = { uz, en, ru }

type I18nContextValue = {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('uz')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved && ['uz', 'en', 'ru'].includes(saved)) setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nContextValue>(
    () => ({ lang, t: DICT[lang], setLang }),
    [lang]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}


