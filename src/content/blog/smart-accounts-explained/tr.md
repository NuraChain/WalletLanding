---
title: Akıllı hesaplar ve gerçekte neyi değiştirdikleri
description: Sözleşme olan bir hesabın kuralları olabilir — kurtarma, limitler, toplu işlem. Yapamayacağı şey, altındaki anahtarı ortadan kaldırmaktır.
date: 2026-09-14
tags: akıllı hesaplar, anahtarlar
---

Ethereum'da iki tür hesap vardır. Sıradan olanı bir anahtar çiftidir: özel bir anahtardan türetilmiş bir adres, kodsuz ve "geçerli imza parayı taşır" dışında kuralsız. Diğeri bir sözleşmedir ve bir sözleşmeye neyin geçerli sayılacağı söylenebilir.

## Kurallar ne satın alır

Akıllı hesap bir talimatı ne zaman kabul edeceğine kendisi karar verdiği için, düz bir anahtarın sunamayacağı şeyleri sunabilir:

- **Kurtarma** — eski anahtar kaybolursa birlikte yeni bir imza anahtarı atayabilecek vasiler belirlemek. Hesap anahtardan daha uzun yaşar.
- **Limitler** — günlük tavan, büyük transferlerde gecikme, izin verilen adresler listesi.
- **Toplu işlem** — onay ve takası tek bir onayda yapmak; bu, yarım kalmış durumların bütün bir sınıfını ortadan kaldırır.
- **Ücretin başkasınca ödenmesi**, ya da bir tokenla ödenmesi, çünkü hesap sponsorlu bir işlemi kabul edebilir.

## Neyi değiştirmez

Hesap yine imzacılarının yetkilendirdiği şeyi yürütür. Akıllı bir hesaptan kötü niyetli bir onayı imzalarsanız geçer; sözleşmeye imzanızı kabul etmesi söylenmişti ve etti. Vasiler ve limitler kaybolmuş bir anahtarın vereceği zararı azaltır. Kötü bir imza konusunda hiçbir şey yapmazlar.

Ve hâlâ bir anahtar vardır. On iki kelimeden türetilmek yerine telefonunuzun güvenli öğesinde duruyor olabilir, ama bir şey imzalar ve imzalayan şey korunması gereken şeydir.

## Bu, sade bir cüzdanı nereye koyar

Anahtar çiftine dayalı hesabın dağıtım maliyeti yoktur, güvenilecek bir sözleşmesi yoktur, başkasının kontrol ettiği bir yükseltme yolu yoktur ve her ağda aynı davranır. Bunlar gerçek özelliklerdir, yalnızca özelliklerin yokluğu değil.

Nura bu tür bir hesap için bir cüzdandır: anahtarlar cihazda türetilir ve tutulur, işlemler orada imzalanır, kurtarma ifadesi saklanmadan önce AES-GCM ile şifrelenir. Ters gidebilecek yerin daha az olması anlamında sade.
