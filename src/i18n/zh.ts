import type { Content } from './types'

export const zh: Content = {
  meta: {
    title: 'Nura 钱包 — 您的密钥永不离开设备',
    description:
      '一款自托管以太坊钱包，支持 Windows、macOS、Linux、Android 和 iOS。您的助记词使用 AES-GCM 加密，永不离开设备。',
  },

  header: { nav: '主导航', download: '下载', language: '语言', licensed: 'MIT 许可' },

  nav: [
    { label: '边界', href: '#boundary' },
    { label: '封印', href: '#seal' },
    { label: '源代码', href: '#source' },
  ],

  hero: {
    eyebrow: '自托管 · 以太坊 · 桌面 + 移动',
    headline: '您的密钥永不离开设备。',
    body: 'Nura 是一款自托管以太坊钱包。您的助记词在存储前先用 AES-GCM 加密，而解锁它的密码短语则经过 Argon2id 哈希处理。',
    note: 'MIT 许可。无需账户，不托管，没有任何服务器保存您的助记词。',
    download: '下载',
    source: '阅读代码',
  },

  device: { label: '在此设备上', sealLabel: '助记词', sealState: '已封存' },

  boundary: {
    eyebrow: '边界',
    headline: '什么留在这里，什么会出去。',
    body: '自托管就是在一个明确的位置划一条线。Nura 把线划在这里。',
    tag: '这条线',
    stays: {
      title: '永不离开设备',
      items: [
        { term: '助记词', detail: '存储前先用 AES-GCM 加密。' },
        { term: '密码短语', detail: '经 Argon2id 哈希——刻意设计得缓慢且占用大量内存。' },
        { term: '私钥', detail: '在本地派生并保存。' },
        { term: '签名', detail: '交易在设备上完成签名。' },
      ],
    },
    leaves: {
      title: '发送到网络',
      items: [
        { term: '已签名的交易', detail: '签名后才广播，绝不在此之前。' },
        { term: '余额查询', detail: '对公开链上状态的公开读取。' },
        { term: 'dApp 请求', detail: '您打开的网站所请求的内容。' },
      ],
    },
  },

  seal: {
    eyebrow: '封印',
    headline: '三步之后，即被封存。',
    body: '顺序很重要，所以值得说清楚。',
    steps: [
      {
        title: '您选择一个密码短语',
        detail:
          '它经 Argon2id 哈希处理。这个函数被刻意设计得缓慢且占用大量内存，让猜测它的代价变得高昂，而非瞬间完成。',
      },
      {
        title: '助记词被加密',
        detail: '您的助记词在存储前先用 AES-GCM 加密。留在磁盘上的是密文。',
      },
      {
        title: '设备持有唯一的副本',
        detail:
          '没有任何服务器保存第二份副本。这是一把双刃剑：没有人能从您手中夺走钱包，也没有人能把它还给您。',
      },
    ],
  },

  capabilities: {
    eyebrow: '日常使用',
    headline: '它终究只是一个钱包。',
    items: [
      { title: '发送与接收', detail: '原生代币与 ERC-20 代币。' },
      { title: '切换网络', detail: '无需离开应用即可在网络之间切换。' },
      { title: '浏览 dApp', detail: '在应用内直接打开 dApp，钱包已预先连接。' },
    ],
  },

  platforms: {
    eyebrow: '版本',
    headline: '桌面与移动。',
    desktop: '桌面版',
    mobile: '移动版',
    unavailable: '暂未提供',
    downloadFor: (os) => `下载 ${os} 版`,
  },

  source: {
    eyebrow: '源代码',
    headline: 'MIT 许可。阅读代码。',
    body: '加密路径完全公开。这一切您都不必凭信任接受——可以亲自去查证。',
    cta: '查看代码仓库',
  },

  footer: {
    tagline: 'Nura 钱包 — 支持 Windows、macOS、Linux、Android 和 iOS 的自托管以太坊钱包。',
    repository: '代码仓库',
    license: 'MIT 许可证',
    languages: '语言',
  },

  blog: {
    nav: '笔记',
    title: '笔记 — Nura Wallet',
    description: '关于自我保管、助记词、签名、Gas 与代币的简短说明，来自 Nura Wallet 的开发者。',
    eyebrow: '笔记',
    headline: '口袋里的这个东西，究竟是怎么运作的。',
    intro:
      '自我保管要求你亲自保管贵重的东西。这些是在那之前值得先弄清楚的部分 — 用平实的语言，一次讲一件事。',
    readMore: '阅读',
    readingTime: (minutes) => `阅读约 ${minutes} 分钟`,
    published: '发布于',
    backToBlog: '全部笔记',
    more: '更多笔记',
  },
}
