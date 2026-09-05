import type { Content } from './types'

export const fr: Content = {
  meta: {
    title: 'Nura Wallet — vos clés ne quittent jamais l’appareil',
    description:
      'Un portefeuille Ethereum non custodial pour Windows, macOS, Linux, Android et iOS. Votre phrase de récupération est chiffrée avec AES-GCM et ne quitte jamais l’appareil.',
  },

  header: {
    nav: 'Principale',
    download: 'Télécharger',
    language: 'Langue',
    licensed: 'Sous licence MIT',
  },

  nav: [
    { label: 'La frontière', href: '#boundary' },
    { label: 'Le sceau', href: '#seal' },
    { label: 'Code source', href: '#source' },
  ],

  hero: {
    eyebrow: 'Non custodial · Ethereum · Bureau + mobile',
    headline: 'Vos clés ne quittent jamais l’appareil.',
    body: 'Nura est un portefeuille Ethereum non custodial. Votre phrase de récupération est chiffrée avec AES-GCM avant d’être stockée, et la phrase secrète qui la déverrouille est hachée avec Argon2id.',
    note: 'Sous licence MIT. Pas de compte, pas de garde, aucun serveur ne détient votre phrase.',
    download: 'Télécharger',
    source: 'Lire le code',
  },

  device: { label: 'Sur cet appareil', sealLabel: 'Phrase de récupération', sealState: 'Scellée' },

  boundary: {
    eyebrow: 'La frontière',
    headline: 'Ce qui reste ici. Ce qui sort.',
    body: 'L’auto-conservation, c’est une ligne tracée à un endroit précis. Voici où Nura la trace.',
    tag: 'la ligne',
    stays: {
      title: 'Ne quitte jamais l’appareil',
      items: [
        { term: 'Phrase de récupération', detail: 'Chiffrée avec AES-GCM avant d’être stockée.' },
        {
          term: 'Phrase secrète',
          detail: 'Hachée avec Argon2id — lente et gourmande en mémoire, à dessein.',
        },
        { term: 'Clés privées', detail: 'Dérivées et conservées localement.' },
        { term: 'Signature', detail: 'Les transactions sont signées sur l’appareil.' },
      ],
    },
    leaves: {
      title: 'Part vers le réseau',
      items: [
        { term: 'Transactions signées', detail: 'Diffusées après signature, jamais avant.' },
        { term: 'Requêtes de solde', detail: 'Lectures publiques d’un état de chaîne public.' },
        { term: 'Requêtes des dApps', detail: 'Ce que demande le site que vous avez ouvert.' },
      ],
    },
  },

  seal: {
    eyebrow: 'Le sceau',
    headline: 'Trois étapes, puis c’est scellé.',
    body: 'L’ordre compte, alors autant être précis.',
    steps: [
      {
        title: 'Vous choisissez une phrase secrète',
        detail:
          'Elle est hachée avec Argon2id, une fonction conçue pour être lente et gourmande en mémoire, ce qui rend toute tentative de la deviner coûteuse plutôt qu’instantanée.',
      },
      {
        title: 'La phrase est chiffrée',
        detail:
          'Votre phrase de récupération est chiffrée avec AES-GCM avant d’être stockée. Ce qui repose sur le disque est du texte chiffré.',
      },
      {
        title: 'L’appareil détient la seule copie',
        detail:
          'Aucun serveur n’en possède une seconde copie. Cela vaut dans les deux sens : personne ne peut vous prendre le portefeuille, et personne ne peut vous le rendre.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'Au quotidien',
    headline: 'Ça reste un simple portefeuille.',
    items: [
      { title: 'Envoyer et recevoir', detail: 'Monnaies natives et jetons ERC-20.' },
      {
        title: 'Changer de réseau',
        detail: 'Passez d’un réseau à l’autre sans quitter l’application.',
      },
      {
        title: 'Parcourir les dApps',
        detail: 'Ouvrez des dApps depuis l’application, portefeuille déjà connecté.',
      },
    ],
  },

  platforms: {
    eyebrow: 'Versions',
    headline: 'Bureau et mobile.',
    desktop: 'Version bureau',
    mobile: 'Version mobile',
    unavailable: 'Pas encore disponible',
    downloadFor: (os) => `Télécharger pour ${os}`,
  },

  source: {
    eyebrow: 'Code source',
    headline: 'Sous licence MIT. Lisez le code.',
    body: 'Le chemin de chiffrement est à découvert. Rien de tout cela ne vous est demandé sur parole : vous pouvez aller vérifier.',
    cta: 'Voir le dépôt',
  },

  footer: {
    tagline:
      'Nura Wallet — portefeuille Ethereum non custodial pour Windows, macOS, Linux, Android et iOS.',
    repository: 'Dépôt',
    license: 'Licence MIT',
    languages: 'Langues',
    social: 'Communauté',
  },

  blog: {
    nav: 'Notes',
    title: 'Notes — Nura Wallet',
    description:
      'Explications courtes et claires sur l’auto-conservation, la phrase de récupération, la signature, le gas et les jetons, par ceux qui développent Nura Wallet.',
    eyebrow: 'Notes',
    headline: 'Comment fonctionne vraiment ce que vous avez en poche.',
    intro:
      'L’auto-conservation vous demande de garder vous-même quelque chose de précieux. Voici ce qu’il vaut mieux comprendre avant — en langage clair, une idée à la fois.',
    readMore: 'Lire',
    readingTime: (minutes) => `${minutes} min de lecture`,
    published: 'Publié le',
    backToBlog: 'Toutes les notes',
    more: 'Autres notes',
  },
}
