---
title: O que acontece quando você assina uma transação
description: Uma assinatura prova que sua chave aprovou uma mensagem — sem que a chave vá a lugar nenhum.
date: 2026-06-09
tags: assinatura, transações
---

"Assinar" soa como formalidade no fim de um formulário. Na verdade, é todo o modelo de segurança.

## As etapas

1. **Uma mensagem é montada.** Destinatário, valor, rede, taxa e um nonce para que a mesma transação não possa ser repetida.
2. **Ela é resumida em hash.** A mensagem vira uma impressão digital curta, de tamanho fixo.
3. **A chave assina o hash.** A matemática de curva elíptica produz uma assinatura que só poderia vir daquela chave privada.
4. **A assinatura é transmitida.** Os nós a verificam contra o seu endereço público e, se ela confere, incluem a transação em um bloco.

A etapa três é a interessante. Verificar uma assinatura exige apenas a chave pública. Produzi-la exige a chave privada — e a chave nunca precisa sair do dispositivo para isso. O que viaja até a rede é a mensagem assinada, não o segredo que a assinou.

## Por que isso importa na prática

O limite é nítido. Um dApp pode preparar uma transação, um nó pode retransmiti-la, um explorador pode exibi-la — nenhum deles toca na sua chave. O único momento que importa é o momento em que você aprova, no seu próprio dispositivo.

Também significa que uma assinatura é exatamente tão confiável quanto a sua leitura do que assinou. A rede não verifica intenção. Ela verifica matemática.

- Leia o destinatário, não apenas o valor.
- Confira em qual rede você está.
- Trate uma aprovação de token pelo que ela é: permissão que continua valendo depois da transação.

Na Nura as transações são assinadas no dispositivo, e o que vai para a rede é o resultado assinado. A chave privada fica onde foi derivada.

Essa é a linha que a autocustódia traça, e assinar é onde você consegue vê-la.
