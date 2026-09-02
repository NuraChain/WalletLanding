import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  eyebrow: string
  headline: string
  body?: string
  children: ReactNode
}

/**
 * The datasheet grid: a monospace label in the left rail, content in the main
 * column, hairline between sections.
 */
export function Section({ id, eyebrow, headline, body, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-x-14 gap-y-8 px-6 py-24 md:grid-cols-[13rem_1fr] md:py-32">
        <p className="eyebrow reveal pt-3">{eyebrow}</p>

        <div>
          <h2 className="display reveal max-w-2xl text-h2">{headline}</h2>
          {body ? <p className="reveal mt-6 max-w-xl text-lg text-ink-2">{body}</p> : null}
          <div className="reveal mt-14">{children}</div>
        </div>
      </div>
    </section>
  )
}
