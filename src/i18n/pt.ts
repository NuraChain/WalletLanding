import type { Content } from './types'

export const pt: Content = {
  meta: {
    title: 'Nura Wallet — suas chaves nunca saem do dispositivo',
    description:
      'Uma carteira Ethereum de autocustódia para Windows, macOS, Linux, Android e iOS. Sua frase de recuperação é criptografada com AES-GCM e nunca sai do dispositivo.',
  },

  header: { nav: 'Principal', download: 'Baixar', language: 'Idioma', licensed: 'Licença MIT' },

  nav: [
    { label: 'O limite', href: '#boundary' },
    { label: 'O selo', href: '#seal' },
    { label: 'Código-fonte', href: '#source' },
  ],

  hero: {
    eyebrow: 'Autocustódia · Ethereum · Desktop + celular',
    headline: 'Suas chaves nunca saem do dispositivo.',
    body: 'A Nura é uma carteira Ethereum de autocustódia. Sua frase de recuperação é criptografada com AES-GCM antes de ser armazenada, e a senha que a desbloqueia passa pelo hash Argon2id.',
    note: 'Licença MIT. Sem conta, sem custódia, sem nenhum servidor guardando sua frase.',
    download: 'Baixar',
    source: 'Ler o código',
  },

  device: { label: 'Neste dispositivo', sealLabel: 'Frase de recuperação', sealState: 'Selada' },

  boundary: {
    eyebrow: 'O limite',
    headline: 'O que fica aqui. O que sai.',
    body: 'Autocustódia é uma linha traçada em um lugar específico. É aqui que a Nura a traça.',
    tag: 'a linha',
    stays: {
      title: 'Nunca sai do dispositivo',
      items: [
        {
          term: 'Frase de recuperação',
          detail: 'Criptografada com AES-GCM antes de ser armazenada.',
        },
        {
          term: 'Senha',
          detail: 'Processada com Argon2id: lenta e exigente em memória por projeto.',
        },
        { term: 'Chaves privadas', detail: 'Derivadas e mantidas localmente.' },
        { term: 'Assinatura', detail: 'As transações são assinadas no dispositivo.' },
      ],
    },
    leaves: {
      title: 'Vai para a rede',
      items: [
        { term: 'Transações assinadas', detail: 'Transmitidas depois de assinadas, nunca antes.' },
        { term: 'Consultas de saldo', detail: 'Leituras públicas do estado público da chain.' },
        { term: 'Solicitações de dApps', detail: 'O que o site que você abriu pedir.' },
      ],
    },
  },

  seal: {
    eyebrow: 'O selo',
    headline: 'Três passos, e está selada.',
    body: 'A ordem importa, então vale a pena ser preciso.',
    steps: [
      {
        title: 'Você escolhe uma senha',
        detail:
          'Ela passa pelo Argon2id, uma função feita para ser lenta e exigente em memória, o que torna adivinhá-la caro em vez de instantâneo.',
      },
      {
        title: 'A frase é criptografada',
        detail:
          'Sua frase de recuperação é criptografada com AES-GCM antes de ser armazenada. O que fica no disco é texto cifrado.',
      },
      {
        title: 'O dispositivo guarda a única cópia',
        detail:
          'Não há servidor com uma segunda cópia. Isso vale nos dois sentidos: ninguém pode tirar a carteira de você, e ninguém pode devolvê-la.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'No dia a dia',
    headline: 'Continua sendo só uma carteira.',
    items: [
      { title: 'Enviar e receber', detail: 'Moedas nativas e tokens ERC-20.' },
      { title: 'Trocar de rede', detail: 'Alterne entre redes sem sair do app.' },
      {
        title: 'Navegar em dApps',
        detail: 'Abra dApps de dentro do app, com a carteira já conectada.',
      },
    ],
  },

  platforms: {
    eyebrow: 'Versões',
    headline: 'Desktop e celular.',
    desktop: 'Versão para desktop',
    mobile: 'Versão para celular',
    unavailable: 'Ainda não disponível',
    downloadFor: (os) => `Baixar para ${os}`,
  },

  source: {
    eyebrow: 'Código-fonte',
    headline: 'Licença MIT. Leia o código.',
    body: 'O caminho da criptografia está aberto. Você não precisa confiar em nada disso: pode ir lá e conferir.',
    cta: 'Ver o repositório',
  },

  footer: {
    tagline:
      'Nura Wallet — carteira Ethereum de autocustódia para Windows, macOS, Linux, Android e iOS.',
    repository: 'Repositório',
    license: 'Licença MIT',
    languages: 'Idiomas',
  },

  blog: {
    nav: 'Notas',
    title: 'Notas — Nura Wallet',
    description:
      'Explicações curtas e diretas sobre autocustódia, frase de recuperação, assinatura, gás e tokens, de quem desenvolve a Nura Wallet.',
    eyebrow: 'Notas',
    headline: 'Como funciona de verdade o que está no seu bolso.',
    intro:
      'A autocustódia pede que você guarde algo valioso. Estas são as partes que vale a pena entender antes — em linguagem simples, uma ideia de cada vez.',
    readMore: 'Ler',
    readingTime: (minutes) => `${minutes} min de leitura`,
    published: 'Publicado',
    backToBlog: 'Todas as notas',
    more: 'Mais notas',
  },
}
