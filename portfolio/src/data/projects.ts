export type Project = {
  title: { uz: string; en: string; ru: string }
  description: { uz: string; en: string; ru: string }
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: {
      uz: 'Portfolio sayti',
      en: 'Portfolio Website',
      ru: 'Сайт‑портфолио',
    },
    description: {
      uz: 'React va Tailwind yordamida yaratilgan zamonaviy, moslashuvchan portfolio.',
      en: 'A modern, responsive portfolio built with React and Tailwind.',
      ru: 'Современное адаптивное портфолио на React и Tailwind.',
    },
    tags: ['React', 'Tailwind', 'TypeScript'],
    link: '#',
  },
  {
    title: { uz: 'UI komponentlar', en: 'UI Components', ru: 'UI компоненты' },
    description: {
      uz: 'Kirish imkoniyati hisobga olingan qayta foydalaniladigan komponentlar to‘plami.',
      en: 'A set of reusable UI components with accessibility baked in.',
      ru: 'Набор переиспользуемых компонентов с учётом доступности.',
    },
    tags: ['Design System', 'A11y'],
    repo: '#',
  },
]


