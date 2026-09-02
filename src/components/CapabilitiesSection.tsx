import { useLocale } from '../i18n/context'
import { Section } from './Section'

export function CapabilitiesSection() {
  const { t } = useLocale()

  return (
    <Section eyebrow={t.capabilities.eyebrow} headline={t.capabilities.headline}>
      <ul className="grid gap-px overflow-hidden rounded-md bg-rule sm:grid-cols-3">
        {t.capabilities.items.map((item) => (
          <li key={item.title} className="bg-card p-7">
            <h3 className="display text-lg">{item.title}</h3>
            <p className="mt-2.5 text-sm text-ink-2">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
