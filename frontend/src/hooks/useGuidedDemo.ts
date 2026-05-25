import { useCallback, useEffect, useRef, useState } from 'react'
import type { RecentProductRow } from '@/constants/dashboard'
import {
  DEMO_FINISH_MESSAGE,
  DEMO_GUARD_TOAST,
  DEMO_STORE_PRICES,
  DEMO_STORES,
  DEMO_TIMING,
  createDemoTrackedProduct,
} from '@/constants/guidedDemo'

export type GuidedDemoStep = 'intro' | 1 | 2 | 3 | 4 | 5 | 'done'

export type StoreScanStatus = 'pending' | 'checking' | 'done'
export type DemoToastTone = 'success' | 'info' | 'warn'

export function useGuidedDemo() {
  const timersRef = useRef<number[]>([])
  const [step, setStep] = useState<GuidedDemoStep>('intro')
  const [productName, setProductName] = useState('')
  const [selectedStores, setSelectedStores] = useState<string[]>([...DEMO_STORES])
  const [storeStatuses, setStoreStatuses] = useState<Record<string, StoreScanStatus>>({})
  const [storePrices, setStorePrices] = useState<Record<string, string>>({})
  const [demoRow, setDemoRow] = useState<RecentProductRow | null>(null)
  const [highlightedRowId, setHighlightedRowId] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastTone, setToastTone] = useState<DemoToastTone>('info')
  const [unreadNotifications, setUnreadNotifications] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout)
    timersRef.current = []
  }, [])

  const schedule = useCallback((fn: () => void, delayMs: number) => {
    const id = window.setTimeout(fn, delayMs)
    timersRef.current.push(id)
  }, [])

  const showGuardToast = useCallback(() => {
    setToastTone('warn')
    setToastMessage(DEMO_GUARD_TOAST)
  }, [])

  const dismissToast = useCallback(() => {
    setToastMessage(null)
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  const beginDemo = useCallback((sampleProduct?: string) => {
    clearTimers()
    if (sampleProduct) setProductName(sampleProduct)
    schedule(() => setStep(1), DEMO_TIMING.afterStartDemo)
  }, [clearTimers, schedule])

  const startTracking = useCallback(
    (name: string) => {
      const trimmed = name.trim()
      if (!trimmed || isTransitioning) return

      clearTimers()
      setIsTransitioning(true)
      setProductName(trimmed)

      schedule(() => {
        setStep(2)
        setIsTransitioning(false)
      }, DEMO_TIMING.afterStartTracking)
    },
    [clearTimers, isTransitioning, schedule],
  )

  const toggleStore = useCallback((store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store],
    )
  }, [])

  const runStoreScan = useCallback(
    (stores: string[]) => {
      const initial: Record<string, StoreScanStatus> = {}
      stores.forEach((s) => {
        initial[s] = 'pending'
      })
      setStoreStatuses(initial)
      setStorePrices({})

      stores.forEach((store, index) => {
        schedule(() => {
          setStoreStatuses((prev) => ({ ...prev, [store]: 'checking' }))
          if (index < 2) {
            setUnreadNotifications((count) => Math.max(0, count - 1))
            setToastTone('info')
            setToastMessage(`Проверяваме ${store}: търсим цена и последни промени.`)
          }
        }, index * DEMO_TIMING.storeScanEach)

        schedule(() => {
          setStoreStatuses((prev) => ({ ...prev, [store]: 'done' }))
          setStorePrices((prev) => ({ ...prev, [store]: DEMO_STORE_PRICES[store] ?? '1 939,00 €' }))
        }, index * DEMO_TIMING.storeScanEach + DEMO_TIMING.storeScanEach * 0.55)
      })

      const totalScanMs =
        stores.length * DEMO_TIMING.storeScanEach + DEMO_TIMING.afterStoreScan

      schedule(() => {
        schedule(() => {
          setStep(4)
          setIsTransitioning(false)
        }, DEMO_TIMING.beforeAnalysisStep)
      }, totalScanMs)
    },
    [schedule],
  )

  const confirmStores = useCallback(() => {
    if (selectedStores.length === 0 || isTransitioning) return

    clearTimers()
    setIsTransitioning(true)

    schedule(() => {
      setStep(3)
      runStoreScan(selectedStores)
    }, DEMO_TIMING.beforeStoreScan)
  }, [clearTimers, isTransitioning, runStoreScan, schedule, selectedStores])

  const continueToComparison = useCallback(() => {
    if (isTransitioning) return

    const row = createDemoTrackedProduct(productName, selectedStores)
    setDemoRow(row)
    setHighlightedRowId(row.id)
    setStep(5)

    schedule(() => {
      setHighlightedRowId((current) => (current === row.id ? null : current))
    }, 8000)
  }, [isTransitioning, productName, schedule, selectedStores])

  const finishDemo = useCallback(() => {
    setStep('done')
    setToastTone('success')
    setToastMessage(DEMO_FINISH_MESSAGE)
  }, [])

  const resetDemo = useCallback(() => {
    clearTimers()
    setStep('intro')
    setProductName('')
    setSelectedStores([...DEMO_STORES])
    setStoreStatuses({})
    setStorePrices({})
    setDemoRow(null)
    setHighlightedRowId(null)
    setToastMessage(null)
    setToastTone('info')
    setUnreadNotifications(3)
    setIsTransitioning(false)
  }, [clearTimers])

  const scrollToRef = useCallback(
    (ref: HTMLElement | null) => {
      if (!ref) return
      schedule(() => {
        ref.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 280)
    },
    [schedule],
  )

  return {
    step,
    productName,
    selectedStores,
    storeStatuses,
    storePrices,
    demoRow,
    highlightedRowId,
    toastMessage,
    toastTone,
    unreadNotifications,
    isTransitioning,
    showGuardToast,
    dismissToast,
    beginDemo,
    startTracking,
    toggleStore,
    confirmStores,
    continueToComparison,
    finishDemo,
    resetDemo,
    scrollToRef,
  }
}
