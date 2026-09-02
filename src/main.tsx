import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg/single-page'

import App from './App'
import BlogPage from './BlogPage'
import PostPage from './PostPage'
import { allRoutes, type Route, routeFromPath } from './route'

import './index.css'

function page(route: Route) {
  switch (route.kind) {
    case 'home':
      return (
        <StrictMode>
          <App locale={route.locale} />
        </StrictMode>
      )
    case 'blog':
      return (
        <StrictMode>
          <BlogPage locale={route.locale} />
        </StrictMode>
      )
    case 'post':
      return (
        <StrictMode>
          <PostPage locale={route.locale} slug={route.slug} />
        </StrictMode>
      )
  }
}

// Single-page mode: no router, and no react-router-dom in the bundle. Every
// page is a directory of static HTML instead - `/` is English, `/fa/` is
// Persian, `/fa/blog/<slug>/` is a Persian post - and moving between them is a
// real navigation (see `includedRoutes` below and src/route.ts).
//
// In the browser the page is read off the path it was served from. During the
// prerender there is no window, so the default goes in here and the callback
// swaps in the right page for each route before it renders.
const initialRoute = routeFromPath(typeof window === 'undefined' ? '/' : window.location.pathname)

export const createRoot = ViteReactSSG(page(initialRoute), (ctx) => {
  if (ctx.routePath) ctx.app = page(routeFromPath(ctx.routePath))
})

/** Every page the build writes. `vite-react-ssg build` reads this export. */
export function includedRoutes() {
  return allRoutes()
}
