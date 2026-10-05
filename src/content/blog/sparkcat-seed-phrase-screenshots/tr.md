---
title: SparkCat, ekran görüntülerini okuyan zararlı yazılım
description: Nisan 2026'da Kaspersky, App Store ve Google Play uygulamalarında galerilerde kurtarma ifadesi arayan yeni bir SparkCat varyantı buldu. Ekran görüntüsü neden bir sızıntıdır.
date: 2026-10-05
tags: haberler, kurtarma ifadesi
---

2 Nisan 2026'da Kaspersky, SparkCat'in yeni bir varyantını bildirdi; SparkCat, sıradan görünen uygulamaların içine gizlenen ve telefonun fotoğraf galerisinde kripto para kurtarma ifadeleri arayan bir truva atıdır. Araştırmacıları onu App Store'da iki, Google Play'de bir uygulamada buldu — kurumsal mesajlaşma uygulamaları ve bir yemek teslimat uygulaması — ilk sürümün her iki mağazadan kaldırılmasından bir yıl sonra. Kötü amaçlı kod o zamandan beri çıkarıldı.

Bir cüzdana saldırmadı. Gerek yoktu.

## SparkCat kurtarma ifadesini nasıl çalar?

Uygulama fotoğraflarınıza erişim ister; bir mesajlaşma ya da teslimat uygulamasının bunu istemesi akla yatkındır. Sonra görsellerin üzerinde optik karakter tanıma çalıştırır ve kurtarma ifadesine benzeyen metin arar. Kaspersky, Android'de onun Japonca, Korece ve Çince anahtar kelimeler aradığını buldu. iOS varyantı ise anımsatıcı kelimelerin kendisini arar; bunlar İngilizcedir — dolayısıyla herkese, her yerde ulaşabilir.

Cüzdana hiç dokunulmaz. İfade, sizin çektiğiniz bir fotoğrafından okunur.

## Kurtarma ifadesinin ekran görüntüsünü almak güvenli mi?

Hayır; nedeni de bu. Ekran görüntüsü sıradan bir görsel dosyasıdır. Fotoğraf izni olan her uygulamanın okuyabildiği bir galeride durur. Genellikle dakikalar içinde bir bulut hesabına kopyalanır. Yedeklerde ve aynı hesapla oturum açılmış başka cihazlarda ortaya çıkar. Bunların her biri, ifadenin artık var olduğu bir yerdir.

[İfade cüzdanın kendisidir](/tr/blog/recovery-phrase-security/). Onun bir fotoğrafı, cüzdanın telefondaki en az korunan yerde tutulan bir kopyası daha demektir.

## Kurtarma ifadesi bunun yerine nasıl saklanmalı?

- Kâğıda yazın ya da metale işleyin ve yerine koyamayacağınız bir belgeyi nerede saklardıysanız orada saklayın.
- Asla fotoğrafını çekmeyin, bir not uygulamasına yazmayın, kendinize e-postayla göndermeyin ya da bir sohbete yapıştırmayın.
- Bunu bir kez bile yaptıysanız ifadeyi açığa çıkmış sayın: yeni bir cüzdan oluşturun ve fonları taşıyın.
- Telefonunuz izin veriyorsa uygulamalara galerinin tamamı yerine tek tek fotoğraflara erişim verin ve her şeyde ısrar eden uygulamalara karşı temkinli olun.
- Resmî mağazalar riski azaltır. Ortadan kaldırmaz — bu uygulamalar incelemeden geçti.

Nura'nın içinde kurtarma ifadesi saklanmadan önce AES-GCM ile şifrelenir, onu açan parola ise Argon2id ile hashlenir. Bu koruma uygulamanın sınırında biter. Dışarı kopyalanmış bir ifade — kâğıda ya da bir fotoğrafa — onu koyduğunuz yer kadar güvenlidir ve cüzdandaki hiçbir şey onu oraya kadar izleyemez.

## Kaynaklar

- [Kaspersky discovers new SparkCat variant bypassing App Store and Google Play security — Kaspersky, 2 Nisan 2026](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-new-sparkcat-variant-bypassing-app-store-and-google-play-security)
