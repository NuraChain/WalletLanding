import type { Post } from '../blog/types'
import { useLocale } from '../i18n/context'
import { postPath } from '../route'

/**
 * The index, as rows rather than cards - the same idiom as the builds section:
 * one hairline per row, the date in the start-side rail, the title in the main
 * column. Dates stay ISO in the mono face: on this page a date is data.
 *
 * The link is on the title alone and covers the row through `.link-cover`, so
 * assistive technology gets one link named by the post rather than a block of
 * mixed text, and a pointer still has the whole row to hit.
 */
export function PostList({ posts }: { posts: readonly Post[] }) {
  const { locale, t } = useLocale()

  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.slug}
          className="group relative grid gap-x-10 gap-y-3 border-t border-rule py-8 first:border-t-0 md:grid-cols-[9rem_1fr]"
        >
          <p className="flex items-center gap-3 font-mono text-xs text-ink-2 md:flex-col md:items-start md:gap-2 md:pt-2">
            <time dateTime={post.date}>{post.date}</time>
            <span>{t.blog.readingTime(post.minutes)}</span>
          </p>

          <div>
            <h2 className="display max-w-2xl text-2xl sm:text-3xl">
              <a
                href={postPath(locale.code, post.slug)}
                className="link-cover transition-colors group-hover:text-ink"
              >
                {post.title}
              </a>
            </h2>
            <p className="mt-3 max-w-xl text-ink-2">{post.description}</p>
            <p className="mt-4 font-mono text-xs text-ink-2 transition-colors group-hover:text-ink">
              {t.blog.readMore}
              <span aria-hidden="true">{locale.dir === 'rtl' ? ' ←' : ' →'}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
