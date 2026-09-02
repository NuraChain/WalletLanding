---
title: Tokenleriniz neden cüzdanınızın içinde değil
description: ERC-20 bakiyesi bir sözleşmedeki satırdır. Cüzdanınızın tuttuğu şey, o satırı değiştirebilen anahtardır.
date: 2026-08-11
tags: ERC-20, tokenler
---

Cüzdanınız bir token bakiyesi gösterir, bu yüzden tokenler içindeymiş gibi gelir. Değiller; hiçbir zaman da olmadılar.

## Token bakiyesi nerede durur

ERC-20 token bir akıllı sözleşmedir ve o sözleşme adreslerle miktarlardan oluşan bir defter tutar. Bir tokenden 100 adet sahibi olmak, sözleşmede adresinizin 100 tuttuğunu söyleyen bir satır bulunması demektir. Cüzdanınız o satırı okur ve gösterir.

Cüzdanın gerçekte tuttuğu şey ise o adrese ait özel anahtardır — satırdaki değişikliğe izin verebilecek tek anahtar.

Bu yüzden:

- **Siz hiçbir şey yapmadan bir token belirebilir.** Herkes kendi sözleşmesinin defterine sizin adresinizi yazabilir. İstenmeden gelen tokenler bir ihlal değildir; görmezden gelin.
- **Token eklemek bir görüntü değişikliğidir.** Bakiye, uygulama onu listelemeden önce de vardı; gizlemek de hiçbir şeyi kıpırdatmaz.
- **Tek adres, birçok ağ.** Aynı adres her birinde çalışır ama bir ağdaki bakiye başka bir ağdaki bakiye değildir. Sözleşme tek bir ağa aittir.

## Asıl dikkat edilecek kısım: onaylar

Bir sözleşmenin tokenlerinizi taşıyabilmesi için ona bir harcama izni verirsiniz. Bu izin, onu yaratan işlemden sonra da yürürlükte kalır — çoğu zaman sınırsız tutarda — siz iptal edene kadar. İfade kaybı olmayan token kayıplarının çoğu, onay kayıplarıdır.

Onayları transferler kadar dikkatli okuyun. İmzaladığınız ve sonrasında da çalışmaya devam eden tek şey odur.

## Bunun cüzdan açısından anlamı

Nura yerel paraları ve ERC-20 tokenlerini gönderip alır, ağlar arasında geçiş yapar. Onun tuttuğu anahtardır; zincirin tuttuğu bakiyedir. Ekran, defterin bir görünümüdür; kabı değil.

Bu netleştiğinde gerisi de netleşir — cihazınızdaki anahtarın imzası olmadan hiçbir şeyin neden kıpırdamadığı dahil.
