import { SectionHeading } from '@/components/landing/SectionHeading'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

type ModernSectionHeaderProps = {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function ModernSectionHeader(props: ModernSectionHeaderProps) {
  const centered = props.align !== 'left'

  return (
    <ScrollReveal className={centered ? 'mx-auto max-w-2xl text-center' : ''}>
      <SectionHeading {...props} />
      <div
        className={`mt-5 h-px max-w-xs bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent ${
          centered ? 'mx-auto' : ''
        }`}
        aria-hidden
      />
    </ScrollReveal>
  )
}
