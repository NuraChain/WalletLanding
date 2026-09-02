import { BoundarySection } from './components/BoundarySection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { Hero } from './components/Hero'
import { PlatformsSection } from './components/PlatformsSection'
import { SealSection } from './components/SealSection'
import { Seo } from './components/Seo'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { SourceSection } from './components/SourceSection'
import { content } from './i18n'
import { LocaleContext } from './i18n/context'
import type { Locale } from './i18n/locales'

/** The landing page, in one language. */
export default function App({ locale }: { locale: Locale }) {
  const t = content[locale.code]

  return (
    <LocaleContext value={{ locale, t, route: { kind: 'home', locale } }}>
      <Seo title={t.meta.title} description={t.meta.description} />
      <SiteHeader />
      <main>
        <Hero />
        <BoundarySection />
        <SealSection />
        <CapabilitiesSection />
        <PlatformsSection />
        <SourceSection />
      </main>
      <SiteFooter />
    </LocaleContext>
  )
}
