import type { FlagCode } from '../i18n/locales'

/**
 * Flags for the language switcher: one SVG sprite of <symbol>s, rendered once
 * per page by <FlagSprite />, and a <Flag /> that draws one with <use>.
 * Inline on purpose - the sprite ships inside the prerendered HTML, costs no
 * request, and works with JavaScript off, like the rest of the switcher.
 *
 * Artwork. fr, ru, tr, cn, us and in are the flag-icons drawings (MIT). es,
 * ir and sa put the simplified emblems from circle-flags (MIT) on bands of the
 * real proportions - the faithful drawings run 10-80 kB apiece for a mark that
 * renders 20 px wide. br is drawn here, without the stars. Every symbol shares
 * flag-icons' 4:3 box, 640x480.
 */
export function FlagSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
      <defs>
        <symbol id="flag-us" viewBox="0 0 640 480">
          <path fill="#bd3d44" d="M0 0h640v480H0" />
          <path
            stroke="#fff"
            strokeWidth="37"
            d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
          />
          <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
          <marker id="flag-us-star" markerHeight="30" markerWidth="30">
            <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
          </marker>
          <path
            fill="none"
            markerMid="url(#flag-us-star)"
            d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
          />
        </symbol>

        <symbol id="flag-ir" viewBox="0 0 640 480">
          <path fill="#239f40" d="M0 0h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#da0000" d="M0 320h640v160H0z" />
          {/* The takbir bands along both edges of the white, reduced to marks. */}
          <path stroke="#fff" strokeWidth="9" strokeDasharray="13 9" d="M0 149h640M0 331h640" />
          <path
            fill="#da0000"
            transform="translate(137 61) scale(.715)"
            d="M339.1 189.3h-33.4c.2 3.7.4 7.4.4 11.1 0 24.8-6.2 48.8-17 66-3.3 5.2-9 12.6-16.4 17.6v-94.7h-33.4v94.8c-7.5-5-13-12.4-16.4-17.7-10.8-17-17-41-17-65.9 0-3.7.2-7.4.4-11H173a190 190 0 0 0-.4 11c0 68.7 36.7 122.5 83.5 122.5s83.5-53.8 83.5-122.5c0-3.7-.1-7.4-.4-11z"
          />
        </symbol>

        <symbol id="flag-sa" viewBox="0 0 640 480">
          <path fill="#006c35" d="M0 0h640v480H0z" />
          <g fill="#fff" transform="translate(80 -35) scale(.9375)">
            <path d="M336 356v16H128l24 24h184v16h16v-16h32v-24h-32v-16z" />
            <path d="M131.4 174v41.4h-15.8v-26.7H97.8q-6.3 0-10.8 2.3a15 15 0 0 0-6.7 6.4 22 22 0 0 0-2.3 10.5q0 6 2.3 10.3 2.3 4 6.7 6 4.5 2.1 10.8 2.1H173V174h-13v41.4h-15.8V174zm52.9 0v52.3h12.8V174zm55.3 0v41.4h-11v-31h-12.8v31h-9.3v10.9h45.9V174zm24.3 0v52.3h12.8V174zm77.8 0v41.4H326v-26.7h-17.8q-6.3 0-10.8 2.3a15 15 0 0 0-6.7 6.4 22 22 0 0 0-2.3 10.5q0 6 2.3 10.3 2.3 4 6.7 6 4.5 2.1 10.8 2.1h46.5V174zm24.2 0v52.3h12.8V174zm55.3 0v41.4h-11v-31h-12.8v31h-9.3v10.9h46V174ZM97.8 199.6h5v15.8h-5q-2.4 0-4-.4-1.5-.5-2.2-2a13 13 0 0 1-.8-5.1q0-3.7.8-5.4 1-1.8 2.5-2.3 1.5-.6 3.7-.6m210.3 0h5v15.8h-5q-2.4 0-4-.4-1.5-.5-2.2-2a13 13 0 0 1-.8-5.1q0-3.7.8-5.4 1-1.8 2.5-2.3 1.6-.6 3.7-.6M114.8 247v28.5h-10.9V257H91.6q-4.4 0-7.4 1.6-3 1.4-4.6 4.4t-1.6 7.2q0 4.3 1.6 7 1.5 2.9 4.6 4.3t7.4 1.4h51.7v-36h-8.8v28.5h-10.9V247Zm36.3 0v36h8.8v-36Zm39.7 0v35.8q0 1.5-.6 2.7t-2 2q-1.5.6-4 .7t-4.2-.7-2.4-2q-.9-1.3-.9-3.1l.2-2.8 1.5-10.8-8.7-1.1-1.2 8.4-.6 6.4q0 3.7 2 6.7a14 14 0 0 0 5.9 4.8q3.6 1.7 8.3 1.7 4.5 0 8-1.6 3.6-1.6 5.5-4.6 2-2.8 2-6.7V247Zm159.5 10a36 36 0 0 0-10 1.4 40 40 0 0 0-1.3 7.4 57 57 0 0 0 0 9.6h-11v-2a20 20 0 0 0-1.9-9.2q-1.8-3.6-5.4-5.3a20 20 0 0 0-8.7-1.8h-4.2v7.5h4.2q2.7 0 4.3.8 1.5.7 2.2 2.6.6 1.8.7 5.4v2h-12.7v7.6H434v-12.8q0-5-1.6-7.8-1.5-3-4.7-4.1-3.2-1.4-8-1.3a36 36 0 0 0-10 1.4 40 40 0 0 0-1.4 7.4 57 57 0 0 0 0 9.6h-10.9v-4.8q0-4.2-2-7.2t-5.5-4.6a18 18 0 0 0-7.9-1.7q-2.1 0-4.2.4l-4.3.8.7 7a48 48 0 0 1 6.7-.6q4 0 6 1.5 1.7 1.5 1.7 4.4v4.9h-23.9v-5.3q0-5-1.6-7.8-1.6-3-4.8-4.1-3-1.4-8-1.3m-131.7.1q-4.3 0-7.4 1.6-3 1.4-4.6 4.4t-1.6 7.2q0 4.3 1.6 7 1.6 2.9 4.6 4.3t7.4 1.4h3.5v1.6q0 2.3-1.5 3.4-1.4 1.2-4.7 1.2l-3-.2q-1.8 0-4.3-.4l-1.2 7a59 59 0 0 0 8.5 1q4.5 0 7.8-1.4 3.4-1.5 5.3-4.2a11 11 0 0 0 1.9-6.4V283h22.9a15 15 0 0 0 7.9-2q1 .6 2.2 1 2.3 1 4.7 1h13.9v-14l-.3-3.3-1.3-8.6-8.7 1.3a118 118 0 0 1 1.4 10.5v6.6h-5l-1.9-.4-.9-.5q.7-2.7.7-6.2v-8.6h-8.8v8.6q0 3-.4 4.6-.3 1.5-1 2a5 5 0 0 1-2.5.5h-3v-13h-9v13H231V257zm73.8 0v26.6q0 2.7-1 4-1 1.5-2.8 1.5h-2.8l-.2 7.3 3.1.2q3.8 0 6.6-1.7t4.3-4.6 1.6-6.7V257zm58 7.4q2.1 0 3.3.5t1.7 1.7q.4 1.3.4 3.4v5.4h-8a71 71 0 0 1 0-8.6l.2-2.3zm69.3 0q2.2 0 3.4.5t1.6 1.7q.5 1.3.5 3.4v5.4h-8a71 71 0 0 1-.1-8.6l.2-2.3zm-328.1.1H95v10.9h-3.4q-1.7 0-2.7-.3-1-.4-1.6-1.4a9 9 0 0 1-.5-3.5q0-2.6.6-3.7A3 3 0 0 1 89 265a8 8 0 0 1 2.5-.4m127 0h3.5v10.9h-3.5q-1.6 0-2.7-.3-1-.4-1.6-1.4a9 9 0 0 1-.5-3.5q0-2.6.6-3.7a3 3 0 0 1 1.7-1.6 8 8 0 0 1 2.5-.4" />
          </g>
        </symbol>

        <symbol id="flag-es" viewBox="0 0 640 480">
          <path fill="#c60b1e" d="M0 0h640v120H0zM0 360h640v120H0z" />
          <path fill="#ffc400" d="M0 120h640v240H0z" />
          <g transform="translate(53 17) scale(.9)">
            <path
              fill="#eee"
              d="M196 168q-11 1-15 11l-5-1q-15 1-16 16c-1 15 7 16 16 16q11 0 15-11a16 16 0 0 0 17-4 16 16 0 0 0 17 4 16 16 0 1 0 10-20 16 16 0 0 0-27-5q-4-6-12-6m0 8q8 1 8 8 0 8-8 8-7 0-8-8 1-7 8-8m24 0q8 1 8 8 0 8-8 8-7 0-8-8 1-7 8-8m-44 10 4 1 4 8q-1 7-8 7-9 0-8-8 1-7 8-8m64 0q8 1 8 8 0 8-8 8-7 0-8-7l4-8zm-112 38v80h16v-80zm80 0v40c-26 0-48 14-48 32s22 32 48 32 48-14 48-32v-72zm64 0v80h16v-80z"
            />
            <path fill="#ff9811" d="M200 160h16v32h-16z" />
            <path
              fill="#d80027"
              d="M208 184c-22 0-40 11-40 24l8 8h64l8-8c0-13-18-24-40-24m-72 8a8 8 0 0 0-8 8v8a8 8 0 1 0 16 0v-8a8 8 0 0 0-8-8m144 0a8 8 0 0 0-8 8v8a8 8 0 1 0 16 0v-8a8 8 0 0 0-8-8m-120 32v24h-38a4 4 0 0 0-4 4 4 4 0 0 0 4 4h38v40a24 24 0 0 0 24 24 24 24 0 0 0 24-24 24 24 0 0 0 24 24 24 24 0 0 0 24-24v-24h-48v-48zm72 8a10 10 0 0 0-10 10v12a10 10 0 1 0 20 0v-12a10 10 0 0 0-10-10m24 16v8h38a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-134 24a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4zm144 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4h28a4 4 0 0 0 4-4 4 4 0 0 0-4-4z"
            />
            <path
              fill="#ffda44"
              d="M186 196a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6m22 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6m22 0a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6"
            />
            <path
              fill="#ff9811"
              d="M128 208a8 8 0 1 0 0 16h16a8 8 0 1 0 0-16zm144 0a8 8 0 1 0 0 16h16a8 8 0 1 0 0-16zm-96 8v8h64v-8zm-8 16v8h8v16h-8v8h32v-8h-8v-16h8v-8zm-8 40v24q1 12 9 19v-43zm19 0v47h10v-47zm20 0v43q9-7 9-19v-24zm-71 32a8 8 0 1 0 0 16h16a8 8 0 1 0 0-16zm144 0a8 8 0 1 0 0 16h16a8 8 0 1 0 0-16z"
            />
            <path
              fill="#338af3"
              d="M208 256a16 16 0 0 0-16 16 16 16 0 0 0 16 16 16 16 0 0 0 16-16 16 16 0 0 0-16-16m-80 64a8 8 0 1 0 0 16h16a8 8 0 1 0 0-16zm144 0a8 8 0 1 0 0 16h16a8 8 0 1 0 0-16z"
            />
          </g>
        </symbol>

        <symbol id="flag-br" viewBox="0 0 640 480">
          <path fill="#009c3b" d="M0 0h640v480H0z" />
          <path fill="#ffdf00" d="M54 240 320 58l266 182-266 182z" />
          <clipPath id="flag-br-globe">
            <circle cx="320" cy="240" r="120" />
          </clipPath>
          <circle cx="320" cy="240" r="120" fill="#002776" />
          <circle
            cx="440"
            cy="610"
            r="394"
            fill="none"
            stroke="#fff"
            strokeWidth="22"
            clipPath="url(#flag-br-globe)"
          />
        </symbol>

        <symbol id="flag-in" viewBox="0 0 640 480">
          <path fill="#f93" d="M0 0h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#128807" d="M0 320h640v160H0z" />
          <g transform="matrix(3.2 0 0 3.2 320 240)">
            <circle r="20" fill="#008" />
            <circle r="17.5" fill="#fff" />
            <circle r="3.5" fill="#008" />
            <g id="flag-in-d">
              <g id="flag-in-c">
                <g id="flag-in-b">
                  <g id="flag-in-a" fill="#008">
                    <circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
                    <path d="M0 17.5.6 7 0 2l-.6 5z" />
                  </g>
                  <use href="#flag-in-a" transform="rotate(15)" />
                </g>
                <use href="#flag-in-b" transform="rotate(30)" />
              </g>
              <use href="#flag-in-c" transform="rotate(60)" />
            </g>
            <use href="#flag-in-d" transform="rotate(120)" />
            <use href="#flag-in-d" transform="rotate(-120)" />
          </g>
        </symbol>

        <symbol id="flag-cn" viewBox="0 0 640 480">
          <defs>
            <path id="flag-cn-star" fill="#ff0" d="M-.6.8 0-1 .6.8-1-.3h2z" />
          </defs>
          <path fill="#ee1c25" d="M0 0h640v480H0z" />
          <use href="#flag-cn-star" transform="matrix(71.9991 0 0 72 120 120)" />
          <use
            href="#flag-cn-star"
            transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
          />
          <use
            href="#flag-cn-star"
            transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
          />
          <use href="#flag-cn-star" transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)" />
          <use
            href="#flag-cn-star"
            transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
          />
        </symbol>

        <symbol id="flag-ru" viewBox="0 0 640 480">
          <path fill="#fff" d="M0 0h640v160H0z" />
          <path fill="#0039a6" d="M0 160h640v160H0z" />
          <path fill="#d52b1e" d="M0 320h640v160H0z" />
        </symbol>

        <symbol id="flag-fr" viewBox="0 0 640 480">
          <path fill="#000091" d="M0 0h213.3v480H0z" />
          <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
          <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
        </symbol>

        <symbol id="flag-tr" viewBox="0 0 640 480">
          <path fill="#e30a17" d="M0 0h640v480H0z" />
          <path
            fill="#fff"
            d="M407 247.5c0 66.2-54.6 119.9-122 119.9s-122-53.7-122-120 54.6-119.8 122-119.8 122 53.7 122 119.9"
          />
          <path
            fill="#e30a17"
            d="M413 247.5c0 53-43.6 95.9-97.5 95.9s-97.6-43-97.6-96 43.7-95.8 97.6-95.8 97.6 42.9 97.6 95.9z"
          />
          <path
            fill="#fff"
            d="m430.7 191.5-1 44.3-41.3 11.2 40.8 14.5-1 40.7 26.5-31.8 40.2 14-23.2-34.1 28.3-33.9-43.5 12-25.8-37z"
          />
        </symbol>
      </defs>
    </svg>
  )
}

/** One flag from the sprite. Purely decorative: the language name is the label. */
export function Flag({ code }: { code: FlagCode }) {
  return (
    <svg className="flag" viewBox="0 0 640 480" aria-hidden="true" focusable="false">
      <use href={`#flag-${code}`} />
    </svg>
  )
}
