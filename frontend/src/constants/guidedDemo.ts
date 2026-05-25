import type { RecentProductRow } from '@/constants/dashboard'

export const DEMO_GUARD_TOAST =
  'Това е демо режим - функцията ще бъде активна при реална версия.'

export const DEMO_STORES = ['eMAG', 'Technopolis', 'Ozone', 'Ardes.bg'] as const

export const GUIDED_DEMO_STEPS = [
  { step: 1, title: 'Какво следим?' },
  { step: 2, title: 'Откъде сравняваме?' },
  { step: 3, title: 'Сканираме магазините' },
  { step: 4, title: 'Какво открихме' },
  { step: 5, title: 'Най-добра оферта' },
] as const

export const DEMO_PRODUCT_PLACEHOLDER =
  'Напр. iPhone 15, Sony WH-CH720N, ASUS TUF Gaming F15'

export const GUIDED_DEMO_INTRO =
  'Следвай 5 кратки стъпки: продукт, магазини, проверка, резултат и най-добра оферта.'

export const DEMO_FINISH_MESSAGE =
  'Демото е завършено. В пълната версия тук ще се виждат реални цени, история и сигнали от избрани магазини.'

export const DEMO_TIMING = {
  afterStartDemo: 400,
  afterStartTracking: 750,
  beforeStoreScan: 850,
  storeScanEach: 650,
  afterStoreScan: 1200,
  beforeAnalysisStep: 600,
} as const

export const DEMO_STORE_PRICES: Record<string, string> = {
  eMAG: '1 929,00 €',
  Technopolis: '1 899,00 €',
  Ozone: '1 919,00 €',
  'Ardes.bg': '1 949,00 €',
}

export const DEMO_SAMPLE_PRODUCTS = ['Sony WH-CH720N', 'iPhone 15', 'ASUS TUF Gaming F15'] as const

export function createDemoTrackedProduct(
  name: string,
  stores: readonly string[],
): RecentProductRow {
  const trimmed = name.trim()
  const storeLabel = stores.length > 0 ? stores.join(', ') : 'Technopolis'
  const bestPrice = stores
    .map((store) => DEMO_STORE_PRICES[store])
    .filter(Boolean)
    .sort((a, b) => Number(a.replace(/\D/g, '')) - Number(b.replace(/\D/g, '')))[0] ?? '1 899,00 €'
  return {
    id: `demo-${Date.now()}`,
    name: trimmed,
    category: 'Демо · най-добра оферта',
    store: storeLabel,
    currentPrice: bestPrice,
    previousPrice: '1 949,00 €',
    changePercent: '-3%',
    status: 'decrease',
    thumbnailHue: 220,
  }
}
