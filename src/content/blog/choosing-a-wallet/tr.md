---
title: Bir cüzdana güvenmeden önce neye bakmalı
description: Bir sıralama değil. Cevapları olgu olan ve çoğu ürün sayfasının hiç açıkça söylemediği kısa bir soru listesi.
date: 2026-09-21
tags: cüzdanlar, kontrol listesi
---

Her cüzdan güvenli olduğunu söyler. Bu iddia doğrulanabilir değildir, dolayısıyla işe yaramaz. Aşağıdakiler ise cevabı olan sorular.

## Anahtar nerede yaşıyor?

İlk soru ve cevabın büyük kısmı. Özel anahtar cihazınızda mı türetilip tutuluyor, yoksa onu ya da bir parçasını bir sunucu mu tutuyor? "Saklamasız" yeterince gevşek kullanılıyor; anahtarın nerede olduğunu ve cihazdan neyin çıktığını açıkça söyleyen cümleyi aramaya değer.

## Kodu okuyabiliyor musunuz?

Açık bir depo, birinin denetlediğini garanti etmez. Garanti ettiği şey, anahtara dair iddianın, iddiayı ortaya atanlardan başka biri tarafından da kontrol edilebilmesidir. Kapalı bir cüzdan aynı iddiayı inanarak kabul etmenizi ister.

## Saklanan sırrı ne koruyor?

Diskte bir şey ifadenizi tutuyor. Ayrıntıları arayın: onu hangi şifreleme koruyor ve onu açan parola nasıl hash'leniyor. Argon2id gibi belleğe aç bir fonksiyon tahmin etmeyi pahalılaştırır; düz bir hash bunu yapmaz. Buradaki belirsizlik zaten bir cevaptır.

## Cihazı kaybedince ne oluyor?

Önem kazanmadan önce öğrenin. Standart bir kurtarma ifadesi başka cüzdanlarda da geri yüklenir; yani bu uygulamaya kilitlenmiş olmazsınız. Tek bir üreticiye özgü bir şema daha kullanışlı olabilir ve önceden tamamen anlaşılmaya değer.

## İhtiyacınız olanı fazlalıksız yapıyor mu?

Gönder ve al, ağ değiştir, bir dApp'e bağlan. Sonradan eklenmiş ürünler — kartlar, getiri, alım satım — anahtarınızın yakınında fazladan koddur ve çoğu zaman fazladan karşı taraftır.

Nura bunlara her dilde aynı cevabı verir: anahtarlar cihazda, ifade AES-GCM ile şifreli, parola Argon2id ile hash'li, MIT lisansı, hesap yok ve hiçbir şey tutan bir sunucu yok. Bunu güvenerek kabul etmeniz gerekmiyor — depo tam orada.
