---
title: SparkCat, o malware que lê capturas de tela
description: Em abril de 2026, a Kaspersky achou nova variante do SparkCat na App Store e no Google Play, à caça de frases de recuperação nas fotos. Por que um print é um vazamento.
date: 2026-10-05
tags: notícias, frase de recuperação
---

Em 2 de abril de 2026, a Kaspersky relatou uma nova variante do SparkCat, um trojan que se esconde dentro de aplicativos de aparência comum e vasculha a galeria de fotos do celular em busca de frases de recuperação de criptomoedas. Seus pesquisadores o encontraram em dois aplicativos na App Store e em um no Google Play — mensageiros corporativos e um aplicativo de entrega de comida — um ano depois de a primeira versão ter sido removida das duas lojas. O código malicioso foi retirado desde então.

Ele não atacou uma carteira. Não precisava.

## Como o SparkCat rouba uma frase de recuperação?

O aplicativo pede acesso às suas fotos, algo que um mensageiro ou um aplicativo de entrega pode querer de forma plausível. Depois ele roda reconhecimento óptico de caracteres nas imagens e procura texto que pareça uma frase de recuperação. No Android, a Kaspersky o encontrou buscando palavras-chave em japonês, coreano e chinês. A variante para iOS procura as próprias palavras mnemônicas, que são em inglês — então pode alcançar qualquer pessoa, em qualquer lugar.

A carteira nunca é tocada. A frase é lida de uma foto que você tirou dela.

## É seguro tirar uma captura de tela da frase de recuperação?

Não, e este é o motivo. Uma captura de tela é um arquivo de imagem comum. Ela fica em uma galeria que qualquer aplicativo com permissão de fotos pode ler. Costuma ser copiada para uma conta na nuvem em questão de minutos. Aparece em backups e em outros dispositivos conectados à mesma conta. Cada um desses é um lugar onde a frase agora existe.

[A frase é a carteira](/pt/blog/recovery-phrase-security/). Uma foto dela é mais uma cópia da carteira, guardada no lugar menos protegido do celular.

## Como guardar uma frase de recuperação, então?

- Escreva em papel ou grave em metal, e guarde onde você guardaria um documento que não poderia substituir.
- Nunca a fotografe, digite em um aplicativo de notas, envie por e-mail para você mesmo nem cole em um chat.
- Se você já fez isso, trate a frase como exposta: crie uma carteira nova e mova os fundos.
- Dê aos aplicativos acesso a fotos individuais, e não à galeria inteira, onde o seu celular permitir, e desconfie de qualquer aplicativo que insista em tudo.
- As lojas oficiais reduzem o risco. Não o eliminam — esses aplicativos passaram pela revisão.

Dentro da Nura, a frase de recuperação é criptografada com AES-GCM antes de ser armazenada, e a senha que a desbloqueia passa pelo hash Argon2id. Essa proteção termina na borda do aplicativo. Uma frase copiada para fora — para o papel ou para uma foto — é tão segura quanto o lugar onde você a colocar, e nada na carteira pode acompanhá-la até lá.

## Fontes

- [Kaspersky discovers new SparkCat variant bypassing App Store and Google Play security — Kaspersky, 2 de abril de 2026](https://www.kaspersky.com/about/press-releases/kaspersky-discovers-new-sparkcat-variant-bypassing-app-store-and-google-play-security)
