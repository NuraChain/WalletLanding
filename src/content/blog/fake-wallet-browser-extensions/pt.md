---
title: Extensões falsas de carteira, 59 achadas nas lojas
description: Em agosto de 2026, pesquisadores da Socket relataram 40 extensões maliciosas para Firefox e 19 para Chrome e Edge imitando carteiras de cripto, todas nas lojas oficiais.
date: 2026-10-05
tags: notícias, golpes
---

Em agosto de 2026, a empresa de segurança Socket revelou duas campanhas de extensões de navegador maliciosas, como noticiou o CryptoTicker em 31 de agosto. No Firefox havia 77 extensões relacionadas, 40 delas confirmadas como maliciosas, imitando carteiras como OKX, Rabby e TronLink. No Chrome e no Edge havia mais 19, algumas copiando as interfaces da Ledger e da Trezor. Todas estavam nas lojas oficiais de extensões. A Mozilla removeu as extensões denunciadas depois do relatório.

Uma extensão de navegador é um dos lugares mais convenientes para manter uma carteira, e um dos mais expostos. É assim que essa exposição se parece.

## Como as extensões falsas de carteira roubam uma frase de recuperação?

De três jeitos, só nessas campanhas:

- **Uma carteira real, reconstruída.** Algumas eram versões alteradas da carteira Rabby que interceptavam as chaves antes de serem criptografadas. Pareciam e funcionavam como a original, porque em grande parte eram a original.
- **Um coletor.** Outras reuniam credenciais de acesso e o conteúdo da área de transferência.
- **Um drainer.** O conjunto do Chrome e do Edge removia um cabeçalho de segurança de todas as páginas, roubava tokens de sessão e logins de corretoras, e mirava carteiras de Ethereum, Solana e Tron.

## Como elas entraram nas lojas oficiais?

Nove das extensões maliciosas começaram a vida como aplicativos inofensivos de esportes. Passaram pela revisão, juntaram usuários e mais tarde foram atualizadas com código para roubar carteiras. A revisão olha para uma versão. Uma extensão é um fluxo de versões, e o seu navegador instala a próxima sem perguntar.

## Como instalar uma extensão de carteira com segurança

- Pegue o link no site ou no repositório da própria carteira, não em uma busca na loja. Buscar pelo nome é como você encontra as imitações.
- Confira o publicador e a grafia exata, caractere por caractere.
- Nunca importe uma frase de recuperação existente para uma extensão que você encontrou, que te enviaram ou que te disseram para experimentar. [Essa frase é a carteira](/pt/blog/recovery-phrase-security/).
- Mantenha poucas extensões no navegador que guarda a sua carteira. Cada uma é código rodando ao lado dela.
- [Pergunte a uma extensão o que você perguntaria a qualquer carteira](/pt/blog/choosing-a-wallet/): onde a chave mora e se você pode ler o código.

A extensão de navegador da Nura está listada com as outras versões no repositório do próprio projeto, que tem licença MIT e é aberto à leitura. É de lá que se deve obtê-la. Ser código aberto não é um escudo — esses atacantes usaram uma carteira existente como matéria-prima. É o que torna a verdadeira verificável.

## Fontes

- [Malicious browser extensions steal crypto wallets — CryptoTicker, 31 de agosto de 2026](https://cryptoticker.io/en/browser-extensions-wallet-theft/)
