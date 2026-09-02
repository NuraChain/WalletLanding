import { postsIn } from './blog/posts'
import { blogGraph } from './blog/schema'
import { PostList } from './components/PostList'
import { Seo } from './components/Seo'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { content } from './i18n'
import { LocaleContext } from './i18n/context'
import type { Locale } from './i18n/locales'

/** The index of one language's posts, at `/blog/` or `/<lang>/blog/`. */
export default function BlogPage({ locale }: { locale: Locale }) {
  const t = content[locale.code]
  const posts = postsIn(locale.code)

  return (
    <LocaleContext value={{ locale, t, route: { kind: 'blog', locale } }}>
      <Seo
        title={t.blog.title}
        description={t.blog.description}
        graph={blogGraph(locale, t, posts)}
      />
      <SiteHeader />

      <main>
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
          <p className="eyebrow">{t.blog.eyebrow}</p>
          <h1 className="display mt-6 max-w-3xl text-h2">{t.blog.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-2">{t.blog.intro}</p>
        </div>

        <section className="border-t border-rule">
          <div className="mx-auto max-w-6xl px-6 py-6 md:py-10">
            <PostList posts={posts} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </LocaleContext>
  )
}
