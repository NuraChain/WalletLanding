---
title: MetaMask olayı ve anahtarların durduğu yer
description: 1 Ekim 2026'da MetaMask, altyapısının bir bölümünde bir güvenlik olayı açıkladı. Gözetimsiz bir cüzdanın çevresindeki bir ihlal neden anahtarlarının ihlali değildir.
date: 2026-10-05
tags: haberler, kendi saklaman
---

1 Ekim 2026'da MetaMask, altyapısının bir bölümünü etkileyen bir güvenlik olayıyla uğraştığını söyledi. BleepingComputer'ın aynı gün bildirdiğine göre şirket, "MetaMask cüzdanları için acil bir tehdit olmadığını" ve önlem olarak staking operasyonlarındaki etkilenen doğrulayıcıları çıkarmakta olduğunu söyledi. Bu doğrulayıcıların hizmet ettiği staking protokolü Lido, çıkışların 7 Ekim sonuna kadar tamamlanmasını bekliyordu.

5 Ekim 2026 itibarıyla MetaMask hangi sistemlere ulaşıldığını ya da bunun nasıl olduğunu söylemedi. Bunu açıkça belirtmeye değer, çünkü internette tekrarlananların çoğu açıklanandan daha ileri gidiyor.

## MetaMask cüzdanları hacklendi mi?

Şimdiye kadar yayımlanan hiçbir şey bunu söylemiyor. Şirketin açıklaması çizgiyi staking operasyonlarında çekiyor ve bunları saklamasız olarak tanımlıyor: doğrulayıcı çalıştırıyor ve çekim anahtarlarını yönetmediğini söylüyor.

## Cüzdanlar ihlal edilmeden bir cüzdan şirketi nasıl ihlal edilebilir?

Anahtarın bulunduğu yer yüzünden. Gözetimsiz bir cüzdanda kurtarma ifadesi cihazınızda üretilir ve saklanır. Yazılımı yazan şirket onun çevresinde başka şeyler çalıştırır — işlemleri ileten sunucular, fiyat akışları, bir staking hizmeti, bir web sitesi. Bunlar aksayabilir ve bu önemli olabilir: bir hizmet çöker, ödüller kaçar, ele geçirilmiş bir sayfa sunmaması gereken bir şey sunar. Ama o makinelerin hiçbiri ifadenizi tutmaz, dolayısıyla hiçbiri sizin adınıza imzalayamaz. [Kendi saklamanızın gerçekte ne demek olduğu](/tr/blog/self-custody-explained/) budur ve böyle bir olay, tanımın sınandığı gündür.

## Bir cüzdan güvenlik olayından sonra ne yapmalısınız?

- Başkasının özetinden önce şirketin kendi açıklamasını okuyun.
- Cüzdanınızı bir bağlantı üzerinden "taşımayın", "yeniden doğrulamayın" ya da "güvenceye almayın". Olayları saatler içinde tam da bunu öneren mesajlar izler ve [o istek saldırının kendisidir](/tr/blog/wallet-drainers/).
- Haberlere karşılık olarak kurtarma ifadenizi asla hiçbir yere yazmayın.
- Uygulamayı yalnızca ilk kurduğunuz yerden güncelleyin.

Nura aynı çizgiyi çeker ve nerede olduğunu söyler: kurtarma ifadesi AES-GCM ile şifrelenir ve cihazınızda saklanır; hesap yok, kopyasını tutan bir sunucu da yok. Bu, bir cüzdanın çevresinde hiçbir şeyin ters gidemeyeceği iddiası değildir. İfadenin nerede olduğunun beyanıdır; böylece bir şey ters gittiğinde ne soracağınızı bilirsiniz.

## Kaynaklar

- [MetaMask discloses security incident affecting its infrastructure — BleepingComputer, 1 Ekim 2026](https://www.bleepingcomputer.com/news/security/metamask-discloses-security-incident-affecting-its-infrastructure/)
- [MetaMask responds to security incident, exits Ethereum validators as precaution — teiss, 2 Ekim 2026](https://www.teiss.co.uk/news/metamask-responds-to-security-incident-exits-ethereum-validators-as-precaution-18251)
