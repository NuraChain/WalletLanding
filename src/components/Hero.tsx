import { usePointerTilt } from '../hooks/usePointerTilt'
import { useLocale } from '../i18n/context'
import { DeviceScene } from './DeviceScene'

/**
 * The signature: headline and device share one `preserve-3d` stage on
 * different Z planes, so they parallax against each other as the pointer
 * moves. The type is in the scene, not next to it.
 */
export function Hero() {
  const { t } = useLocale()
  const stage = usePointerTilt<HTMLDivElement>(5)

  return (
    <section className="scene overflow-clip px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div
        ref={stage}
        className="stage mx-auto grid max-w-6xl items-center gap-y-16 md:grid-cols-[1.05fr_1fr] md:gap-x-12"
      >
        <div className="plane-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>

          <h1 className="display mt-7 text-display">{t.hero.headline}</h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-2">{t.hero.body}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#builds">
              {t.hero.download}
            </a>
            <a className="btn btn-ghost" href="#source">
              {t.hero.source}
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-ink-2">{t.hero.note}</p>
        </div>

        <DeviceScene />
      </div>
    </section>
  )
}
