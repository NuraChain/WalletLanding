import type { Content } from './types'

export const tr: Content = {
  meta: {
    title: 'Nura Wallet — anahtarlarınız cihazdan asla çıkmaz',
    description:
      'Windows, macOS, Linux, Android ve iOS için gözetimsiz (self-custodial) bir Ethereum cüzdanı. Kurtarma ifadeniz AES-GCM ile şifrelenir ve cihazdan asla çıkmaz.',
  },

  header: { nav: 'Ana', download: 'İndir', language: 'Dil', licensed: 'MIT lisanslı' },

  nav: [
    { label: 'Sınır', href: '#boundary' },
    { label: 'Mühür', href: '#seal' },
    { label: 'Kaynak', href: '#source' },
  ],

  hero: {
    eyebrow: 'Gözetimsiz · Ethereum · Masaüstü + mobil',
    headline: 'Anahtarlarınız cihazdan asla çıkmaz.',
    body: 'Nura, gözetimsiz bir Ethereum cüzdanıdır. Kurtarma ifadeniz saklanmadan önce AES-GCM ile şifrelenir; onu açan parola ise Argon2id ile hashlenir.',
    note: 'MIT lisanslı. Hesap yok, emanet yok, ifadenizi tutan bir sunucu yok.',
    download: 'İndir',
    source: 'Kodu okuyun',
  },

  device: { label: 'Bu cihazda', sealLabel: 'Kurtarma ifadesi', sealState: 'Mühürlü' },

  boundary: {
    eyebrow: 'Sınır',
    headline: 'Ne burada kalır. Ne dışarı çıkar.',
    body: 'Kendi anahtarını saklamak, belirli bir yere çizilen bir çizgidir. Nura o çizgiyi burada çeker.',
    tag: 'çizgi',
    stays: {
      title: 'Cihazdan asla çıkmaz',
      items: [
        { term: 'Kurtarma ifadesi', detail: 'Saklanmadan önce AES-GCM ile şifrelenir.' },
        { term: 'Parola', detail: 'Argon2id ile hashlenir — bilerek yavaş ve bellek yoğun.' },
        { term: 'Özel anahtarlar', detail: 'Yerel olarak türetilir ve tutulur.' },
        { term: 'İmzalama', detail: 'İşlemler cihaz üzerinde imzalanır.' },
      ],
    },
    leaves: {
      title: 'Ağa gider',
      items: [
        {
          term: 'İmzalanmış işlemler',
          detail: 'İmzalandıktan sonra yayınlanır, asla öncesinde değil.',
        },
        {
          term: 'Bakiye sorguları',
          detail: 'Herkese açık zincir durumunun herkese açık okumaları.',
        },
        { term: 'dApp istekleri', detail: 'Açtığınız sitenin istediği her şey.' },
      ],
    },
  },

  seal: {
    eyebrow: 'Mühür',
    headline: 'Üç adım, sonra mühürlenir.',
    body: 'Sıra önemli, o yüzden bunu net anlatmaya değer.',
    steps: [
      {
        title: 'Bir parola seçersiniz',
        detail:
          'Argon2id ile hashlenir; bu fonksiyon bilerek yavaş ve bellek yoğun tasarlanmıştır, böylece tahmin etmek anlık değil, pahalı olur.',
      },
      {
        title: 'İfade şifrelenir',
        detail:
          'Kurtarma ifadeniz saklanmadan önce AES-GCM ile şifrelenir. Diskte duran şey şifreli metindir.',
      },
      {
        title: 'Tek kopya cihazda durur',
        detail:
          'İkinci bir kopyayı tutan sunucu yoktur. Bu iki yönlü işler: kimse cüzdanı sizden alamaz, kimse de size geri veremez.',
      },
    ],
  },

  capabilities: {
    eyebrow: 'Günlük kullanım',
    headline: 'Sonuçta yine sadece bir cüzdan.',
    items: [
      { title: 'Gönder ve al', detail: 'Yerel coinler ve ERC-20 tokenlar.' },
      { title: 'Ağ değiştir', detail: 'Uygulamadan çıkmadan ağlar arasında geçiş yapın.' },
      {
        title: 'dApp’lerde gezin',
        detail: 'dApp’leri uygulamanın içinden açın; cüzdan zaten bağlı.',
      },
    ],
  },

  platforms: {
    eyebrow: 'Sürümler',
    headline: 'Masaüstü ve mobil.',
    desktop: 'Masaüstü sürümü',
    mobile: 'Mobil sürümü',
    unavailable: 'Henüz mevcut değil',
    downloadFor: (os) => `${os} için indir`,
  },

  source: {
    eyebrow: 'Kaynak',
    headline: 'MIT lisanslı. Kodu okuyun.',
    body: 'Şifreleme yolu açıkta. Bunların hiçbirini güvene dayanarak kabul etmek zorunda değilsiniz — gidip kendiniz kontrol edebilirsiniz.',
    cta: 'Depoyu görüntüle',
  },

  footer: {
    tagline:
      'Nura Wallet — Windows, macOS, Linux, Android ve iOS için gözetimsiz Ethereum cüzdanı.',
    repository: 'Depo',
    license: 'MIT Lisansı',
    languages: 'Diller',
    social: 'Topluluk',
  },

  blog: {
    nav: 'Notlar',
    title: 'Notlar — Nura Wallet',
    description:
      'Kendi saklamanız, kurtarma ifadesi, imzalama, gas ve tokenler üzerine kısa ve açık anlatımlar — Nura Wallet’ı geliştirenlerden.',
    eyebrow: 'Notlar',
    headline: 'Cebinizdeki şey gerçekte nasıl çalışıyor.',
    intro:
      'Kendi saklamanız, değerli bir şeyi kendinizin tutmasını ister. Bunlar, ondan önce anlaşılmaya değer parçalar — sade bir dille, her seferinde tek bir fikir.',
    readMore: 'Oku',
    readingTime: (minutes) => `${minutes} dk okuma`,
    published: 'Yayımlandı',
    backToBlog: 'Tüm notlar',
    more: 'Diğer notlar',
  },
}
