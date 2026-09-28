---
title: Assistance
description: Aide pour Nura Wallet — phrase secrète oubliée, restauration d’un portefeuille, soldes absents, transactions bloquées, jetons personnalisés et dApps.
date: 2026-09-26
---

Aide pour Nura Wallet, le portefeuille Ethereum non custodial pour Windows, macOS, Linux, Android et iOS.

## Obtenir de l’aide

Les liens vers les canaux communautaires de Nura Wallet se trouvent en bas de cette page. Lorsque vous posez une question sur un problème, il est utile d’indiquer votre plateforme et la version de l’application (Paramètres → À propos), ce que vous faisiez et ce qui s’est passé à la place.

**Ne communiquez jamais votre phrase de récupération ou votre phrase secrète à qui que ce soit, pas même à nous.** Nous ne vous les demanderons jamais. Quiconque le fait cherche à voler vos fonds.

## Questions fréquentes

### J’ai oublié ma phrase secrète. Pouvez-vous la réinitialiser ?

Non. Nura Wallet est non custodial : votre phrase secrète et votre phrase de récupération n’existent que sur votre appareil et ne nous sont jamais envoyées. Personne ne peut les réinitialiser ni les récupérer.

Si vous avez votre phrase de récupération de 12 ou 24 mots, vous pouvez réinstaller l’application et restaurer votre portefeuille avec une nouvelle phrase secrète. Sans la phrase de récupération, les fonds de ce portefeuille ne peuvent être récupérés par personne.

### J’ai perdu mon appareil ou supprimé l’application. Mes fonds sont-ils perdus ?

Vos fonds se trouvent sur la chaîne, pas dans l’application. Installez Nura Wallet sur n’importe quel appareil et effectuez la restauration avec votre phrase de récupération pour retrouver l’accès.

### Où ma phrase de récupération est-elle stockée ?

Chiffrée sur votre appareil avec AES-GCM, à l’aide d’une clé dérivée de votre phrase secrète avec Argon2id. Elle n’est jamais envoyée nulle part. La [Politique de confidentialité](/fr/privacy/) donne le détail.

### Mon solde ou ma transaction n’apparaît pas

L’application lit la chaîne par l’intermédiaire de points d’accès réseau publics, qui sont parfois lents ou indisponibles.

1. Vérifiez que vous êtes sur le bon réseau (en haut de l’écran du portefeuille).
2. Tirez vers le bas pour actualiser.
3. Essayez un autre point d’accès dans Paramètres → Réseaux.
4. Recherchez l’adresse de votre portefeuille sur un explorateur de blocs de ce réseau.

Une transaction visible sur l’explorateur mais pas dans l’application relève d’un problème d’affichage, pas d’une transaction perdue.

### Mon jeton n’apparaît pas dans la liste

Ajoutez-le manuellement : Paramètres → Jetons → Ajouter, puis collez l’adresse du contrat du jeton. Prenez l’adresse d’une source de confiance — un jeton qui semble identique à un jeton connu peut être un faux.

### Une transaction reste bloquée en attente

Les transactions en attente attendent la confirmation du réseau, généralement parce que les frais de gas ont été fixés trop bas. La transaction sera confirmée quand le réseau se calmera, ou finira par être abandonnée. Les fonds ne sont pas perdus tant qu’une transaction est en attente.

### Nura Wallet est-il sûr à utiliser avec des dApps ?

Le navigateur intégré ne permet à un site web d’interagir avec votre portefeuille que par des demandes que vous approuvez explicitement. Aucune transaction n’est signée sans votre confirmation, et aucun site web ne reçoit jamais votre phrase de récupération ni vos clés privées.

Lisez ce que vous approuvez. Un site malveillant peut demander une transaction ou une autorisation de jeton qui vide votre portefeuille — le portefeuille vous montrera ce qui est demandé, mais vous seul pouvez juger si c’est légitime.

### Quels réseaux sont pris en charge ?

Ethereum, BNB Smart Chain, Arbitrum et NuraChain, ainsi que tout réseau compatible EVM que vous ajoutez vous-même dans Paramètres → Réseaux.

### Nura Wallet est-il open source ?

Oui, sous licence MIT. Le lien vers le dépôt du code source se trouve en bas de cette page.

## En savoir plus

Les règles d’utilisation de l’application figurent dans les [Conditions d’utilisation](/fr/terms/).
