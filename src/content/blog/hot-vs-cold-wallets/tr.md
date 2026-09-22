---
title: Sıcak, soğuk ve asıl değişen şey
description: Fark, bir cüzdanın ne kadar güvenli göründüğü değil. Anahtarın internete bağlanan bir makinede hiç bulunup bulunmadığı.
date: 2026-08-18
tags: saklama, anahtarlar
---

Cüzdanlar sıcak ve soğuk diye ayrılır; sanki bu etiketler yazılımın ne kadar dikkatli olduğunu anlatıyormuş gibi. Çok daha dar bir şeyi anlatıyorlar: imzalarken özel anahtarın nerede olduğunu.

## Asıl çizgi

**Sıcak** cüzdan anahtarı internete bağlanan bir cihazda tutar — bir telefon, bir dizüstü. **Soğuk** cüzdan onu bağlanmayan bir cihazda tutar, imzayı orada atar ve dışarıya yalnızca bitmiş imzayı verir.

Bu kelimelere yüklenen diğer her şey bu tek gerçekten çıkar. Soğuk cüzdanı çalmak, ruhen çevrimdışı olduğu için değil, dizüstünüzdeki zararlı yazılım hiç dizüstünüzde bulunmamış bir anahtarı okuyamadığı için zordur.

## Hangisi ne işe yarar

- **Sıcak cüzdan kullanmak içindir.** İmza anında atılır, dApp'ler bağlanır; bu rahatlığın bedeli anahtarın çalıştırdığınız her şeyle aynı makineyi paylaşmasıdır.
- **Soğuk cüzdan tutmak içindir.** Her imza bilinçli, fiziksel bir adıma mal olur; bu hafta dokunmayacağınız miktarlara uygun olmasının nedeni tam olarak budur.
- **Çoğu kişi ikisiyle birlikte kalır.** Ayrı kurtarma ifadeleriyle bir harcama cüzdanı ve bir saklama cüzdanı, taraf seçmekten daha işe yarar bir ayrımdır.

## İkisinin de korumadığı şey

Soğuk cüzdan onayladığınız her şeyi imzalar. Kötü niyetli bir işlemi onaylarsanız, çevrimdışı anahtar onu çevrimdışı imzalar ve tokenlar yine gider. Soğuk saklama anahtarı savunur, neyi imzalayacağınıza dair yargınızı değil.

Aynısı sakladığını şifreleyen sıcak bir cüzdan için de geçerli. Nura kurtarma ifadesini AES-GCM ile şifreler ve parolayı Argon2id ile hash'ler; bu, diskteki kopyayı savunur. Vermeyi seçtiğiniz bir imzayı savunamaz.

Saklamayı tehdide göre seçin. Sonra yine de imzaladığınızı okuyun.
