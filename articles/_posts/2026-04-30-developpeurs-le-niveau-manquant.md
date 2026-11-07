---
title: "Développeurs : Le niveau manquant"
date: 2026-04-30 07:38:00
linkedin: https://www.linkedin.com/pulse/d%C3%A9veloppeurs-le-niveau-manquant-jean-christophe-alaime-xjn1e
excerpt: "Le réflexe de conception que vous n'avez pas encore transféré au dialogue avec l'IA."
---

*Le réflexe de conception que vous n'avez pas encore transféré au dialogue avec l'IA.*

En formation, il arrive de voir des développeurs excellents utiliser l'IA de la même façon : un prompt, une réponse, un ajustement, un autre prompt. La boucle tourne. Le résultat finit par arriver. La méthode fonctionne.

Ce qui apparaît aussi, c'est le nombre de cycles nécessaires pour y arriver. Dix prompts là où trois auraient suffi. Vingt là où cinq étaient possibles. Et surtout, une distance qui se creuse progressivement entre ce que le développeur voulait au départ et ce qu'il obtient au bout du processus. Pas parce que l'IA travaille mal. Parce que l'intention initiale se dilue dans les itérations.

Ce n'est pas une critique de cette méthode. C'est une observation sur ce qu'elle coûte sans toujours se voir : du temps, de l'attention, et une perte progressive de contrôle sur ce qu'on cherche réellement à produire.

Le décalage n'est pas un problème de prompt. C'est un problème de niveau d'entrée dans le dialogue. Ces mêmes développeurs savent très bien concevoir en plusieurs niveaux lorsqu'ils construisent un système. Ce réflexe ne se transfère pas automatiquement dans le dialogue avec l'IA.

------------------------------------------------------------------------

### Ce que j'observe en formation

Le prompt qui revient le plus souvent ressemble à ceci :

> « Mets en place un système de cache pour réduire les appels à la base. »

Ou :

> « Optimise cette fonction, elle est trop lente. »

Ces prompts sont directs, précis, efficaces dans leur logique. Ils traitent l'IA comme un système auquel on soumet une instruction et qui retourne un résultat. C'est cohérent avec la façon dont un développeur interagit avec la plupart des outils qu'il maîtrise.

Ce qui change ici, c'est qu'un système de génération ne reconstruit pas spontanément l'intention générale à partir d'une demande locale. Un développeur expérimenté ne commencerait pas un système complexe par l'implémentation seule, sans avoir posé l'intention, l'architecture et les contraintes d'intégration. Avec l'IA, c'est pourtant souvent là que l'échange commence.

Le problème n'est pas d'entrer parfois dans le micro. Le problème est d'y entrer sans avoir organisé les transitions entre les niveaux dont dépend la cohérence de l'ensemble.

------------------------------------------------------------------------

### Le mécanisme

En sciences cognitives, on appelle ça l'**accommodation cognitive**. Mais la réalité derrière le terme est simple : savoir depuis quel niveau on pense, et savoir quand changer de niveau.

Dans le dialogue avec un LLM, ce mécanisme devient visible pour une raison précise : ce que le développeur gardait implicite dans sa tête doit désormais être formulé. L'IA ne remonte pas d'elle-même vers l'intention générale. Elle travaille au niveau où l'échange l'a placée.

Trois niveaux suffisent à structurer ce mouvement :

- **Méta** : l'intention, la finalité, les contraintes non négociables

- **Macro** : l'architecture, les composants, leurs responsabilités et interactions

- **Micro** : l'implémentation, la logique locale, le code, les tests

Cette hiérarchie est familière à n'importe quel développeur qui conçoit sérieusement. Le point n'est pas de la découvrir. Le point est de comprendre qu'elle s'applique aussi au dialogue avec l'IA, et qu'elle doit y être rendue explicite.

------------------------------------------------------------------------

### Un cas concret : application web multi-technologie

Prenons un cas classique : une application web avec React en frontend, Node/Express en backend, PostgreSQL, Auth0 pour l'authentification et un service tiers pour les notifications.

Le premier prompt arrive :

> « Génère le composant React pour le formulaire de connexion avec gestion des erreurs. »

