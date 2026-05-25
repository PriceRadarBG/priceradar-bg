export type StatCardData = {
  id: string
  title: string
  value: string
  todayDelta: string
  accent: 'violet' | 'emerald' | 'rose' | 'amber'
  icon: 'tracked' | 'decrease' | 'increase' | 'average-price'
}

export const STAT_CARDS: StatCardData[] = [
  {
    id: 'tracked',
    title: 'Проследени продукти',
    value: '142 бр.',
    todayDelta: '+5 днес',
    accent: 'violet',
    icon: 'tracked',
  },
  {
    id: 'decreases',
    title: 'Намаления днес',
    value: '24',
    todayDelta: 'активни сигнали',
    accent: 'emerald',
    icon: 'decrease',
  },
  {
    id: 'increases',
    title: 'Поскъпвания днес',
    value: '9',
    todayDelta: 'нови промени',
    accent: 'rose',
    icon: 'increase',
  },
  {
    id: 'average-price',
    title: 'Средна цена',
    value: '142,00 €',
    todayDelta: 'EUR · демо',
    accent: 'amber',
    icon: 'average-price',
  },
]

export type RecentProductRow = {
  id: string
  name: string
  category: string
  store: string
  currentPrice: string
  previousPrice: string
  changePercent: string
  status: 'decrease' | 'increase' | 'stable' | 'fake-deal'
  thumbnailHue: number
}

export const RECENT_PRODUCTS: RecentProductRow[] = [
  {
    id: '1',
    name: 'Sony WH-CH720N',
    category: 'Слушалки',
    store: 'eMAG',
    currentPrice: '139,00 €',
    previousPrice: '174,00 €',
    changePercent: '-20%',
    status: 'fake-deal',
    thumbnailHue: 220,
  },
  {
    id: '2',
    name: 'Samsung Galaxy A55',
    category: 'Смартфони',
    store: 'Technopolis',
    currentPrice: '649,00 €',
    previousPrice: '699,00 €',
    changePercent: '-7%',
    status: 'decrease',
    thumbnailHue: 260,
  },
  {
    id: '3',
    name: 'Dyson V15 Detect',
    category: 'Прахосмукачки',
    store: 'Ardes',
    currentPrice: '1 299,00 €',
    previousPrice: '1 099,00 €',
    changePercent: '+18%',
    status: 'increase',
    thumbnailHue: 30,
  },
  {
    id: '4',
    name: 'Xiaomi Redmi Note 13 Pro',
    category: 'Смартфони',
    store: 'Ozone',
    currentPrice: '499,00 €',
    previousPrice: '529,00 €',
    changePercent: '-6%',
    status: 'decrease',
    thumbnailHue: 160,
  },
]

export type InsightAlert = {
  id: string
  productName: string
  store: string
  badge: string
  badgeTone: 'amber' | 'rose' | 'emerald'
  description: string
  timeAgo: string
  thumbnailHue: number
}

export const INSIGHT_ALERTS: InsightAlert[] = [
  {
    id: '1',
    productName: 'Samsung 55" QLED 4K TV',
    store: 'eMAG',
    badge: 'Фалшиво намаление',
    badgeTone: 'amber',
    description: 'Цената е била същата преди 30 дни. Промоцията не е реална.',
    timeAgo: 'преди 2ч',
    thumbnailHue: 200,
  },
  {
    id: '2',
    productName: 'Dyson V15 Detect Absolute',
    store: 'Technopolis',
    badge: 'Рязко поскъпване',
    badgeTone: 'rose',
    description: 'Цената се е покачила с 18% за по-малко от седмица.',
    timeAgo: 'преди 5ч',
    thumbnailHue: 25,
  },
  {
    id: '3',
    productName: 'Xiaomi Redmi Note 13 Pro',
    store: 'Ozone',
    badge: 'Добра сделка',
    badgeTone: 'emerald',
    description: 'Най-ниска цена от 90 дни в проследяваните магазини.',
    timeAgo: 'преди 1д',
    thumbnailHue: 150,
  },
]

export type OfferComparisonRow = {
  store: string
  price: string
  delta: string
  isBest?: boolean
}

export const OFFER_COMPARISON = {
  productName: 'Apple iPhone 15 128GB',
  rows: [
    { store: 'Technopolis', price: '1 899,00 €', delta: '-3%', isBest: true },
    { store: 'eMAG', price: '1 929,00 €', delta: '-1%' },
    { store: 'Ardes.bg', price: '1 949,00 €', delta: '+1%' },
    { store: 'Plesio', price: '1 969,00 €', delta: '+2%' },
  ] as OfferComparisonRow[],
  totalOffers: 12,
}

export const CHART_PERIOD_TABS = ['7 дни', '30 дни', '90 дни', '1 година'] as const
