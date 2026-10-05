---
title: Glamsterdam ve cüzdanınızın yapması gereken
description: Ethereum'un Glamsterdam yükseltmesi 6 Ekim 2026'da Sepolia test ağına ulaşıyor. Ne değişiyor, ne değişmiyor ve her "ETH'nizi yükseltin" mesajı neden dolandırıcılık.
date: 2026-10-05
tags: haberler, gas
---

Ethereum'un bir sonraki yükseltmesi Glamsterdam, Ethereum Vakfı'nın crypto.news tarafından 29 Eylül'de aktarılan duyurusuna göre 6 Ekim 2026'da saat 13:53 UTC'de Sepolia test ağında etkinleşiyor. İkinci bir test ağı olan Hoodi için 27 Ekim öngörülüyor. Henüz bir ana ağ tarihi yok: ethereum.org hedef olarak 2026'nın dördüncü çeyreğini gösteriyor ve bunu doğrulanmamış olarak işaretliyor.

Her yükseltme iki şey üretir — ağda bir değişiklik ve size bu konuda bir şey yapmanızı söyleyen bir mesaj dalgası. Yalnızca ilki gerçektir.

## Glamsterdam neyi değiştiriyor?

Üç şeyi; hiçbiri cüzdanınızda değil:

- **Blok oluşturma protokolün içine taşınıyor.** Bugün blokların çoğunu, zincirin kendi kurallarının dışındaki bir düzenleme aracılığıyla uzmanlaşmış oluşturucular derliyor. Glamsterdam bu düzenlemeyi protokole yazıyor (EIP-7732).
- **Bloklar neye dokunduklarını bildiriyor.** Blok düzeyinde erişim listeleri (EIP-7928), bir bloğun hangi hesapları ve hangi depolama alanlarını kullandığını kaydeder; bu da düğümlerin işlemleri paralel işlemesine olanak tanır.
- **Gas yeniden fiyatlandırılıyor.** Birkaç operasyonun maliyeti değişiyor. Vakıf, koda sabitlenmiş gas limitlerine dayanan uygulamaların değişiklik gerektirebileceği konusunda uyardı — bu, varlık sahiplerine değil geliştiricilere yönelik bir not. [Bir ücretin gerçekte neyin karşılığı olduğu](/tr/blog/gas-fees-explained/) aynı kalıyor.

## Cüzdanımı ya da ETH'mi yükseltmem gerekiyor mu?

Hayır. Bir ağ yükseltmesi, düğümlerin uyduğu kuralları değiştirir. Adresiniz, anahtarınız ve bakiyeniz taşınmaz, dönüştürülmez ya da yeniden ihraç edilmez. "Yeni ETH" diye bir şey yok. 6 Ekim'den önce harekete geçmesi gerekenler, Sepolia düğümü çalıştıranlardır.

## Yükseltme dolandırıcılıkları nasıl işler?

Tarihi ödünç alırlar. Bir mesaj gelir — bir e-posta, bir yanıt, doğru görünen bir sitede bir açılır pencere — ve cüzdanınızın çatallanmadan önce "yükseltilmesi" ya da "eşitlenmesi" gerektiğini söyler, yanında bir bağlantıyla. Bağlantı bir imza ya da kurtarma ifadenizi ister. Bu, bu ayın haberlerine bürünmüş sıradan bir [drainer'dır](/tr/blog/wallet-drainers/).

- Hiçbir ağ yükseltmesi bugüne dek kurtarma ifadesi girmenizi gerektirmedi.
- Hiçbir ağ yükseltmesi cüzdanınızdan bir imza gerektirmez.
- Cüzdan uygulamanızın bir güncellemeye ihtiyacı varsa, güncellemeleri hep nasıl geldiyse öyle gelir.

Nura bir Ethereum cüzdanıdır, dolayısıyla işlemleri gönderdiği ağ budur. Yükseltme o ağı değiştirir, cihazınızdaki ifadeyi değil — ifade olduğu yerde kalır, AES-GCM ile şifrelenmiş olarak, kopyasını tutan bir sunucu olmadan.

Çatallanma zincirde gerçekleşir. Gelen kutunuza düşen her şey başka bir şeydir.

## Kaynaklar

- [Ethereum will test a major speed upgrade on Oct. 6 — crypto.news, 29 Eylül 2026](https://crypto.news/ethereum-will-test-a-major-speed-upgrade-on-oct-6/)
