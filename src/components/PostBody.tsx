const POST_BODY_ID = 'post-body'

/**
 * In a production browser bundle the post bodies are deliberately absent (see
 * blog/posts.ts), so this reads back the HTML the prerender already put in the
 * DOM. Passing React exactly the string the element holds keeps hydration a
 * no-op instead of a mismatch. In dev, `html` arrives filled and this is
 * never reached.
 *
 * Guarded rather than hoisted: there is no document during the render pass.
 */
function bodyFromDom(): string {
  if (typeof document === 'undefined') return ''
  return document.getElementById(POST_BODY_ID)?.innerHTML ?? ''
}

/** The rendered markdown. `html` is empty in the browser, by design. */
export function PostBody({ html }: { html: string }) {
  return (
    <div
      id={POST_BODY_ID}
      className="prose"
      // The markdown is ours, written in this repository and compiled at build
      // time by plugins/markdown.ts - never user input.
      dangerouslySetInnerHTML={{ __html: html || bodyFromDom() }}
    />
  )
}