L'IA produit un composant fonctionnel. Le travail continue. Quelques heures plus tard, un ensemble de décalages apparaît : le composant appelle directement le service d'authentification, la gestion du token reste dans le composant, le flux d'authentification n'est pas centralisé, le modèle de données côté base ne correspond pas à ce que le frontend attend, et le service de notifications suppose un identifiant utilisateur indisponible au moment où il est appelé.

Chaque morceau fonctionne isolément. L'ensemble, lui, ne s'assemble pas correctement.

Ce n'est pas un problème de compétence. Ce n'est pas non plus un problème de prompt mal rédigé. L'échange est entré directement au niveau micro, sans expliciter les transitions qui donnent sa cohérence au système. Voici ce que cela change quand ces transitions sont posées dès le départ.

### Étape 1 : niveau méta

Avant le premier prompt, l'intention réelle est posée :

> « Je construis une application où l'utilisateur doit pouvoir se connecter, accéder à son espace personnel et recevoir des notifications. La sécurité des tokens, la séparation des responsabilités entre frontend et backend, et la cohérence du modèle utilisateur entre les services sont non négociables. »

Ce niveau paraît évident. Il ne l'est pas. Une intention non formulée laisse les arbitrages implicites se faire ailleurs, par le modèle, selon ses propres patterns.

### Étape 2 : transition vers le niveau macro

> « À partir de ces contraintes, propose l'architecture générale de l'application. Comment React, Node/Express, PostgreSQL, Auth0 et le service de notifications s'articulent-ils ? Où réside la logique d'authentification, comment circule le token, quel est le contrat d'API entre frontend et backend, où se situe le modèle utilisateur canonique ? »

Le but n'est pas de demander une architecture. Le but est de contraindre le raisonnement à partir de l'intention déjà définie.

### Étape 3 : transition vers le niveau micro

> « À partir de cette architecture, génère le composant React de connexion. Il délègue l'authentification à Auth0 via le SDK, stocke le token selon le pattern défini, et expose uniquement l'état d'authentification au reste de l'application via le contexte prévu. Aucune logique d'authentification dans le composant lui-même. »

Cette fois, l'implémentation s'insère dans une structure déjà posée.

### Étape 4 : vérification ascendante

> « Remonte au niveau macro : ce composant respecte-t-il l'architecture définie pour la circulation du token et la séparation des responsabilités ? Remonte au niveau méta : la mise en place actuelle garantit-elle la sécurité et la cohérence du modèle utilisateur entre services ? Si des écarts existent, identifie-les. »

Le mouvement n'est pas seulement descendant. Il est aussi ascendant. C'est ce va-et-vient qui maintient la cohérence verticale du système.

L'exemple est pris dans un cas d'architecture web, mais le mécanisme est plus général. Dès qu'une implémentation locale dépend d'une intention et d'une structure plus larges, la même logique s'applique.

------------------------------------------------------------------------

### Ce que l'IA fait sans ces transitions

Sur une tâche simple ou familière, l'IA peut inférer une structure plausible à partir d'une demande floue. Le résultat arrive, il fonctionne, et rien ne signale qu'il aurait pu être différent.

C'est précisément là que le risque est le plus discret. Non pas parce que le résultat est mauvais, mais parce que l'absence de signal d'alerte crée une habitude : celle de considérer que l'inférence implicite est fiable, y compris quand elle ne l'est plus. La frontière entre "tâche simple" et "système complexe" n'est pas toujours visible au moment où on formule le premier prompt.

La réponse suit la granularité du prompt. C'est la mécanique normale de l'outil. Ce fait rend décisif le niveau depuis lequel l'échange est engagé.

------------------------------------------------------------------------

### Pourquoi ce réflexe ne se transfère pas spontanément

Ces réflexes ont une histoire. Ils se sont construits sur des années de pratique qui ont fonctionné. Ce n'est pas leur utilité qu'on remet en question ici. C'est leur efficacité dans un contexte où l'outil ne fonctionne pas comme les systèmes auxquels ces réflexes ont été formés.

**Le feedback rapide a fait ses preuves.** Le cycle test/fix/commit fonctionne, et il a produit d'excellents résultats. Sur une fonction isolée, il reste souvent la meilleure approche. Le problème apparaît lorsque ce même réflexe est appliqué à des systèmes où plusieurs contraintes doivent rester alignées entre elles.

