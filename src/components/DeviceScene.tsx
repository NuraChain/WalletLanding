import { useLocale } from '../i18n/context'

/**
 * The illustrative device: a graphite slab on one plane, the encrypted vault
 * behind it, and the seal boundary between them. Decorative - the claims it
 * pictures are stated as text in the sections below, so it is hidden from
 * assistive tech rather than read out as a fake balance.
 *
 * Fixed, not generated: a random blob would differ between the prerender and
 * hydration.
 */
const CIPHERTEXT = (
  'a3f19c7d40b8e25610cf94ab7732de885019bd4ff6a0c31e9d7248b5ce03fa61' +
  '7b2e05d9c4183af6602bd7e19c58043fae962137bd08c4e5719af362d0b845ce' +
  '10d873b4e29f051ca67be3d894207fc5183ae06b9d2f47c30ea51829bf6d3407' +
  '4f0c9a2718de53b6ca07f4319b8d05e26ab3417fd0c85e69217bafc304e5d8b1'
).repeat(3)

/** Illustrative figures. Not a real account; the same in every language. */
const FIGURES = {
  address: '0x71C7…B4f9',
  balance: '2.4718',
  unit: 'NURA',
  tokens: [
    { symbol: 'USDC', amount: '1,204.00' },
    { symbol: 'WNURA', amount: '0.8500' },
  ],
} as const

export function DeviceScene() {
  const { t } = useLocale()

  return (
    <div className="device-box drift" aria-hidden="true">
      <div className="plane plane-grid" />

      <div className="plane plane-core">{CIPHERTEXT}</div>

      <div className="plane plane-ring" />

      <div className="plane plane-slab">
        <div className="slab-face slab-face-bottom" />
        <div className="slab-face slab-face-right" />

        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[0.6rem] tracking-[0.18em] text-white/45 uppercase">
              {t.device.label}
            </span>
            <span className="size-1.5 rounded-full bg-seal" />
          </div>

          {/* A number with a unit is data, so it reads left-to-right on every page. */}
          <div>
            <p
              dir="ltr"
              className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {FIGURES.balance}
              <span className="ms-2 text-lg font-normal text-white/45">{FIGURES.unit}</span>
            </p>
            <p className="mt-1 font-mono text-[0.7rem] text-white/40">{FIGURES.address}</p>
          </div>

          <ul className="space-y-1.5 border-t border-white/10 pt-3 font-mono text-[0.7rem]">
            {FIGURES.tokens.map((token) => (
              <li key={token.symbol} className="flex justify-between">
                <span className="text-white/45">{token.symbol}</span>
                <span className="text-white/70">{token.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="plane plane-chip">
        <span className="size-1.5 shrink-0 rounded-full bg-seal" />
        <span className="text-ink-2">{t.device.sealLabel}</span>
        <span className="font-medium text-seal-ink">{t.device.sealState}</span>
      </div>
    </div>
  )
}
