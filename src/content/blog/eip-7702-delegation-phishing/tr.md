---
title: EIP-7702 oltalaması ve tek imzayla boşaltma
description: Ağustos 2026'da sunulan araştırma, örneklenen EIP-7702 yetkilendirmelerinin %63'ünü kötü niyetli sözleşmelere bağladı. Tek yetki devri imzası bütün hesabı nasıl teslim eder.
date: 2026-10-05
tags: haberler, akıllı hesaplar
---

EIP-7702, Ethereum'a 2025'te geldi. Sıradan bir hesabın bir sözleşme koduna işaret etmesine ve onun gibi davranmasına izin verir — toplu işlem, sponsorlu ücretler, yeni bir adrese taşınmadan [akıllı bir hesabın](/tr/blog/smart-accounts-explained/) kolaylıkları. CryptBull'un 21 Ağustos'ta bildirdiğine göre, Ağustos 2026'da USENIX Security Symposium'da sunulan bir araştırma, örneklemindeki EIP-7702 yetkilendirme işlemlerinin %63'ünün kötü niyetli sözleşmelerle bağlantılı olduğunu ve doğrulanmış hırsızlıkların 2,3 milyon doları aştığını buldu.

Bir örneklem ağın tamamı değildir ve bu rakam, özelliğin kendisi kadar onu ilk kimin benimsediğini de anlatır. Yine de belirli bir imza hakkında yerinde bir uyarıdır.

## EIP-7702 yetki devri nedir?

Şunu söyleyen imzalı bir mesaj: bundan böyle bu sözleşmenin kodunu benim hesabım olarak çalıştır. Siz onu değiştirene ya da temizleyene kadar adresinize yapılan her çağrı o kodu, sizin bakiyelerinizle yürütür.

Dürüstçe kullanıldığında bu kod, iyi bilinen bir cüzdan implementasyonudur. Dürüst olmayan biçimde kullanıldığında bir süpürücüdür — tek işlevi hesabın tuttuğu her şeyi ve sonradan gelen her şeyi başka birine göndermek olan kod.

## Sıradan bir drainer'dan farkı ne?

Bir [onay](/tr/blog/token-approvals/) tek bir tokenı teslim eder. Bir yetki devri hesabı teslim eder. [Eski numara](/tr/blog/wallet-drainers/) her varlık için ayrı bir imza gerektiriyordu. Buna bir tane yeter ve çalışmayı sürdürür: yetkisi devredilmiş bir adrese sonradan gönderilen fonlar, ulaştıkları anda alınabilir.

## İstek neye benzer?

Bir yükseltmeye. "Akıllı hesap özelliklerini etkinleştir." "Gas ücretsiz işlemleri etkinleştir." "Sponsorlu gas ile talep et." İstek, meşru olanıyla aynı yapıdadır. Farklı olan tek şey, yetkinin devredildiği adrestir; o da kırk onaltılık karakterdir.

## Bir hesap nasıl korunur

- Bir web sitesinden gelen her yetki devri, yükseltme ya da "akıllı özellikleri etkinleştir" isteğine, kurtarma ifadenizi isteyen bir isteğe davranacağınız gibi davranın. Bir cüzdanın kendi yükseltmesi cüzdanın içinde başlar, size gönderilen bir sayfada değil.
- Cüzdanınız yetkinin devredildiği adresi gösteriyorsa okuyun. Neye yetki verdiğinizi göstermiyorsa imzalamayın.
- Bir yetki devri, yenisi imzalanarak değiştirilebilir ya da temizlenebilir. Şüphe duyduğunuz bir şeyi imzaladıysanız, hesaba herhangi bir şey göndermeden önce ilk iş bunu yapın.
- Bir yetki devri anahtarınız ya da ifadeniz sızdığı için ortaya çıktıysa, onu temizlemek hiçbir şeyi değiştirmez. O hesap temelli kaybedilmiştir ve bir daha asla fon almamalıdır.

Nura gözetimsiz bir Ethereum cüzdanıdır: anahtar cihazınızdadır ve sizin onayladığınızı imzalar. Bu not, onun hangi imza türlerini desteklediği hakkında hiçbir iddiada bulunmaz. Kural cüzdana bağlı değildir — okuyamadığınız bir imza, kontrol etmediğiniz bir transferdir.

## Kaynaklar

- [EIP-7702 wallet delegation faces scrutiny after phishing research — CryptBull, 21 Ağustos 2026](https://www.cryptbull.net/2026/08/21/eip-7702-wallet-delegation-faces-scrutiny-after-phishing-research/)
