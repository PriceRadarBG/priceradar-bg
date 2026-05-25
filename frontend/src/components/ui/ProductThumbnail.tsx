type ProductThumbnailProps = {
  hue?: number
  label?: string
  size?: 'sm' | 'md'
}

export function ProductThumbnail({ hue = 220, label, size = 'md' }: ProductThumbnailProps) {
  const sizeClass = size === 'sm' ? 'h-10 w-10 rounded-lg' : 'h-12 w-12 rounded-xl'

  return (
    <div
      className={`${sizeClass} flex shrink-0 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200`}
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 60% 92%), hsl(${hue} 45% 82%))`,
      }}
      aria-hidden
    >
      {label ? (
        <span className="text-[10px] font-semibold text-white/90">{label.slice(0, 2)}</span>
      ) : (
        <svg className="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      )}
    </div>
  )
}
