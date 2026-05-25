# PriceRadar BG — Frontend

React + TypeScript + Vite + Tailwind CSS UI foundation.

## Стартиране

```bash
cd frontend
npm install
npm run dev
```

Отворете [http://localhost:5173](http://localhost:5173).

## Маршрути

| Път | Страница |
|-----|----------|
| `/` | Начална (landing) страница |
| `/dashboard` | Демо табло (съществуващ UI) |

## Тема и графики

- **Тъмна тема:** превключвател в header (landing + dashboard) и в sidebar; запазва се в `localStorage`; по подразбиране — системната настройка.
- **Графики:** Recharts (`PriceLineChart`, `DistributionDonutChart`) с демо данни и български етикети.

## Структура

```
src/
  components/
    layout/     # Sidebar, TopBar, DashboardLayout
    ui/         # Card, StatCard, SearchInput, chart, table
  constants/    # Навигация и демо данни
  pages/        # DashboardPage
```

## Скриптове

- `npm run dev` — локален сървър за разработка
- `npm run build` — production build
- `npm run preview` — преглед на build
- `npm run lint` — ESLint
