---
title: Kendi saklamanız gerçekte ne demek
description: Saklama tek bir soruya iner — özel anahtar kimde — ve geri kalan her şey bu cevaptan çıkar.
date: 2026-04-14
tags: kendi saklaman, anahtarlar
---

Her cüzdan tek bir soruya cevap verir: özel anahtar kimde. Sonrasında tartışılan her şey — borsalar, kurtarma ifadeleri, donanım cihazları — bu tek cevaptan türer.

## İki cevap

Anahtarı bir borsa ya da barındırılan bir cüzdan tutuyorsa, bakiyeniz onların veritabanındaki bir satırdır. Onlara karşı bir alacaktır. Banka bakiyesi gibi davranır: dondurabilirler, kaybedebilirler ve teslim etmeye zorlanabilirler. Karşılığında bir parola sıfırlama ve arayabileceğiniz biri olur.

Anahtar sizdeyse, bakiye zincirde, anahtar cihazınızdadır. O anahtar olmadan kimse onu kıpırdatamaz. Arayabileceğiniz biri de yoktur.

## Gerçekte değişen ne

- **Kurtarma.** Sıfırlama diye bir şey yok. Ortaya koyamadığınız bir kurtarma ifadesi, kimsenin açamayacağı bir cüzdan demektir — siz dahil.
- **Onay.** Anahtarınızın ürettiği bir imza olmadan hiçbir şey hareket etmez. Bir site isteyebilir; imzalayabilen yalnızca sizsiniz.
- **Riskin yeri.** Riskiniz _onların_ güvenliğinden _sizin_ yedeğinize taşınır.

İnsanların hafife aldığı takas tam da budur. Kendi saklamanız riski ortadan kaldırmaz; onu bir şirketin bilançosundan çekmecenizdeki bir kâğıda taşır.

## Yine de neden buna değer

Çünkü başarısızlık biçimleri, görebileceğiniz ve müdahale edebileceğiniz şeylere dönüşür. Bir borsanın ödeme güçlüğü, çekimler durana kadar görünmez. Kendi yedeğiniz ise bu akşam kontrol edebileceğiniz bir şeydir.

Nura kendi saklamanıza dayanır: kurtarma ifadesi saklanmadan önce AES-GCM ile şifrelenir, onu açan parola Argon2id ile özetlenir ve işlemler cihazda imzalanır. Hesap yok, vesayet yok, ifadenizi tutan bir sunucu yok.

Yani bu notların geri kalanı, artık size ait olan kısımla ilgili: anahtar, ifade ve imzaladığınızda ne olduğu.
