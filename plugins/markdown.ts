/**
 * Turns `src/content/**\/*.md` into a module at build time:
 *
 *     export const meta = { title, description, date, tags, minutes, words }
 *     export const html = '<h2 id="…">…</h2><p>…</p>'
 *
 * Doing it here rather than in the app is what keeps a markdown parser - and,
 * with the named `html` export, the post bodies themselves - out of the browser
 * bundle. See src/blog/posts.ts for the second half of that.
 *
 * The dialect is deliberately small: headings, paragraphs, lists, quotes,
 * fenced code, rules, and inline code/bold/italic/links. Every post on this
 * site is written against it, so anything it does not support is a mistake in
 * the post rather than a missing feature - and an unknown line just becomes a
 * paragraph, never silently disappears.
 */
import type { Plugin } from 'vite'

import type { PostFrontmatter, PostMetadata } from '../src/blog/types.ts'

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** Heading id: keeps letters and digits of any script, so `#gas` works in Persian too. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Inline spans, applied to already-escaped text. Links come first so that a
 * URL containing `*` or `_` is not mistaken for emphasis. Both emphasis
 * markers are accepted: oxfmt formats the posts too, and rewrites `*this*`
 * into `_this_`.
 */
function inline(text: string): string {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, label: string, href: string) => {
      const external = /^https?:/.test(href)
      const rel = external ? ' rel="noreferrer"' : ''
      return `<a href="${href.replace(/"/g, '&quot;')}"${rel}>${label}</a>`
    })
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/(^|[^_\w])_([^_\n]+)_/g, '$1<em>$2</em>')
}

function renderMarkdown(source: string): string {
  const lines = source.split(/\r?\n/)
  const out: string[] = []
  let index = 0

  /** Consumes lines while they keep matching, so blocks stay contiguous. */
  const take = (test: (line: string) => boolean): string[] => {
    const block: string[] = []
    while (index < lines.length && test(lines[index])) {
      block.push(lines[index])
      index += 1
    }
    return block
  }

  while (index < lines.length) {
    const line = lines[index]

    if (!line.trim()) {
      index += 1
      continue
    }

    if (line.startsWith('```')) {
      index += 1
      const code = take((next) => !next.startsWith('```'))
      index += 1 // the closing fence
      out.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`)
      continue
    }

    const heading = /^(#{2,4})\s+(.*)$/.exec(line)
    if (heading) {
      index += 1
      const level = heading[1].length
      const body = inline(heading[2].trim())
      out.push(`<h${level} id="${slugify(heading[2])}">${body}</h${level}>`)
      continue
    }

    if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
      index += 1
      out.push('<hr />')
      continue
    }

    if (/^[-*]\s+/.test(line)) {
      const items = take((next) => /^[-*]\s+/.test(next))
      const list = items.map((item) => `<li>${inline(item.replace(/^[-*]\s+/, ''))}</li>`)
      out.push(`<ul>${list.join('')}</ul>`)
      continue
    }

    if (/^\d+[.)]\s+/.test(line)) {
      const items = take((next) => /^\d+[.)]\s+/.test(next))
      const list = items.map((item) => `<li>${inline(item.replace(/^\d+[.)]\s+/, ''))}</li>`)
      out.push(`<ol>${list.join('')}</ol>`)
      continue
    }

    if (line.startsWith('>')) {
      const quote = take((next) => next.startsWith('>'))
      const body = quote.map((item) => item.replace(/^>\s?/, '')).join(' ')
      out.push(`<blockquote><p>${inline(body)}</p></blockquote>`)
      continue
    }

    const paragraph = take(
      (next) => Boolean(next.trim()) && !/^(#{2,4}\s|[-*]\s|\d+[.)]\s|>|```|---)/.test(next),
    )
    out.push(`<p>${inline(paragraph.join(' '))}</p>`)
  }

  return out.join('\n')
}

/**
 * Reading time. Han text has no spaces, so words would be one - count
 * ideographs there instead, at the slower rate they are read.
 */
function measure(text: string): { words: number; minutes: number } {
  const ideographs = text.match(/\p{Script=Han}/gu)?.length ?? 0
  if (ideographs > 40) {
    return { words: ideographs, minutes: Math.ceil(ideographs / 300) }
  }
  const words = text.split(/\s+/).filter(Boolean).length
  return { words, minutes: Math.max(1, Math.ceil(words / 200)) }
}

function parseFrontmatter(raw: string, id: string): { data: PostFrontmatter; body: string } {
  const match = FRONTMATTER.exec(raw)
  if (!match) throw new Error(`${id}: missing --- frontmatter block`)

  const fields = new Map<string, string>()
  for (const line of match[1]!.split(/\r?\n/)) {
    if (!line.trim()) continue
    const separator = line.indexOf(':')
    if (separator === -1) throw new Error(`${id}: frontmatter line is not "key: value" - ${line}`)
    const value = line.slice(separator + 1).trim()
    fields.set(line.slice(0, separator).trim(), value.replace(/^['"]|['"]$/g, ''))
  }

  const required = (key: string): string => {
    const value = fields.get(key)
    if (!value) throw new Error(`${id}: frontmatter is missing "${key}"`)
    return value
  }

  const date = required('date')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`${id}: date must be YYYY-MM-DD`)

  return {
    data: {
      title: required('title'),
      description: required('description'),
      date,
      tags: (fields.get('tags') ?? '')
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    },
    body: raw.slice(match[0].length),
  }
}

/** Compiles one markdown file. Exported so the sitemap can read the same fields. */
export function compilePost(raw: string, id: string): { meta: PostMetadata; html: string } {
  const { data, body } = parseFrontmatter(raw, id)
  return { meta: { ...data, ...measure(body) }, html: renderMarkdown(body) }
}

export function markdown(): Plugin {
  return {
    name: 'wallet-landing:markdown',
    enforce: 'pre',

    transform(code, id) {
      if (!id.endsWith('.md')) return null

      const { meta, html } = compilePost(code, id)
      return {
        code: [
          `export const meta = ${JSON.stringify(meta)}`,
          `export const html = ${JSON.stringify(html)}`,
          'export default { meta, html }',
        ].join('\n'),
        map: null,
      }
    },
  }
}
