type Props = { id: string; children: React.ReactNode; className?: string }

export default function Section({ id, children, className }: Props) {
  return (
    <section id={id} className={className ? `section-pad ${className}` : 'section-pad'}>
      <div className="container">{children}</div>
    </section>
  )
}


