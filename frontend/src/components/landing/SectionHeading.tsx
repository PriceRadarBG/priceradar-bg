type SectionHeadingProps = {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {badge && (
        <span
          className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            light
              ? 'bg-white/15 text-indigo-100'
              : 'bg-brand-soft text-brand dark:bg-indigo-950/80 dark:text-indigo-300'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          light ? 'text-white' : 'text-slate-900 dark:text-slate-50'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base leading-relaxed sm:text-lg ${
            light ? 'text-indigo-100/90' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
