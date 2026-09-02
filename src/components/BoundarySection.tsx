import { useLocale } from '../i18n/context'
import type { Group } from '../i18n/types'
import { Section } from './Section'

function Column({ group, sealed }: { group: Group; sealed: boolean }) {
  return (
    <div className={sealed ? 'md:pe-14' : 'md:ps-14'}>
      <h3 className="eyebrow" style={sealed ? { color: 'var(--color-seal-ink)' } : undefined}>
        {group.title}
      </h3>

      <dl className="mt-7 space-y-6">
        {group.items.map((item) => (
          <div key={item.term} className="flex gap-3.5">
            <span
              aria-hidden="true"
              className={
                sealed
                  ? 'mt-2 size-1.5 shrink-0 rounded-full bg-seal'
                  : 'mt-2 h-px w-3.5 shrink-0 bg-rule'
              }
            />
            <div>
              <dt className="font-medium">{item.term}</dt>
              <dd className="mt-1 text-ink-2">{item.detail}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function BoundarySection() {
  const { t } = useLocale()

  return (
    <Section
      id="boundary"
      eyebrow={t.boundary.eyebrow}
      headline={t.boundary.headline}
      body={t.boundary.body}
    >
      <div className="boundary-split grid gap-14 md:grid-cols-2 md:gap-0">
        <Column group={t.boundary.stays} sealed />
        <Column group={t.boundary.leaves} sealed={false} />
        <span className="boundary-tag" aria-hidden="true">
          {t.boundary.tag}
        </span>
      </div>
    </Section>
  )
}
