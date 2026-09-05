import type { Content } from './types'

/**
 * English copy — the reference the other nine languages are translated from.
 *
 * Every product claim below traces back to the Nura Wallet README:
 * self-custodial Ethereum wallet, recovery phrase encrypted with AES-GCM
 * before it is stored, passphrase hashed with Argon2id, send/receive native
 * coins and ERC-20 tokens, network switching, in-app dApp browser, MIT
 * licensed. Nothing here goes further than that.
 *
 * The platform list (Windows, macOS, Linux, Android, iOS) is the owner's; the
 * README at the time of writing names only Windows and Android.
 * TODO(content): bring the README and this list into agreement before launch.
 */
export const en: Content = {
  meta: {
    title: 'Nura Wallet — your keys never leave the device',
    description:
      'A self-custodial Ethereum wallet for Windows, macOS, Linux, Android and iOS. Your recovery phrase is encrypted with AES-GCM and never leaves the device.',
  },

  header: { nav: 'Main', download: 'Download', language: 'Language', licensed: 'MIT licensed' },

  nav: [
    { label: 'The boundary', href: '#boundary' },
    { label: 'The seal', href: '#seal' },
    { label: 'Source', href: '#source' },
  ],

  hero: {
    eyebrow: 'Self-custodial · Ethereum · Desktop + mobile',
    headline: 'Your keys never leave the device.',
    body: 'Nura is a self-custodial Ethereum wallet. Your recovery phrase is encrypted with AES-GCM before it is stored, and the passphrase that unlocks it is hashed with Argon2id.',
    note: 'MIT licensed. No account, no custody, no server holding your phrase.',
    download: 'Download',
    source: 'Read the code',
  },

  device: { label: 'On this device', sealLabel: 'Recovery phrase', sealState: 'Sealed' },

  boundary: {
    eyebrow: 'The boundary',
    headline: 'What stays here. What goes out.',
    body: 'Self-custody is a line drawn in one specific place. This is where Nura draws it.',
    tag: 'the line',
    stays: {
      title: 'Never leaves the device',
      items: [
        { term: 'Recovery phrase', detail: 'Encrypted with AES-GCM before it is stored.' },
        { term: 'Passphrase', detail: 'Hashed with Argon2id — slow and memory-hard by design.' },
        { term: 'Private keys', detail: 'Derived and held locally.' },
        { term: 'Signing', detail: 'Transactions are signed on the device.' },
      ],
    },
    // TODO(content): confirm the outbound list against the implementation before launch.
    leaves: {
      title: 'Goes to the network',
      items: [
        { term: 'Signed transactions', detail: 'Broadcast after they are signed, never before.' },
        { term: 'Balance queries', detail: 'Public reads of public chain state.' },
        { term: 'dApp requests', detail: 'Whatever the site you opened asks for.' },
      ],
    },
  },

  seal: {
    eyebrow: 'The seal',
    headline: 'Three steps, then it is sealed.',
    body: 'The order matters, so it is worth being precise about it.',
    steps: [
      {
        title: 'You choose a passphrase',
        detail:
          'It is hashed with Argon2id, a function built to be slow and memory-hard, which makes guessing it expensive rather than instant.',
      },
      {
        title: 'The phrase is encrypted',
        detail:
          'Your recovery phrase is encrypted with AES-GCM before it is stored. What sits on disk is ciphertext.',
      },
      {
        title: 'The device holds the only copy',
        detail:
          'There is no server with a second copy. That cuts both ways: nobody can take the wallet from you, and nobody can give it back.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'Day to day',
    headline: 'It is still just a wallet.',
    items: [
      { title: 'Send and receive', detail: 'Native coins and ERC-20 tokens.' },
      { title: 'Switch networks', detail: 'Move between networks without leaving the app.' },
      {
        title: 'Browse dApps',
        detail: 'Open dApps from inside the app, with the wallet already connected.',
      },
    ],
  },

  platforms: {
    eyebrow: 'Builds',
    headline: 'Desktop and mobile.',
    desktop: 'Desktop build',
    mobile: 'Mobile build',
    unavailable: 'Not available yet',
    downloadFor: (os) => `Download for ${os}`,
  },

  source: {
    eyebrow: 'Source',
    headline: 'MIT licensed. Read the code.',
    body: 'The encryption path is in the open. You do not have to take any of this on trust — you can go and check it.',
    cta: 'View the repository',
  },

  footer: {
    tagline:
      'Nura Wallet — self-custodial Ethereum wallet for Windows, macOS, Linux, Android and iOS.',
    repository: 'Repository',
    license: 'MIT License',
    languages: 'Languages',
    social: 'Community',
  },

  blog: {
    nav: 'Notes',
    title: 'Notes — Nura Wallet',
    description:
      'Short, plain explanations of self-custody, recovery phrases, signing, gas and tokens — from the people who build Nura Wallet.',
    eyebrow: 'Notes',
    headline: 'How the thing in your pocket actually works.',
    intro:
      'Self-custody asks you to hold something valuable. These are the pieces worth understanding before you do — written plainly, one idea at a time.',
    readMore: 'Read',
    readingTime: (minutes) => `${minutes} min read`,
    published: 'Published',
    backToBlog: 'All notes',
    more: 'More notes',
  },
}
