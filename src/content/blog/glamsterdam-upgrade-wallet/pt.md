---
title: Glamsterdam e o que a sua carteira precisa fazer
description: A atualização Glamsterdam do Ethereum chega à testnet Sepolia em 6 de outubro de 2026. O que muda, o que não muda e por que toda mensagem de "atualize seu ETH" é golpe.
date: 2026-10-05
tags: notícias, gás
---

A próxima atualização do Ethereum, a Glamsterdam, é ativada na rede de testes Sepolia em 6 de outubro de 2026, às 13:53 UTC, segundo o anúncio da Ethereum Foundation noticiado pelo crypto.news em 29 de setembro. Uma segunda testnet, a Hoodi, está provisoriamente marcada para 27 de outubro. Ainda não há data para a mainnet: o ethereum.org lista o quarto trimestre de 2026 como meta e a marca como não confirmada.

Toda atualização produz duas coisas — uma mudança na rede e uma onda de mensagens mandando você fazer algo a respeito. Só a primeira é real.

## O que a Glamsterdam muda?

Três coisas, nenhuma delas na sua carteira:

- **A construção de blocos passa para dentro do protocolo.** Hoje, construtores especializados montam a maioria dos blocos por um arranjo que fica fora das regras da própria rede. A Glamsterdam escreve esse arranjo no protocolo (EIP-7732).
- **Os blocos declaram no que tocam.** As listas de acesso em nível de bloco (EIP-7928) registram quais contas e qual armazenamento um bloco usa, o que permite aos nós processar transações em paralelo.
- **O gás muda de preço.** Várias operações mudam de custo. A Foundation avisou que aplicações que dependem de limites de gás fixados no código podem precisar de mudanças — um recado para desenvolvedores, não para detentores. [O que uma taxa paga de fato](/pt/blog/gas-fees-explained/) continua igual.

## Preciso atualizar a minha carteira ou o meu ETH?

Não. Uma atualização de rede muda as regras que os nós seguem. Seu endereço, sua chave e seu saldo não são migrados, convertidos nem reemitidos. Não existe "novo ETH". Quem precisa agir antes de 6 de outubro são as pessoas que operam nós da Sepolia.

## Como funcionam os golpes de atualização?

Eles pegam a data emprestada. Chega uma mensagem — um e-mail, uma resposta, um pop-up em um site que parece certo — dizendo que a sua carteira precisa ser "atualizada" ou "sincronizada" antes do fork, com um link. O link pede uma assinatura ou a sua frase de recuperação. É um [drainer](/pt/blog/wallet-drainers/) comum vestido com a notícia do mês.

- Nenhuma atualização de rede jamais exigiu que você digitasse uma frase de recuperação.
- Nenhuma atualização de rede exige uma assinatura da sua carteira.
- Se o aplicativo da sua carteira precisar de uma atualização, ela chega do jeito que as atualizações dele sempre chegaram.

A Nura é uma carteira Ethereum, então esta é a rede para a qual ela envia transações. A atualização muda essa rede, não a frase no seu dispositivo — que continua onde estava, criptografada com AES-GCM, sem nenhum servidor guardando uma cópia.

O fork acontece na blockchain. Qualquer coisa que chegue à sua caixa de entrada é outra coisa.

## Fontes

- [Ethereum will test a major speed upgrade on Oct. 6 — crypto.news, 29 de setembro de 2026](https://crypto.news/ethereum-will-test-a-major-speed-upgrade-on-oct-6/)
