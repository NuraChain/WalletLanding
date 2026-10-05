---
title: Sahte cüzdan uzantıları, mağazalarda 59 tane bulundu
description: Ağustos 2026'da Socket araştırmacıları, kripto cüzdanı kılığında 40 kötü amaçlı Firefox eklentisi ile Chrome ve Edge için 19 eklenti bildirdi; hepsi resmî mağazalardaydı.
date: 2026-10-05
tags: haberler, dolandırıcılık
---

CryptoTicker'ın 31 Ağustos'ta bildirdiğine göre güvenlik şirketi Socket, Ağustos 2026'da kötü amaçlı tarayıcı uzantılarından oluşan iki kampanyayı açıkladı. Firefox'ta birbiriyle bağlantılı 77 uzantı vardı; bunların 40'ının kötü amaçlı olduğu doğrulandı ve aralarında OKX, Rabby ve TronLink'in de bulunduğu cüzdanları taklit ediyorlardı. Chrome ve Edge'de 19 tane daha vardı; bazıları Ledger ve Trezor arayüzlerini taklit ediyordu. Hepsi resmî uzantı mağazalarındaydı. Mozilla, rapordan sonra bildirilen eklentileri kaldırdı.

Tarayıcı uzantısı, bir cüzdanı tutmak için en kullanışlı yerlerden biri ve en açıkta olanlardan biridir. Bu açıkta olma hâli işte böyle görünür.

## Sahte cüzdan uzantıları kurtarma ifadesini nasıl çalar?

Yalnızca bu kampanyalarda üç yolla:

- **Yeniden derlenmiş gerçek bir cüzdan.** Bazıları, anahtarları şifrelenmeden önce ele geçiren, değiştirilmiş Rabby cüzdanı derlemeleriydi. Aslı gibi görünüyor ve çalışıyorlardı, çünkü büyük ölçüde aslının kendisiydiler.
- **Bir toplayıcı.** Diğerleri erişim bilgilerini ve pano içeriğini topluyordu.
- **Bir drainer.** Chrome ve Edge grubu her sayfadan bir güvenlik başlığını kaldırıyor, oturum belirteçlerini ve borsa giriş bilgilerini çalıyor ve Ethereum, Solana ve Tron cüzdanlarını hedef alıyordu.

## Resmî mağazalara nasıl girdiler?

Kötü amaçlı uzantıların dokuzu hayata zararsız spor uygulamaları olarak başladı. İncelemeden geçtiler, kullanıcı topladılar ve sonradan cüzdan çalan kodla güncellendiler. İnceleme bir sürüme bakar. Uzantı ise bir sürümler akışıdır ve tarayıcınız bir sonrakini sormadan kurar.

## Bir cüzdan uzantısı güvenle nasıl kurulur

- Bağlantıyı mağaza aramasından değil, cüzdanın kendi sitesinden ya da deposundan alın. Adı aratmak, taklitlerle karşılaşmanın yoludur.
- Yayıncıyı ve tam yazılışı karakter karakter kontrol edin.
- Var olan bir kurtarma ifadesini; bulduğunuz, size gönderilen ya da denemeniz söylenen bir uzantıya asla aktarmayın. [O ifade cüzdanın kendisidir](/tr/blog/recovery-phrase-security/).
- Cüzdanınızın bulunduğu tarayıcıda uzantı sayısını az tutun. Her biri onun yanında çalışan koddur.
- [Bir uzantıya, herhangi bir cüzdana soracağınız şeyi sorun](/tr/blog/choosing-a-wallet/): anahtar nerede yaşıyor ve kodu okuyabiliyor musunuz.

Nura'nın tarayıcı uzantısı, diğer sürümleriyle birlikte projenin kendi deposunda listelenir; depo MIT lisanslıdır ve okumaya açıktır. Onu alacağınız yer orasıdır. Açık kaynak olmak bir kalkan değildir — bu saldırganlar ham madde olarak var olan bir cüzdanı kullandı. Gerçeğini denetlenebilir kılan şeydir.

## Kaynaklar

- [Malicious browser extensions steal crypto wallets — CryptoTicker, 31 Ağustos 2026](https://cryptoticker.io/en/browser-extensions-wallet-theft/)
