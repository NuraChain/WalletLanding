---
title: Açık imzalama (ERC-7730) Trezor'a ulaştı
description: Trezor, Eylül 2026'da ERC-7730 açık imzalamayı devreye aldı; cihaz ham veri yerine bir işlemin ne yaptığını gösteriyor. Açık imzalama neyi kapsar ve nerede durur.
date: 2026-10-05
tags: haberler, imzalama
---

Cryptonomist'in bildirdiğine göre Trezor, 9 Eylül 2026'da Safe 3, Safe 5, Safe 7 ve Model T cihazlarında açık imzalamayı devreye aldı. Cihaz, onaltılık karakterlerle dolu bir ekran yerine işlemin ne yaptığını gösteriyor: eylemi, tokenları ve tutarları ve bunların nereye gittiğini. Bu özellik ERC-7730'u izliyor; ilk olarak Ledger'da geliştirilen, 2024'te resmîleştirilen ve artık Ethereum Vakfı'nın gözetiminde olan bir standart.

2026'nın şimdiye kadarki en büyük hırsızlığında çalınmış bir anahtar yoktu. İmzalayanın yanıltıldığı veriler üzerinde atılmış doğru bir imza vardı. Bu standart işte o boşluğu hedefliyor.

## Kör imzalama nedir?

Yorumlayamadığınız veriyi imzalamak. Bir sözleşme çağrısı bir bayt dizisidir: bir fonksiyon seçicisi ve argümanları. Bunu çözemeyen bir cüzdan baytları ya da onların bir özetini gösterir ve onay ister. Bir şeyi onaylıyorsunuzdur ve neyi onayladığınızı bilemezsiniz. [Bir drainer böyle çalışır](/tr/blog/wallet-drainers/) — istek gerçektir ve okunamaz.

## Açık imzalama nasıl çalışır?

Bir sözleşmeyi yazanlar, fonksiyonlarının bir tanımını ortak bir kayıt defterinde yayımlar: bu seçici "takas" demektir, bu argüman tutardır, şu da alıcı. Standardı destekleyen bir cüzdan tanımı bulur ve çağrıyı bir cümle olarak gösterir. İmza değişmez. [İmzalanan şey](/tr/blog/how-transactions-are-signed/) aynı baytlardır; gördüğünüz şey ise, nihayet, onların ne anlama geldiğidir.

## Açık imzalamanın sınırları neler?

- **Kapsam.** Yayımlanmış bir tanımı olmayan sözleşme, kör imzalama uyarısına geri düşer. Trezor'un başlangıcında kapsanan protokoller 1inch, Aave, Lido, Tether, LiFi ve Hyperliquid'di — bir başlangıç, zincirin tamamı değil.
- **Tanım bir iddiadır.** Onu tutan kayıt defteri kadar dürüsttür ve bir fonksiyonun adının ne olduğunu söyler, sözleşmenin kodunun sonrasında yaptığı her şeyi değil.
- **Okunabilir bir onay yine de bir onaydır.** Düz kelimelerle yazılmış "Bu sözleşmenin sınırsız USDT harcamasına izin ver", onaltılık hâliyle neyse [aynı izindir](/tr/blog/token-approvals/).
- **Yalnızca okursanız işe yarar.**

Nura, her gözetimsiz cüzdan gibi cihazınızda imzalar ve bir cüzdan size ne gösterirse göstersin kural aynıdır: bir isteğin ne yaptığını söyleyemiyorsanız onaylamayın. Kodu MIT lisanslıdır; dolayısıyla kurduğu ekran, güvene dayanarak kabul etmek yerine okuyabileceğiniz bir şeydir.

Açık imzalama bir işlemi güvenli yapmaz. Onu okunaklı yapar; bu da baştan beri sizin yapmanız gereken kısımdı.

## Kaynaklar

- [Trezor ERC-7730 signing enhances hardware wallet security — Cryptonomist, 9 Eylül 2026](https://en.cryptonomist.ch/2026/09/09/trezor-erc-7730-signing/)
