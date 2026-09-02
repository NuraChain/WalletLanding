import { useLocale } from '../i18n/context'
import { siteConfig } from '../site.config'
import { PlatformIcon } from './PlatformIcon'
import { Section } from './Section'

/**
 * One row per build, datasheet style: mark, name, kind, then the links. A
 * platform with no build yet says so where the link would be, rather than
 * pointing at nothing.
 */
export function PlatformsSection() {
  const { t } = useLocale()

  return (
    <Section id="builds" eyebrow={t.platforms.eyebrow} headline={t.platforms.headline}>
      <ul className="border-b border-rule">
        {siteConfig.platforms.map((platform) => (
          <li
            key={platform.os}
            className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-rule py-5"
          >
            <div className="flex items-center gap-4">
              <PlatformIcon
                name={platform.icon}
                width={24}
                height={24}
                className="shrink-0 text-ink-2"
              />
              <div>
                <p className="display text-xl">{platform.os}</p>
                <p className="mt-1 font-mono text-xs text-ink-2">
                  {platform.kind === 'desktop' ? t.platforms.desktop : t.platforms.mobile}
                </p>
              </div>
            </div>

            {platform.href ? (
              <div className="flex flex-wrap items-center gap-2">
                {platform.store ? (
                  <a className="btn btn-ghost" href={platform.store.href} rel="noreferrer">
                    <PlatformIcon name="googlePlay" width={14} height={14} />
                    {platform.store.name}
                  </a>
                ) : null}
                <a className="btn btn-ghost" href={platform.href} rel="noreferrer">
                  {t.platforms.downloadFor(platform.os)}
                </a>
              </div>
            ) : (
              <p className="font-mono text-xs text-ink-2">{t.platforms.unavailable}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  )
}
