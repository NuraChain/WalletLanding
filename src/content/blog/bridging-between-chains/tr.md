---
title: Köprüden aslında hiçbir şey geçmez
description: Tokenlar ağlar arasında yolculuk etmez. Bir taraf bir şeyi kilitler, diğer taraf bir şey ihraç eder ve ikisini bir arada tutan güvendir.
date: 2026-09-10
tags: köprüler, ağlar
---

Köprü kelimesi, tokenlarınız bir zincirden diğerine yürüyormuş gibi bir izlenim verir. Yürüyemezler. Bir ağ yalnızca kendi durumunu bilir ve bir zincirdeki hiçbir sözleşme başka bir zincirin defterini okuyamaz ya da yazamaz.

## Onun yerine ne olur

Tokenları ilk ağdaki bir sözleşmeye gönderirsiniz; sözleşme onları kilitler ya da yakar. O ağı izleyen bir sistem bunu ikinci ağa bildirir; orada ikinci bir sözleşme eşdeğer bir miktarı oradaki adresinize serbest bırakır ya da basar.

İki ayrı defterde iki ayrı olay, izleme işini kim yapıyorsa onun tarafından birbirine bağlanmış. O izleyicinin niteliği, güvenlik modelinin tamamıdır.

## Kayıpların köprülerde yaşanmasının nedeni de bu

Kriptodaki en büyük hırsızlıkların bazıları köprü hırsızlıklarıydı ve kriptografi çöktüğü için değil. Köprü bir tarafta büyük bir kilitli varlık havuzu tutar ve diğer tarafta varlık ihraç edebilir; yani bildirimi kontrol eden ihracı kontrol eder. İmzacıları ele geçirin ya da doğrulamada bir kusur bulun, hiçliğe karşı basmış olursunuz.

Birini kullanmadan önce transferi kimin tasdik ettiğini sormak yerindedir: bir imzacılar komitesi, bir doğrulayıcı kümesi ya da hedef zincirin kendi doğruladığı bir kanıt.

## Pratik notlar

- **Aldığınız token başka bir tokendır.** Köprülenmiş varlık, hedef ağda kendi sözleşmesidir ve değeri köprünün ödeme gücünü koruması şartına bağlıdır.
- **Hedef ağı imzalamadan önce kontrol edin**, sonra değil. Doğru adrese yanlış ağdan yapılan transfer genellikle geri alınamaz.
- **Her iki tarafta da yerel coine ihtiyacınız var.** Tokenla gelip gazsız kalmak, sıkışıp kalmaktır.
- **Önce resmî yollar.** Köprü oltalamasının çoğu bozuk bir köprü değil, benzerine benzetilmiş bir arayüzdür.

Cüzdanda ağ değiştirmek ücretsiz ve anlıktır. Ağlar arasında değer taşımak ikisi de değildir.
