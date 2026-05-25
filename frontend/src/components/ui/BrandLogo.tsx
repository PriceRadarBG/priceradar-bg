const logoSrc = '/priceradar-logo.png'

type BrandLogoProps = {
  size?: 'sm' | 'md'
  showText?: boolean
  subtitle?: string
  className?: string
  variant?: 'full' | 'compact' | 'image-only'
}

const markShellClass = {
  sm: 'h-9 w-9',
  md: 'h-12 w-12',
}

const markImageClass = {
  sm: 'scale-[2.35] -translate-y-[26%]',
  md: 'scale-[2.35] -translate-y-[26%]',
}

function LogoMark({ size, decorative, variant = 'full' }: { size: 'sm' | 'md'; decorative: boolean; variant?: 'full' | 'compact' | 'image-only' }) {
  const isCompact = variant === 'compact'
  
  if (isCompact) {
    // Clean SVG design for compact mode
    return (
      <span
        className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-sm shadow-purple-500/20 ring-1 ring-white/30 dark:ring-purple-400/30 ${markShellClass[size]}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-1.5"
          aria-hidden={decorative}
        >
          {/* Radar circles */}
          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" opacity="0.95" />
          <circle cx="12" cy="12" r="7" stroke="white" strokeWidth="1.5" opacity="0.7" />
          <circle cx="12" cy="12" r="10.5" stroke="white" strokeWidth="1" opacity="0.4" />
          {/* Price tag diamond */}
          <path
            d="M12 7L15 10L12 13L9 10L12 7Z"
            fill="white"
            opacity="0.9"
          />
          {/* Euro symbol */}
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fill="white"
            fontSize="5"
            fontWeight="bold"
            opacity="0.85"
          >
            €
          </text>
        </svg>
      </span>
    )
  }
  
  // Original image for full and image-only modes
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-violet-600 to-indigo-700 shadow-sm shadow-indigo-500/20 ring-1 ring-white/30 dark:ring-indigo-400/30 ${markShellClass[size]}`}
    >
      <img
        src={logoSrc}
        alt={decorative ? '' : 'PriceRadar BG'}
        width={96}
        height={96}
        className={`h-full w-full object-cover object-center ${markImageClass[size]}`}
        decoding="async"
      />
    </span>
  )
}

export function BrandLogo({
  size = 'sm',
  showText = true,
  subtitle,
  className = '',
  variant = 'full',
}: BrandLogoProps) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      <LogoMark size={size} decorative={showText} variant={variant} />
      {showText && variant !== 'image-only' && (
        <span className="min-w-0 leading-tight">
          <span className={`block font-bold tracking-tight text-slate-900 dark:text-slate-100 ${size === 'md' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
            PriceRadar BG
          </span>
          {subtitle && variant !== 'compact' && (
            <span className={`block font-medium text-slate-500 dark:text-slate-400 ${size === 'md' ? 'text-[11px]' : 'text-[10px]'}`}>
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
