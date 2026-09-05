import type { Content } from './types'

export const es: Content = {
  meta: {
    title: 'Nura Wallet — tus claves nunca salen del dispositivo',
    description:
      'Una billetera de Ethereum con autocustodia para Windows, macOS, Linux, Android e iOS. Tu frase de recuperación se cifra con AES-GCM y nunca sale del dispositivo.',
  },

  header: { nav: 'Principal', download: 'Descargar', language: 'Idioma', licensed: 'Licencia MIT' },

  nav: [
    { label: 'El límite', href: '#boundary' },
    { label: 'El sello', href: '#seal' },
    { label: 'Código fuente', href: '#source' },
  ],

  hero: {
    eyebrow: 'Autocustodia · Ethereum · Escritorio + móvil',
    headline: 'Tus claves nunca salen del dispositivo.',
    body: 'Nura es una billetera de Ethereum con autocustodia. Tu frase de recuperación se cifra con AES-GCM antes de guardarse, y la contraseña que la desbloquea se procesa con el hash Argon2id.',
    note: 'Licencia MIT. Sin cuenta, sin custodia, sin ningún servidor que guarde tu frase.',
    download: 'Descargar',
    source: 'Leer el código',
  },

  device: {
    label: 'En este dispositivo',
    sealLabel: 'Frase de recuperación',
    sealState: 'Sellada',
  },

  boundary: {
    eyebrow: 'El límite',
    headline: 'Qué se queda aquí. Qué sale.',
    body: 'La autocustodia es una línea trazada en un lugar concreto. Aquí es donde Nura la traza.',
    tag: 'la línea',
    stays: {
      title: 'Nunca sale del dispositivo',
      items: [
        { term: 'Frase de recuperación', detail: 'Cifrada con AES-GCM antes de guardarse.' },
        {
          term: 'Contraseña',
          detail: 'Procesada con Argon2id: lenta y exigente en memoria por diseño.',
        },
        { term: 'Claves privadas', detail: 'Derivadas y guardadas localmente.' },
        { term: 'Firma', detail: 'Las transacciones se firman en el dispositivo.' },
      ],
    },
    leaves: {
      title: 'Va a la red',
      items: [
        { term: 'Transacciones firmadas', detail: 'Se emiten después de firmarse, nunca antes.' },
        {
          term: 'Consultas de saldo',
          detail: 'Lecturas públicas del estado público de la cadena.',
        },
        { term: 'Solicitudes de dApps', detail: 'Lo que pida el sitio que hayas abierto.' },
      ],
    },
  },

  seal: {
    eyebrow: 'El sello',
    headline: 'Tres pasos, y queda sellada.',
    body: 'El orden importa, así que conviene ser precisos.',
    steps: [
      {
        title: 'Eliges una contraseña',
        detail:
          'Se procesa con Argon2id, una función diseñada para ser lenta y exigente en memoria, lo que hace que adivinarla sea costoso en lugar de instantáneo.',
      },
      {
        title: 'La frase se cifra',
        detail:
          'Tu frase de recuperación se cifra con AES-GCM antes de guardarse. Lo que queda en el disco es texto cifrado.',
      },
      {
        title: 'El dispositivo guarda la única copia',
        detail:
          'No hay ningún servidor con una segunda copia. Eso corta en ambos sentidos: nadie puede quitarte la billetera, y nadie puede devolvértela.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'Día a día',
    headline: 'Sigue siendo solo una billetera.',
    items: [
      { title: 'Enviar y recibir', detail: 'Monedas nativas y tokens ERC-20.' },
      { title: 'Cambiar de red', detail: 'Pasa de una red a otra sin salir de la app.' },
      {
        title: 'Explorar dApps',
        detail: 'Abre dApps desde dentro de la app, con la billetera ya conectada.',
      },
    ],
  },

  platforms: {
    eyebrow: 'Versiones',
    headline: 'Escritorio y móvil.',
    desktop: 'Versión de escritorio',
    mobile: 'Versión móvil',
    unavailable: 'Aún no disponible',
    downloadFor: (os) => `Descargar para ${os}`,
  },

  source: {
    eyebrow: 'Código fuente',
    headline: 'Licencia MIT. Lee el código.',
    body: 'La ruta de cifrado está a la vista. No tienes que confiar en nada de esto: puedes ir y comprobarlo.',
    cta: 'Ver el repositorio',
  },

  footer: {
    tagline:
      'Nura Wallet — billetera de Ethereum con autocustodia para Windows, macOS, Linux, Android e iOS.',
    repository: 'Repositorio',
    license: 'Licencia MIT',
    languages: 'Idiomas',
    social: 'Comunidad',
  },

  blog: {
    nav: 'Notas',
    title: 'Notas — Nura Wallet',
    description:
      'Explicaciones breves y claras sobre autocustodia, frase de recuperación, firma, gas y tokens, de quienes desarrollan Nura Wallet.',
    eyebrow: 'Notas',
    headline: 'Cómo funciona de verdad lo que llevas en el bolsillo.',
    intro:
      'La autocustodia te pide guardar algo valioso. Estas son las piezas que conviene entender antes — en lenguaje claro, una idea cada vez.',
    readMore: 'Leer',
    readingTime: (minutes) => `${minutes} min de lectura`,
    published: 'Publicado',
    backToBlog: 'Todas las notas',
    more: 'Más notas',
  },
}
