---
title: Suporte
description: Ajuda com a Nura Wallet — senha esquecida, restauração da carteira, saldos ausentes, transações travadas, tokens personalizados e dApps.
date: 2026-09-26
---

Ajuda com a Nura Wallet, a carteira Ethereum de autocustódia para Windows, macOS, Linux, Android e iOS.

## Como obter ajuda

Os links para os canais da comunidade da Nura Wallet estão no rodapé desta página. Ao perguntar sobre um problema, ajuda incluir sua plataforma e a versão do app (Configurações → Sobre), o que você estava fazendo e o que aconteceu em vez disso.

**Nunca compartilhe sua frase de recuperação ou sua senha com ninguém, nem mesmo conosco.** Nunca vamos pedi-las. Quem pedir está tentando roubar seus fundos.

## Perguntas frequentes

### Esqueci minha senha. Vocês podem redefini-la?

Não. A Nura Wallet é de autocustódia: sua senha e sua frase de recuperação existem apenas no seu dispositivo e nunca são enviadas para nós. Ninguém pode redefini-las ou recuperá-las.

Se você tem sua frase de recuperação de 12 ou 24 palavras, pode reinstalar o app e restaurar sua carteira com uma nova senha. Sem a frase de recuperação, os fundos dessa carteira não podem ser recuperados por ninguém.

### Perdi meu dispositivo ou excluí o app. Meus fundos se foram?

Seus fundos ficam na blockchain, não no app. Instale a Nura Wallet em qualquer dispositivo e restaure com sua frase de recuperação para recuperar o acesso.

### Onde minha frase de recuperação fica armazenada?

Criptografada no seu dispositivo com AES-GCM, usando uma chave derivada da sua senha com Argon2id. Ela nunca é enviada para lugar nenhum. A [Política de Privacidade](/pt/privacy/) traz os detalhes.

### Meu saldo ou minha transação não aparece

O app lê a blockchain por meio de endpoints públicos da rede, que às vezes ficam lentos ou indisponíveis.

1. Verifique se você está na rede certa (topo da tela da carteira).
2. Puxe para baixo para atualizar.
3. Tente outro endpoint em Configurações → Redes.
4. Procure o endereço da sua carteira em um explorador de blocos dessa rede.

Uma transação que aparece no explorador, mas não no app, é um problema de exibição, não uma transação perdida.

### Meu token não aparece na lista

Adicione-o manualmente: Configurações → Tokens → Adicionar e cole o endereço do contrato do token. Pegue o endereço de uma fonte confiável — um token que parece idêntico a um conhecido pode ser falso.

### Uma transação está travada como pendente

Transações pendentes estão aguardando a confirmação da rede, geralmente porque a taxa de gás foi definida baixa demais. A transação será confirmada quando a rede se acalmar ou acabará sendo descartada. Os fundos não se perdem enquanto uma transação está pendente.

### É seguro usar a Nura Wallet com dApps?

O navegador integrado só permite que um site interaja com sua carteira por meio de solicitações que você aprova explicitamente. Nenhuma transação é assinada sem a sua confirmação, e nenhum site jamais recebe sua frase de recuperação ou suas chaves privadas.

Leia o que você está aprovando. Um site malicioso pode pedir uma transação ou uma aprovação de token que esvazie sua carteira — a carteira mostrará o que está sendo solicitado, mas só você pode julgar se é legítimo.

### Quais redes são compatíveis?

Ethereum, BNB Smart Chain, Arbitrum e NuraChain, além de qualquer rede compatível com EVM que você mesmo adicionar em Configurações → Redes.

### A Nura Wallet é de código aberto?

Sim, sob a Licença MIT. O link para o repositório do código-fonte está no rodapé desta página.

## Mais

As regras de uso do app estão nos [Termos de Uso](/pt/terms/).
