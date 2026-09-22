---
title: Quente, fria e o que de fato muda
description: A diferença não é o quanto uma carteira parece segura. É se a chave já esteve em uma máquina que se conecta à internet.
date: 2026-08-18
tags: armazenamento, chaves
---

As carteiras são separadas em quentes e frias como se os rótulos descrevessem o cuidado do software. Eles descrevem algo bem mais estreito: onde a chave privada está quando assina.

## A linha real

Uma carteira **quente** guarda a chave em um dispositivo conectado à internet — um celular, um notebook. Uma carteira **fria** guarda em um que não conecta, assina ali e devolve apenas a assinatura pronta.

Todo o resto que as pessoas associam a essas palavras decorre desse único fato. Uma carteira fria não é mais difícil de roubar por estar offline em espírito; é mais difícil porque um malware no seu notebook não consegue ler uma chave que nunca esteve no seu notebook.

## Para que cada uma serve

- **As quentes são para usar.** Assinar é imediato, as dApps conectam, e o preço dessa comodidade é a chave dividir a máquina com tudo o mais que você executa.
- **As frias são para guardar.** Cada assinatura custa um passo físico deliberado, que é exatamente o que as torna adequadas a valores que você não vai tocar esta semana.
- **A maioria acaba com as duas.** Uma carteira de gasto e uma de guarda, com frases diferentes, é uma divisão mais útil do que escolher um lado.

## Do que nenhuma protege

Uma carteira fria assina o que você aprovar. Se você aprovar uma transação maliciosa, a chave offline assina offline e os tokens saem do mesmo jeito. O armazenamento a frio defende a chave, não o seu critério sobre o que assinar.

O mesmo vale para uma carteira quente que criptografa o que guarda. A Nura criptografa a frase de recuperação com AES-GCM e faz o hash da senha com Argon2id, o que defende a cópia em disco. Não defende uma assinatura que você escolheu dar.

Escolha o armazenamento de acordo com a ameaça. E leia o que assina de qualquer forma.
