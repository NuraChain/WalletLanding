import { useEffect, useRef } from 'react'

/**
 * Tilts a `transform-style: preserve-3d` stage toward the pointer by writing
 * `--rx` / `--ry`, which the `.stage` rule consumes. Smoothing is left to the
 * CSS transition rather than a rAF spring — one property write per frame.
 *
 * Bails out entirely for reduced-motion users and for coarse pointers, where a
 * hover-driven tilt has nothing to respond to. The scene is designed to look
 * complete at rest, so bailing out costs nothing.
 */
export function usePointerTilt<T extends HTMLElement>(maxDeg = 7) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0

    const clamp = (value: number) => Math.max(-0.5, Math.min(0.5, value))

    const onMove = (event: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        if (!rect.width || !rect.height) return
        const x = clamp((event.clientX - rect.left) / rect.width - 0.5)
        const y = clamp((event.clientY - rect.top) / rect.height - 0.5)
        el.style.setProperty('--ry', `${(x * maxDeg * 2).toFixed(2)}deg`)
        el.style.setProperty('--rx', `${(-y * maxDeg * 2).toFixed(2)}deg`)
      })
    }

    const reset = () => {
      el.style.setProperty('--rx', '0deg')
      el.style.setProperty('--ry', '0deg')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', reset)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', reset)
    }
  }, [maxDeg])

  return ref
}
