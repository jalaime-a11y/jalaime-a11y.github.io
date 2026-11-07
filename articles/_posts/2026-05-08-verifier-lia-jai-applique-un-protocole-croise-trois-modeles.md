---
title: "Vérifier l'IA. J'ai appliqué un protocole, croisé trois modèles, passé quatre heures. Voici ce que j'ai raté."
date: 2026-05-08 08:51:00
linkedin: https://www.linkedin.com/pulse/v%C3%A9rifier-lia-jai-appliqu%C3%A9-un-protocole-crois%C3%A9-trois-mod%C3%A8les-alaime-xmivf
excerpt: "Un chiffre circule sur la vérification des productions IA. 92 % des utilisateurs ne vérifieraient pas systématiquement ce que leurs outils génèrent. La source est réelle. Exploding Topics, 2025, enquête sur plus de 1 000 répondants. Le chiffre est exact dans…"
theme: "Les modèles et le monde"
theme_secondaire: "Pratiquer et apprendre"
---

Un chiffre circule sur la vérification des productions IA. 92 % des utilisateurs ne vérifieraient pas systématiquement ce que leurs outils génèrent. La source est réelle. Exploding Topics, 2025, enquête sur plus de 1 000 répondants. Le chiffre est exact dans la source.

Il était faux dans mon article.

L'étude ne ment pas : elle mesure autre chose que ce que mon article prétendait mesurer. Exploding Topics interrogeait des internautes américains sur leur comportement face aux AI Overviews de Google : cliquent-ils sur les liens sources ? C'est un comportement de navigation, pas une mesure de la vérification des productions IA en contexte de travail. Le glissement ne venait pas de moi. Il venait du modèle, qui avait reformulé le chiffre en "92 % des utilisateurs ne vérifient pas leurs productions IA" avec le même registre assertif que les données vérifiées qui l'entouraient. C'est notamment ce qui l'a rendu invisible : rien dans la forme ne signalait l'extrapolation.

------------------------------------------------------------------------

### Le protocole

Je ne travaille pas sans méthode. J'applique un protocole de vérification en douze phases, construit sur plusieurs mois, alimenté par les critiques de plusieurs modèles différents. Ce protocole distingue vérification argumentative et vérification sémantique, impose la lecture du protocole méthodologique des études citées, exige que chaque chiffre soit rattaché à sa source primaire. Une phase explicitement : vérifier que la source mesure ce qu'on prétend qu'elle mesure.

J'ai appliqué ce protocole. J'ai soumis l'article à Claude dans une session, à ChatGPT dans une autre, à Gemini dans une troisième. Aucun n'a remonté le problème. Pas un.

Cette défaillance révèle un mécanisme structurel.

------------------------------------------------------------------------

### Pourquoi aucun modèle ne l'a vu

Les modèles IA ne lisent pas les sources primaires. Ils génèrent du texte par prédiction statistique, conditionnée par les cooccurrences de leur corpus d'entraînement. Quand un modèle traite le chiffre "8 % vérifient les sources des AI Overviews", il n'accède pas à la méthodologie de l'étude. Il active les représentations associées à ce chiffre dans les textes qu'il a ingérés.

Ce que le modèle a ingéré, ce n'est pas le rapport Exploding Topics. C'est la chaîne de ses citations : l'article [Inc.com](http://Inc.com) qui le relayait, les synthèses LinkedIn qui le reprenaient, les articles de veille et de formation qui l'intégraient. À chaque étape de cette chaîne, le chiffre voyageait sans son protocole méthodologique. Seul le résultat circulait, détaché de la question exacte posée aux répondants et de la population interrogée. Le modèle a agrégé l'usage dominant du chiffre dans le discours public, pas le périmètre exact de la source originale. Cette limitation découle directement de son architecture statistique : la source originale était statistiquement noyée sous ses propres citations.

Ce mécanisme inverse la logique habituelle : plus une source est citée, plus elle est déformée dans le corpus, et moins la vérification par modèle peut détecter cette déformation. La popularité d'une source aggrave le risque de glissement. Elle ne le réduit pas.

La reformulation en "92 % ne vérifient pas leurs productions IA" était statistiquement probable dans ce contexte : c'est la forme sous laquelle ce chiffre circulait le plus fréquemment. Le modèle n'a pas raisonné. Il a complété. La distinction entre le périmètre exact de la source et son usage dominant dans le discours public n'est pas accessible dans ce processus.

Ce n'est pas un cas isolé. J'ai observé le même mécanisme dans d'autres articles LinkedIn, écrits par des professionnels sérieux, de bonne foi, qui citaient des chiffres dont le périmètre avait glissé quelque part dans la chaîne. Les erreurs ne viennent pas de la négligence. Elles viennent d'une infrastructure de citation où la source primaire disparaît progressivement derrière ses propres reformulations, et où chaque auteur qui reprend le chiffre sans remonter à l'original contribue, sans le savoir, à stabiliser la déformation.

