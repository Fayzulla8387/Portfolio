type Props = { title: string; subtitle?: string }

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="text-base-700 mt-2">{subtitle}</p>}
    </div>
  )
}


