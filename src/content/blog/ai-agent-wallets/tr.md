---
title: Yapay zekâ ajanı cüzdanları. Bot öderken kim imzalar?
description: Yapay zekâ ajanları için yapılmış cüzdanlar 2026'da geldi, onlara saldırmayı konu alan araştırmalar da. Yazılıma harcama yetkisi vermek ne demek ve nasıl sınırlanır.
date: 2026-10-05
tags: haberler, imzalama
---

Şubat 2026'da Coinbase, Agentic Wallets adını verdiği şeyi kullanıma sundu: insanların değil yapay zekâ ajanlarının işletmesi için tasarlanmış, oturum başına ve işlem başına harcama tavanları olan cüzdanlar. Bunlar x402 ile çalışır; bu protokol, bir yazılımın bir API çağrısının ya da bir web kaynağının ücretini isteğin bir parçası olarak ödemesini sağlar. Mayıs ayına gelindiğinde araştırmacılar saldırılar yayımlıyordu. Bir makale, "Five Attacks on x402 Agentic Payment Protocol" (Li, Wang ve Wang, 12 Mayıs 2026), "yetkilendirme, bağlama, yeniden oynatma koruması ve web katmanı işleyişindeki zayıflıkları" ortaya koyan beş pratik saldırıyı anlatıyor; saldırılar canlı uç noktalara karşı denenmiş, sonuçlar ödeme yapmadan hizmet almaktan hizmet vermeden ödeme almaya kadar uzanıyor.

Bu konu o kadar yeni ki kelimeler hâlâ yerine oturuyor. Altta yatan soru ise eski.

## Yapay zekâ ajanı cüzdanı nedir?

Yazılımın, her seferinde size sormadan kullanmasına izin verilen bir anahtar. Yeniliğin tamamı budur. Cüzdan her zaman bir anahtar ile onun neyi imzalayacağına karar veren bir insandan ibaretti. Burada kararı, birinin önceden belirlediği sınırlar içinde bir program veriyor.

## Bu neden riskli?

Kendi saklamanızdaki her güvence, isteği bir insanın okuduğunu varsayar. [Savunma, isteği okumaktır](/tr/blog/wallet-drainers/) — ajan ise okumaz, işler. Bir web sayfasındaki metin ona talimat vermek üzere yazılabilir. Ona hiçbir insanın kabul etmeyeceği bir fiyat verilebilir. İki kez ödemesi ya da yanlış tarafa ödemesi sağlanabilir ve bir şeylerin ters gittiğini hissetmez.

Dolayısıyla tasarımın tamamı sınırlardır. İşlem başına ve gün başına bir tavan, harçlığını kaybedebilecek bir ajan ile her şeyi kaybedebilecek bir ajan arasındaki farktır.

## Bir yazılıma fonlara erişim nasıl verilmeli?

Bir yabancıya kart verir gibi.

- **Kendi anahtarı olan ayrı bir cüzdan.** Asla birikimlerinizi tutan anahtar değil, asla da kurtarma ifadeniz değil — ne bir istemin içine, ne bir yapılandırma dosyasına, ne de bir ajanın belleğine yapıştırılmış olarak.
- **Yalnızca kaybetmeyi kaldırabileceği kadarı.** Göreve yetecek kadar para yükleyin, gerektikçe ekleyin ve bakiyenin risk altında olduğunu varsayın.
- **Ajanın dışında uygulanan sınırlar.** Bir [akıllı hesaptaki](/tr/blog/smart-accounts-explained/) ya da cüzdan hizmetindeki bir kural tutar. Ajanın istemindeki bir talimat tutmaz.
- **Kalıcı onay yok.** [Çalışmayı sürdüren bir izin](/tr/blog/token-approvals/), onu kullanmaya ikna edilebilecek bir şeyin elinde daha da kötüdür.
- **Kayıtları okuyun.** Ajan kandırıldığını size söylemeyecektir.

Nura bir insan için yapılmış bir cüzdandır. Anahtarlar cihazınızda türetilir ve tutulur, işlemler de siz onayladığınızda orada imzalanır. Ajanlarla denemeler yapıyorsanız, böyle bir cüzdanın olabileceği en yararlı şey, onların erişemediği cüzdan olmaktır.

## Kaynaklar

- [Five Attacks on x402 Agentic Payment Protocol — Li, Wang and Wang, arXiv, 12 Mayıs 2026](https://arxiv.org/abs/2605.11781)
- [Coinbase Unveils Wallet Infrastructure for AI Agents — ForkLog, 12 Şubat 2026](https://forklog.com/en/coinbase-unveils-wallet-infrastructure-for-ai-agents/)