C'est aussi pourquoi le croisement multi-modèles ne détecte pas ce type de glissement. Tous les modèles ont appris les mêmes cooccurrences depuis les mêmes textes. Ils reproduisent le même glissement avec la même confiance apparente. Quand on soumet un texte à trois modèles différents, on n'obtient pas trois regards indépendants. On obtient trois instances entraînées sur des corpus partiellement superposés, qui restituent les mêmes représentations condensées des mêmes études. La diversité apparente masque une dépendance structurelle aux mêmes sources compressées. Le croisement multi-modèles détecte les incohérences internes. Il ne remplace pas l'accès à la source primaire.

------------------------------------------------------------------------

### Ce qui a finalement fonctionné

Ce n'était pas la vérification directe du premier article. En rédigeant un second article sur un sujet adjacent, le premier est revenu dans la conversation. Le chiffre devait être réutilisé, donc justifié depuis un autre angle. C'est cet angle différent qui a révélé l'écart là où quatre heures de vérification frontale avaient échoué. Pas le hasard : c'est la contrainte de réutiliser le chiffre dans un autre contexte qui a forcé la confrontation que la vérification directe n'avait pas produite.

------------------------------------------------------------------------

### Le coût réel

Quatre heures. Pour un seul chiffre, dans un seul article.

L'étude Foxit (2026), menée auprès de 1 400 décideurs et employés, mesure le coût net de la vérification des productions IA pour des cadres qui l'appliquent : gain moyen de 4h36 par semaine grâce à la génération IA, dépense moyenne de 4h20 pour vérifier, corriger, recouper. Bilan net : 16 minutes. Pour les employés de bureau, le solde est négatif.

Ces chiffres décrivent une vérification de surface. Ce que j'ai vécu décrit la vérification du périmètre, celle qui va chercher le protocole méthodologique d'une étude pour tester si elle mesure ce qu'on lui fait dire. Ce type de vérification ne figure dans aucune mesure de productivité. Il n'a aucun indicateur qui le valorise. Cette contrainte pousse la plupart des professionnels à l'abandonner au profit de la vitesse, y compris ceux qui savent qu'ils devraient le faire.

------------------------------------------------------------------------

### Ce que cette expérience dit sur la vérification

La connaissance du risque ne produit pas le comportement de protection. Je savais que les modèles peuvent halluciner. Je savais que les sources doivent être vérifiées dans leur périmètre exact. J'avais formalisé ces règles dans un protocole. J'ai quand même laissé passer un glissement catégoriel que quatre heures de vérification croisée n'ont pas détecté.

Le croisement multi-modèles a une limite précise : il ne remonte que les écarts entre ce que le texte dit et ce que les modèles savent. Il ne remonte pas les écarts entre ce que le texte dit et ce que la source primaire mesure réellement. Ce n'est pas la même chose.

Ce que j'ai observé dans mon propre article, je l'ai retrouvé dans d'autres productions. La vérification du périmètre des sources ne figure dans aucun indicateur de performance. Elle n'a donc aucune chance de survivre à la pression du temps.

Les productions non vérifiées circulent, sont citées, réinjectées, et alimentent progressivement les corpus sur lesquels les modèles s'entraînent. Un glissement de périmètre dans un article devient potentiellement une représentation stabilisée dans le modèle suivant, restituée avec le même niveau de confiance apparente que les données exactes qui l'entourent. L'erreur individuelle non détectée ne reste pas locale.

------------------------------------------------------------------------

### La vérification efficace n'est pas une procédure

Le protocole est nécessaire. Sans lui, le glissement n'aurait jamais été cherché.

Il ne suffit pas. Répété sur le même texte, avec les mêmes outils, il atteint son plafond. Ce qui l'a dépassé n'était pas une procédure plus rigoureuse. C'était un croisement d'un autre ordre : non pas entre modèles traitant le même texte, mais entre articles traitant des problèmes adjacents. La confrontation que la vérification frontale n'avait pas créée, un contexte de travail non prévu l'a produite.

Cette capacité ne s'installe pas par accumulation de procédures. Elle se construit par exposition à d'autres problèmes, d'autres angles, jusqu'à ce que la sensibilité aux écarts dépasse ce que la procédure couvre.

La vérification la plus efficace que j'aie produite sur cet article ne venait pas de cet article. Elle venait d'un autre.

------------------------------------------------------------------------

### Sources

**Exploding Topics** (2025). *The AI Trust Gap.* Enquête sur 1 027 adultes américains conscients de l'augmentation du contenu IA. Comportements face aux AI Overviews de Google : 8,5 % déclarent toujours leur faire confiance, moins de 19 % cliquent toujours ou habituellement sur les sources. Périmètre : navigation web, pas productions IA en contexte professionnel.

**Foxit** (2026). *The State of Document Intelligence.* Étude sur 1 400 décideurs et employés, États-Unis et Royaume-Uni. Gain net de 16 minutes hebdomadaires pour les cadres après déduction du temps de vérification. Solde négatif pour les employés de bureau.
