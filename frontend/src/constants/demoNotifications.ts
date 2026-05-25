export type DemoNotification = {
  id: string
  title: string
  message: string
  timeAgo: string
  tone: 'emerald' | 'rose' | 'amber'
}

export const DEMO_NOTIFICATIONS: DemoNotification[] = [
  {
    id: '1',
    title: 'Sony WH-CH720N',
    message: 'Цената падна с 20% в eMAG — добър момент за покупка.',
    timeAgo: 'преди 15 мин',
    tone: 'emerald',
  },
  {
    id: '2',
    title: 'Samsung Galaxy A55',
    message: 'Достигна най-ниска цена в Technopolis за последните 90 дни.',
    timeAgo: 'преди 2 ч',
    tone: 'emerald',
  },
  {
    id: '3',
    title: 'Dyson V15 Detect',
    message: 'Рязко поскъпване с 18% в Ardes — препоръчваме изчакване.',
    timeAgo: 'преди 5 ч',
    tone: 'rose',
  },
]
