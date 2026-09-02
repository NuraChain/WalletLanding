import { useLocale } from '../i18n/context'
import { Section } from './Section'

/**
 * Numbered because this genuinely is a sequence - the order of hash, encrypt,
 * store is the whole point. Numbering anything else on this page would be
 * decoration.
 */
export function SealSection() {
  const { t } = useLocale()

  return (
    <Section id="seal" eyebrow={t.seal.eyebrow} headline={t.seal.headline} body={t.seal.body}>
      <ol className="border-b border-rule">
        {t.seal.steps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-x-10 gap-y-3 border-t border-rule py-9 sm:grid-cols-[4rem_1fr]"
          >
            <span className="font-mono text-xs text-seal-ink">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="display text-xl">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-ink-2">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
