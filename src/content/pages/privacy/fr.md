---
title: Politique de confidentialité
description: Nura Wallet ne collecte aucune donnée personnelle. Ce que l’application conserve sur votre appareil et ce qu’elle envoie aux réseaux qu’elle lit.
date: 2026-09-26
---

Nura Wallet est un portefeuille de cryptomonnaies non custodial. Cette politique explique ce qu’il advient des informations lorsque vous l’utilisez.

## En bref

Nura Wallet n’a ni compte, ni inscription, ni serveurs propres qui stockent vos informations. Nous ne collectons ni ne vendons de données personnelles. Votre phrase de récupération et vos clés privées ne quittent jamais votre appareil.

## Informations que nous collectons

**Aucune.**

Nous n’utilisons ni outil d’analyse, ni télémétrie, ni rapports de plantage, ni publicité. L’application ne contient aucun SDK de suivi tiers. Nous ne pouvons voir ni vos soldes, ni vos adresses, ni vos transactions, ni la façon dont vous utilisez l’application.

## Informations stockées sur votre appareil

L’application stocke les éléments suivants localement sur votre appareil, et nulle part ailleurs :

- Votre phrase de récupération et vos clés privées, chiffrées avec **AES-GCM** à l’aide d’une clé dérivée de votre phrase secrète avec **Argon2id**.
- Le vérificateur de votre phrase secrète (un hachage — la phrase secrète elle-même n’est jamais stockée).
- Vos paramètres : réseaux choisis, jetons ajoutés, langue et préférences d’affichage.
- Les données de votre navigateur de dApps : favoris, historique et onglets ouverts.

Ces données sont conservées dans le stockage propre de l’application sur votre appareil. Elles ne nous sont jamais envoyées.

**Nous ne pouvons pas récupérer votre portefeuille.** Comme votre phrase secrète et votre phrase de récupération n’existent que sur votre appareil, personne — pas même nous — ne peut rétablir l’accès si vous les perdez. Conservez votre phrase de récupération en lieu sûr et hors ligne.

## Services que l’application contacte

Un portefeuille n’est d’aucune utilité sans lire la chaîne ; l’application envoie donc des requêtes à des services que nous n’exploitons pas. Chacun d’eux reçoit l’**adresse IP** de votre appareil, comme pour toute requête sur Internet, et voit les éléments suivants :

- **Nœuds publics du réseau (RPC)**, utilisés pour lire les soldes et diffuser les transactions : l’adresse de votre portefeuille et les transactions que vous diffusez.
- **Services d’explorateur de blocs**, utilisés pour l’historique des transactions et les données des jetons : l’adresse de portefeuille consultée.
- **Un service de prix des jetons**, utilisé pour afficher les prix : les jetons dont les prix sont demandés.
- **Un moteur de recherche**, utilisé pour les recherches dans le navigateur de dApps intégré : vos termes de recherche.
- **Nœuds et explorateur du réseau NuraChain**, utilisés pour lire le réseau NuraChain : l’adresse de votre portefeuille.

Les requêtes ne sont effectuées que lorsqu’une fonctionnalité que vous utilisez en a besoin. Vous pouvez modifier ou remplacer les points d’accès réseau dans Paramètres.

Chacun de ces services a sa propre politique de confidentialité, qui régit ce qu’il fait de ces informations.

## Le navigateur de dApps intégré

L’application comprend un navigateur pour visiter des applications décentralisées. Les sites web que vous y ouvrez sont des tiers et peuvent voir les informations qu’un site web voit habituellement, y compris votre adresse IP et toute adresse de portefeuille que vous choisissez de connecter.

Un site web ne peut interagir avec votre portefeuille que par une demande explicite que vous approuvez. Approuver une connexion partage l’adresse publique de votre portefeuille avec ce site. Votre phrase de récupération et vos clés privées ne sont jamais partagées avec aucun site web, et aucune transaction n’est jamais signée sans votre confirmation.

Soyez attentif aux sites auxquels vous vous connectez et aux transactions que vous approuvez.

## Enfants

Nura Wallet ne s’adresse pas aux enfants, et nous ne collectons sciemment d’informations auprès de personne.

## Vos droits

Comme nous ne détenons aucune donnée personnelle vous concernant, nous n’avons rien à consulter, corriger, exporter ou supprimer. Les données conservées sur votre appareil sont effacées lorsque vous supprimez l’application, avec votre portefeuille chiffré — assurez-vous d’avoir votre phrase de récupération avant de le faire.

## Modifications de cette politique

Si cette politique change, nous mettrons à jour la date en haut de cette page et publierons ici la version révisée.

## En savoir plus

Pour obtenir de l’aide avec l’application, consultez la page [Assistance](/fr/support/). Les conditions de son utilisation figurent dans les [Conditions d’utilisation](/fr/terms/).
