---
title: Bir işlemi imzaladığınızda ne olur
description: İmza, anahtarınızın bir mesajı onayladığını kanıtlar — anahtarın kendisi hiçbir yere gitmeden.
date: 2026-06-09
tags: imzalama, işlemler
---

"İmzalamak", bir formun sonundaki formalite gibi duyulur. Oysa güvenlik modelinin tamamı budur.

## Adımlar

1. **Bir mesaj kurulur.** Alıcı, tutar, ağ, ücret ve aynı işlemin yeniden yayınlanmasını önleyen bir nonce.
2. **Özeti alınır.** Mesaj, sabit uzunlukta kısa bir parmak izine indirgenir.
3. **Anahtar özeti imzalar.** Eliptik eğri matematiği, yalnızca o özel anahtardan gelebilecek bir imza üretir.
4. **İmza yayınlanır.** Düğümler onu genel adresinizle doğrular ve tutuyorsa işlemi bir bloğa alır.

Asıl ilginç olan üçüncü adım. Bir imzayı doğrulamak için yalnızca genel anahtar gerekir. Üretmek için özel anahtar gerekir — ve anahtarın bunun için cihazı terk etmesi hiç gerekmez. Ağa giden şey imzalanmış mesajdır, onu imzalayan sır değil.

## Bu pratikte neden önemli

Sınır keskindir. Bir dApp işlemi hazırlayabilir, bir düğüm iletebilir, bir gezgin gösterebilir — hiçbiri anahtarınıza dokunmaz. Önemli olan tek an, kendi cihazınızda onayladığınız andır.

Bu aynı zamanda şu demek: bir imza, imzaladığınız şeyi ne kadar iyi okuduysanız o kadar güvenilirdir. Zincir niyeti denetlemez, matematiği denetler.

- Yalnızca tutarı değil, alıcıyı da okuyun.
- Hangi ağda olduğunuzu kontrol edin.
- Token onayını ne ise o sayın: işlemden sonra da yaşayan bir izin.

Nura'da işlemler cihazda imzalanır ve ağa giden şey imzalanmış sonuçtur. Özel anahtar, türetildiği yerde kalır.

Kendi saklamanızın çizdiği çizgi budur; imzalama da onu gerçekten görebildiğiniz yerdir.
