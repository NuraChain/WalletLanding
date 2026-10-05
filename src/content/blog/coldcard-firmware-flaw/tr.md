---
title: Coldcard açığı ya da zarlar hatalı olduğunda
description: 2021'deki bir aygıt yazılımı hatası, bazı Coldcard tohumlarını 40 bit kadar az rastgelelikle bıraktı. 2026'da yaklaşık 1.816 BTC alındı. Bir tohumun gücü gerçekte nedir.
date: 2026-10-05
tags: haberler, kurtarma ifadesi
---

30 Temmuz ile 4 Ağustos 2026 arasında saldırganlar, anahtarları Coldcard donanım cüzdanlarında üretilmiş 5.200'den fazla adresten kabaca 1.816 BTC — yaklaşık 116 milyon dolar — aldı. TRM Labs, 5 Ağustos tarihli anlatımında nedeni Mart 2021'de yayımlanan 4.0.1 sürümlü aygıt yazılımına kadar izledi: bir derleme yapılandırması hatası, bazı cihazların donanımsal rastgele sayı kaynağından zayıf bir yazılımsal kaynağa geri düşmesine yol açmıştı. 128 bit rastgelelik taşımak üzere tasarlanan tohumlar 40 bit kadar azını taşıyabiliyordu.

Kimsenin cihazına dokunulmadı. Kimsenin ifadesi görülmedi. Saldırganlar tahmin etti.

## Coldcard aygıt yazılımında ne ters gitti?

Kurtarma ifadesi, kelimelerle yazılmış büyük bir rastgele sayıdır. Bütün gücü, o sayının astronomik büyüklükte bir kümenin herhangi bir üyesi olabilmesinden gelir. Onu üreten üreteç zayıfsa küme küçüktür ve küçük bir küme taranabilir. Kırk bit yaklaşık bir trilyon olasılık eder — sıradan donanımın erişebileceği bir sayı. İlk dalga 25 dakikada 594 BTC aldı.

## Aygıt yazılımını güncellemek bunu neden düzeltmiyor?

Çünkü kusur cihazın nasıl çalıştığında değil, tohumların nasıl üretildiğindeydi. TRM'nin ifadesiyle güncelleme, sorunu sonradan oluşturulan cüzdanlar için giderir ama tohumu açığı olan aygıt yazılımıyla üretilmiş cüzdanları korumaz. Böyle bir tohum hâlâ aynı zayıf sayıdır — hangi cihazda olursa olsun, hangi cüzdana geri yüklerseniz yükleyin. Tek çözüm yeni bir tohum ve fonları ona taşımaktır.

## Donanım cüzdanları hâlâ güvenli mi?

[Asıl önemli ayrım](/tr/blog/hot-vs-cold-wallets/) — bir anahtarın internete bağlanan bir makinede hiç bulunup bulunmadığı — yerinde duruyor. Bu başka türden bir başarısızlıktı: anahtar, daha saklanmadan önce tahmin edilebilirdi. Bir cihaz bir sırrı kusursuz saklayabilir ve yine de eline kötü bir sır verilmiş olabilir.

## Bundan ne çıkarmalı

- Bir tohum ancak üretildiği andaki rastgelelik kadar güçlüdür. Sonradan hiçbir şey onu iyileştirmez.
- [İfade cüzdanın kendisidir](/tr/blog/recovery-phrase-security/), kusurlarıyla birlikte. Zayıf bir ifadeyi başka bir yerde geri yüklemek, zayıflığı da geri yükler.
- Standart bir ifade aynı zamanda ayrılabilmenizi sağlayan şeydir. Yeni bir tohuma geçmek için uyumlu bir cüzdandan başka bir şey gerekmez.
- Kusur, istismar edilmeden önce beş yıl boyunca yayımlanmış aygıt yazılımında durdu. Kodun okunabilir olması, kodun okunmuş olmasıyla aynı şey değildir.

Nura bir Ethereum cüzdanıdır ve bu not onun rastgele sayı kaynağı hakkında hiçbir iddiada bulunmaz. Kontrol edin — MIT lisanslı bir depo bunun içindir. Nura'nın belirttiği şey, bir ifade var olduktan sonra ne olduğudur: ifade saklanmadan önce AES-GCM ile şifrelenir, onu açan parola ise Argon2id ile hashlenir.

## Kaynaklar

- [The largest hardware wallet exploit of 2026: inside the USD 116 million Coldcard hack — TRM Labs, 5 Ağustos 2026](https://www.trmlabs.com/resources/blog/the-largest-hardware-wallet-exploit-of-2026-inside-the-usd-116-million-coldcard-hack)
