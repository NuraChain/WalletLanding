import { useLocale } from '../i18n/context'
import { siteConfig } from '../site.config'
import { Section } from './Section'

export function SourceSection() {
  const { locale, t } = useLocale()

  return (
    <Section
      id="source"
      eyebrow={t.source.eyebrow}
      headline={t.source.headline}
      body={t.source.body}
    >
      <a className="btn btn-ghost" href={siteConfig.repository} rel="noreferrer">
        {t.source.cta}
        <span aria-hidden="true">{locale.dir === 'rtl' ? '←' : '→'}</span>
      </a>
    </Section>
  )
}
