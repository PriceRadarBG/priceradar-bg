import { LandingLayout } from '@/components/landing/LandingLayout'
import { HeroSplit } from '@/components/landing/HeroSplit'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { HowItWorksSection } from '@/components/landing/HowItWorksSection'
import { FeaturesSection } from '@/components/landing/FeaturesSection'
import { ComparisonSection } from '@/components/landing/ComparisonSection'
import { CallToAction } from '@/components/landing/CallToAction'

export function HomePage() {
  return (
    <LandingLayout>
      <HeroSplit />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <CallToAction />
    </LandingLayout>
  )
}
