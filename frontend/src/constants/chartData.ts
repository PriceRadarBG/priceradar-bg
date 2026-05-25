export type PriceLinePoint = {
  label: string
  average: number
  decreases: number
  increases: number
}

/** Short labels for the hero preview mini chart (7 points). */
export const HERO_PREVIEW_LINE_DATA: PriceLinePoint[] = [
  { label: 'Д1', average: 142, decreases: 18, increases: 8 },
  { label: 'Д2', average: 138, decreases: 22, increases: 6 },
  { label: 'Д3', average: 135, decreases: 25, increases: 5 },
  { label: 'Д4', average: 140, decreases: 20, increases: 9 },
  { label: 'Д5', average: 132, decreases: 28, increases: 4 },
  { label: 'Д6', average: 128, decreases: 32, increases: 3 },
  { label: 'Д7', average: 130, decreases: 30, increases: 5 },
]

export const PRICE_LINE_DATA: Record<string, PriceLinePoint[]> = {
  '7 дни': [
    { label: 'Пн', average: 142, decreases: 18, increases: 8 },
    { label: 'Вт', average: 138, decreases: 22, increases: 6 },
    { label: 'Ср', average: 135, decreases: 25, increases: 5 },
    { label: 'Чт', average: 140, decreases: 20, increases: 9 },
    { label: 'Пт', average: 132, decreases: 28, increases: 4 },
    { label: 'Сб', average: 128, decreases: 32, increases: 3 },
    { label: 'Нд', average: 130, decreases: 30, increases: 5 },
  ],
  '30 дни': [
    { label: 'С1', average: 155, decreases: 12, increases: 14 },
    { label: 'С2', average: 148, decreases: 18, increases: 10 },
    { label: 'С3', average: 145, decreases: 22, increases: 8 },
    { label: 'С4', average: 138, decreases: 28, increases: 6 },
    { label: 'С5', average: 142, decreases: 24, increases: 9 },
    { label: 'С6', average: 135, decreases: 30, increases: 5 },
    { label: 'С7', average: 130, decreases: 32, increases: 4 },
    { label: 'С8', average: 128, decreases: 35, increases: 3 },
  ],
  '90 дни': [
    { label: 'Ян', average: 160, decreases: 10, increases: 18 },
    { label: 'Фев', average: 152, decreases: 15, increases: 14 },
    { label: 'Мар', average: 145, decreases: 22, increases: 10 },
    { label: 'Апр', average: 138, decreases: 28, increases: 7 },
    { label: 'Май', average: 132, decreases: 32, increases: 5 },
  ],
  '1 година': [
    { label: 'Юни', average: 168, decreases: 8, increases: 22 },
    { label: 'Юли', average: 162, decreases: 10, increases: 20 },
    { label: 'Авг', average: 155, decreases: 14, increases: 16 },
    { label: 'Сеп', average: 148, decreases: 18, increases: 12 },
    { label: 'Окт', average: 142, decreases: 22, increases: 10 },
    { label: 'Ное', average: 136, decreases: 26, increases: 8 },
    { label: 'Дек', average: 130, decreases: 30, increases: 6 },
    { label: 'Яну', average: 138, decreases: 24, increases: 9 },
    { label: 'Фев', average: 132, decreases: 28, increases: 7 },
    { label: 'Мар', average: 128, decreases: 32, increases: 5 },
    { label: 'Апр', average: 125, decreases: 35, increases: 4 },
    { label: 'Май', average: 130, decreases: 30, increases: 5 },
  ],
}

export type DistributionSegment = {
  name: string
  value: number
  percent: number
  fill: string
}

export const DISTRIBUTION_DATA: DistributionSegment[] = [
  { name: 'Намаления', value: 312, percent: 25, fill: '#10b981' },
  { name: 'Поскъпвания', value: 97, percent: 8, fill: '#f43f5e' },
  { name: 'Фалшиви намаления', value: 24, percent: 2, fill: '#f59e0b' },
  { name: 'Без промяна', value: 815, percent: 65, fill: '#94a3b8' },
]

export const DISTRIBUTION_TOTAL = 1248
