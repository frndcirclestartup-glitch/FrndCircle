interface SectionLabelProps {
  index: string
  children: React.ReactNode
}

export function SectionLabel({ index, children }: SectionLabelProps) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-sans text-xs font-bold tracking-widest text-primary">{index}</span>
      <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{children}</span>
    </div>
  )
}
