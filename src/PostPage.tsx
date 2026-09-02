import { findPost, postBody, postsIn } from './blog/posts'
import { postGraph } from './blog/schema'
import { PostBody } from './components/PostBody'
import { PostList } from './components/PostList'
import { Seo } from './components/Seo'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { content } from './i18n'
import { LocaleContext } from './i18n/context'
import type { Locale } from './i18n/locales'
import { blogPath } from './route'
import { siteConfig } from './site.config'

/** How many other posts to offer at the end. */
const MORE = 3

/** One post, at `/blog/<slug>/` or `/<lang>/blog/<slug>/`. */
export default function PostPage({ locale, slug }: { locale: Locale; slug: string }) {
  const t = content[locale.code]
  const post = findPost(locale.code, slug)
  if (!post) throw new Error(`No post "${slug}" in ${locale.code}`)

  const others = postsIn(locale.code)
    .filter((item) => item.slug !== slug)
    .slice(0, MORE)

  return (
    <LocaleContext value={{ locale, t, route: { kind: 'post', locale, slug } }}>
      <Seo
        title={`${post.title} — ${siteConfig.name}`}
        description={post.description}
        type="article"
        published={post.date}
        graph={postGraph(locale, t, post)}
      />
      <SiteHeader />

      <main>
        <article>
          <header className="mx-auto max-w-6xl px-6 pt-14 pb-12 md:pt-20">
            {/* The breadcrumb the BreadcrumbList in the graph describes. */}
            <nav aria-label={t.blog.nav}>
              <a
                href={blogPath(locale.code)}
                className="font-mono text-xs text-ink-2 transition-colors hover:text-ink"
              >
                <span aria-hidden="true">{locale.dir === 'rtl' ? '→ ' : '← '}</span>
                {t.blog.backToBlog}
              </a>
            </nav>

            <h1 className="display mt-8 max-w-3xl text-h2">{post.title}</h1>
            <p className="mt-6 max-w-xl text-lg text-ink-2">{post.description}</p>

            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-ink-2">
              <span>
                {t.blog.published} <time dateTime={post.date}>{post.date}</time>
              </span>
              <span className="hidden h-3 w-px bg-rule sm:block" />
              <span>{t.blog.readingTime(post.minutes)}</span>
              {post.tags.length ? (
                <>
                  <span className="hidden h-3 w-px bg-rule sm:block" />
                  <span>{post.tags.join(' · ')}</span>
                </>
              ) : null}
            </p>
          </header>

          <div className="border-t border-rule">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <PostBody html={postBody(locale.code, slug)} />
            </div>
          </div>
        </article>

        {others.length ? (
          <section className="border-t border-rule">
            <div className="mx-auto grid max-w-6xl gap-x-14 gap-y-8 px-6 py-16 md:grid-cols-[13rem_1fr]">
              <p className="eyebrow pt-3">{t.blog.more}</p>
              <PostList posts={others} />
            </div>
          </section>
        ) : null}
      </main>

      <SiteFooter />
    </LocaleContext>
  )
}