**La précision syntaxique est une vraie compétence.** Un développeur sait écrire des instructions précises pour des systèmes déterministes. Avec l'IA, cette compétence reste utile, mais elle ne suffit plus seule. Une demande localement précise n'emporte pas avec elle l'intention générale si celle-ci n'a pas été explicitée.

**Formuler n'a pas le statut de travail technique.** Écrire un prompt ressemble facilement à une activité périphérique. En réalité, il s'agit de construire une représentation partagée avec le modèle : ce qu'on attend, les contraintes, le niveau de granularité pertinent. Le coût existe de toute façon. Soit il est payé au début sous forme de structuration, soit il revient plus tard sous forme de correction.

------------------------------------------------------------------------

### Ce qui s'active dans ces transitions

Ce n'est pas seulement une question de méthode. Lorsqu'un développeur initie explicitement ces passages entre niveaux, plusieurs capacités sont mobilisées :

- La **métacognition** : reconnaître qu'une implémentation est en train d'être produite sans architecture clairement posée

- La **tolérance à l'ambiguïté** : accepter qu'un niveau macro soit encore en cours de stabilisation sans descendre trop tôt dans le micro

- La **décomposition** : reconstruire le problème au niveau pertinent sans perdre le lien avec les autres niveaux

- La **pensée critique** : vérifier la cohérence verticale entre intention, structure et implémentation

- La **régulation de l'effort** : maintenir cette discipline même lorsque la pression pousse à aller plus vite

Ces capacités existent déjà chez beaucoup de développeurs expérimentés. L'enjeu n'est pas de les créer, mais de les réactiver dans un contexte où elles restaient jusque-là implicites.

------------------------------------------------------------------------

### Mettre en place ce réflexe

Ce protocole devient utile lorsque le coût de l'erreur dépasse le coût de la structuration : systèmes complexes, intégrations multiples, contraintes métier fortes, décisions difficiles à défaire. Sur une fonction utilitaire isolée, l'itération directe reste la bonne approche.

Une question simple peut suffire à enclencher le mécanisme avant chaque échange important :

*À quel niveau suis-je en train de raisonner, et est-ce le bon niveau pour cette étape ?*

**Phase 1 : Descente guidée (2 à 3 sessions)**

Sur un projet réel, écrire aux trois niveaux avant tout prompt, sans l'IA :

- En une phrase : quelle est l'intention réelle du système ? *(méta)*

- En un paragraphe : quels sont les composants, leurs responsabilités, les interactions, les contraintes d'intégration ? *(macro)*

- En détail : quelles règles, quelles conditions, quelle logique d'implémentation ? *(micro)*

Soumettre chaque niveau séparément. Demander à l'IA d'évaluer la cohérence de la formulation avant de descendre au suivant.

**Phase 2 : Remontée systématique**

Après chaque implémentation, formuler explicitement le prompt de remontée. Si la descente au micro révèle une incohérence dans le macro ou remet en question l'intention méta, c'est le processus qui fonctionne, pas un signe d'échec. Attention aussi à l'effet inverse : une structuration trop rigide peut fermer des solutions que l'exploration aurait trouvées. Savoir ne pas structurer fait partie de la compétence.

**Phase 3 : Détection précoce**

L'objectif final n'est pas de suivre un protocole à chaque prompt. C'est de développer la détection spontanée : reconnaître, avant de formuler, depuis quel niveau on s'apprête à engager l'échange et si c'est pertinent. Avec la répétition, le coût cognitif du changement de niveau diminue. Le réflexe remplace la procédure.

------------------------------------------------------------------------

Un développeur qui entre dans le dialogue sans avoir organisé les transitions obtient du code. Un développeur qui les pilote obtient un système.

La technique décrite ici n'ajoute pas une compétence étrangère au métier. Elle rend explicite un réflexe de conception qui existait déjà, et que le dialogue avec l'IA ne peut pas reconstituer seul.

À chaque fois qu'on a pour intention d'aller vite en grillant les étapes, on fait souvent l'inverse. On perd du temps, on s'égare, on produit quelque chose qui s'écarte de l'intention initiale.

*En être conscient, c'est déjà la première étape.*
