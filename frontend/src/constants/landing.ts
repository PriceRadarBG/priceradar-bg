import type { LucideIcon } from 'lucide-react'
import { History, AlertTriangle, Store, LineChart, ShieldCheck, Scale } from 'lucide-react'

export const LANDING_FEATURES = [
  {
    id: 'history',
    icon: LineChart,
    title: 'История на цените',
    description:
      'Визуализираме промените във времето, за да прецените дали текущата цена е изгодна.',
  },
  {
    id: 'fake-deals',
    icon: ShieldCheck,
    title: 'Разпознаване на фалшиви намаления',
    description:
      'Сравняваме обявената отстъпка с реалната ценова история и маркираме подозрителни промоции.',
  },
  {
    id: 'comparison',
    icon: Scale,
    title: 'Сравнение на оферти',
    description:
      'Съпоставяме цени на един продукт от различни български онлайн магазини.',
  },
] as const

export const LANDING_PROBLEM_CARDS: {
  title: string
  description: string
  hint: string
  miniUi: string
  icon: LucideIcon
  tone: 'rose' | 'amber' | 'slate'
}[] = [
  {
    title: 'Липса на ценова история',
    description:
      'Често виждате само днешната цена, без контекст как се е променяла през последните седмици.',
    hint: 'Виждаш само днешната цена',
    miniUi: '649,00 € · без графика',
    icon: History,
    tone: 'slate',
  },
  {
    title: 'Подвеждащи промоции',
    description:
      'Стара цена може да е изкуствено завишена. Намалението изглежда голямо, но не е реално.',
    hint: 'Стара цена може да е изкуствено завишена',
    miniUi: '174,00 € → 139,00 € · -20%',
    icon: AlertTriangle,
    tone: 'amber',
  },
  {
    title: 'Трудно сравнение между магазини',
    description:
      'Ръчното обхождане на сайтове отнема време и затруднява избора на най-добрата оферта.',
    hint: 'Нужно е ръчно сравнение между сайтове',
    miniUi: '5 магазина · ръчен преглед',
    icon: Store,
    tone: 'rose',
  },
]

export const LIVE_SCAN_ROWS = [
  {
    id: '1',
    store: 'eMAG',
    product: 'Sony WH-CH720N',
    price: '139,00 €',
    verdict: 'фалшиво намаление',
    status: 'риск',
    statusTone: 'amber' as const,
  },
  {
    id: '2',
    store: 'Technopolis',
    product: 'Apple iPhone 15',
    price: '1 499,00 €',
    verdict: 'добра цена',
    status: 'добра оферта',
    statusTone: 'emerald' as const,
  },
  {
    id: '3',
    store: 'Ardes.bg',
    product: 'ASUS TUF Gaming F15',
    price: '1 299,00 €',
    verdict: '+18% поскъпване',
    status: 'анализирано',
    statusTone: 'slate' as const,
  },
  {
    id: '4',
    store: 'Ozone',
    product: 'Xiaomi Redmi Note 13 Pro',
    price: '499,00 €',
    verdict: 'най-ниска от 90 дни',
    status: 'добра оферта',
    statusTone: 'emerald' as const,
  },
] as const

export const LANDING_ALGORITHM_STEPS = [
  {
    step: '1',
    title: 'Събираме история',
    description:
      'Следим как се движи цената на продукта във времето и пазим реален контекст.',
  },
  {
    step: '2',
    title: 'Сравняваме със старата цена',
    description:
      'Проверяваме дали обявената стара цена се среща в историята или е изкуствено завишена.',
  },
  {
    step: '3',
    title: 'Даваме оценка 0-100',
    description:
      'Висока оценка означава по-надеждна промоция, ниска оценка - повод за внимание.',
  },
] as const
