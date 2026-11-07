---
title: "Définir l'agent IA — Une architecture de compréhension en quatre couches"
date: 2026-04-18 12:21:00
linkedin: https://www.linkedin.com/pulse/d%C3%A9finir-lagent-ia-une-architecture-de-compr%C3%A9hension-en-alaime-omsae
excerpt: "Depuis 2024, le mot \"agent\" s'est imposé partout. Et avec lui, une avalanche de définitions. Chacune liste des composants techniques. Chacune suppose que l'assemblage de briques suffit à expliquer ce qu'est un agent."
---

## Pourquoi redéfinir ce qui est déjà défini ?

Depuis 2024, le mot "agent" s'est imposé partout. Et avec lui, une avalanche de définitions. Chacune liste des composants techniques. Chacune suppose que l'assemblage de briques suffit à expliquer ce qu'est un agent.

Le problème n'est pas que ces définitions soient fausses. Le problème est qu'elles ne font pas comprendre.

En formation, le constat est systématique. Les apprenants mémorisent, restituent, puis comparent à ce qu'ils connaissent déjà. "C'est comme un logiciel." "C'est comme un chatbot." Le "c'est comme" est le signe que la compréhension n'a pas eu lieu.

Ce document propose une démarche différente : construire la compréhension avant de poser la définition. Quatre couches successives, chacune étoffée par un lexique dédié. On entre par la couche 1 et on s'arrête là où sa pratique le demande.

## Couche 1 — La définition vivante

> Un agent est quelque chose à qui on confie un objectif, et qui décide seul des actions nécessaires pour l'atteindre.
>
> On ne pilote plus chaque action. On délègue le résultat.
>
> Le degré d'autonomie laissé à l'agent dépend de ce qu'on lui a configuré.

## Couche 2 — La définition enrichie — Niveau fondamental

*La couche 2 pose les bases conceptuelles de l'agent, indépendamment de toute technique. Elle s'appuie sur un lexique fondamental dont chaque terme est défini avant d'être mobilisé.*

### Lexique fondamental

*Chaque terme est d'abord défini dans son sens général, puis dans le contexte d'un agent.*

**Entité**

Quelque chose qui existe de façon distincte et identifiable, que ce soit un être vivant, un objet ou un système.

*Dans le contexte d'un agent :* une entité numérique est un système qui existe, qui a une fonction propre et qui peut agir de façon indépendante.

**Autonomie**

La capacité à agir par soi-même, sans dépendre d'une autorité extérieure permanente.

*Dans le contexte d'un agent :* un agent autonome ne demande pas de validation à chaque étape. Il décide seul de ce qu'il fait pour atteindre son objectif.

**Perception**

La capacité à recevoir et interpréter des informations venant de l'extérieur.

*Dans le contexte d'un agent :* l'agent perçoit ce qui se passe dans son environnement avant de décider quoi faire. Sans perception, il agit à l'aveugle.

**Environnement**

L'ensemble des éléments qui entourent une entité et avec lesquels elle peut interagir.

*Dans le contexte d'un agent :* l'environnement de l'agent, c'est tout ce qu'il peut observer et sur lequel il peut agir : des données, des systèmes, d'autres agents, des outils.

**Décision**

Le choix qu'on opère entre plusieurs options possibles face à une situation donnée.

*Dans le contexte d'un agent :* l'agent décide seul quelle action entreprendre à chaque étape. C'est cette capacité de décision qui le distingue d'un système qui se contente d'exécuter des instructions fixes.

**Action**

Ce qu'une entité fait pour modifier une situation ou produire un effet.

*Dans le contexte d'un agent :* une action peut être une recherche, un calcul, un appel à un outil, une communication avec un autre agent. C'est le résultat visible de sa décision.

**Objectif**

Le résultat précis qu'on cherche à atteindre.

*Dans le contexte d'un agent :* l'objectif est ce qu'on confie à l'agent au départ. C'est son seul point de départ. Il prend en charge tout le reste.

**Boucle**

Un cycle dans lequel une séquence d'opérations se répète jusqu'à ce qu'une condition soit remplie.

*Dans le contexte d'un agent :* l'agent répète le cycle percevoir, décider, agir jusqu'à ce que l'objectif soit atteint ou qu'un obstacle l'arrête.

**Outil**

Un moyen mis à disposition pour accomplir une tâche.

*Dans le contexte d'un agent :* les outils de l'agent sont les systèmes externes qu'il peut appeler : moteur de recherche, base de données, calculateur, autre agent. Il les choisit et les active selon le besoin.

**Obstacle**

Ce qui empêche une entité de progresser vers son objectif.

*Dans le contexte d'un agent :* un obstacle peut être une erreur technique, une limite de permissions, une information manquante ou une décision humaine d'interrompre l'agent.

**Coordination**

La capacité de plusieurs entités à travailler ensemble vers un objectif commun, en s'organisant de façon cohérente.

*Dans le contexte d'un agent :* un agent peut piloter d'autres agents ou être piloté par eux. C'est ce qu'on appelle un système multi-agents. Chaque agent garde sa fonction propre, la coordination assure la cohérence de l'ensemble.

**Supervision**

Le fait de surveiller et de contrôler ce que fait une entité ou une personne.

*Dans le contexte d'un agent :* le niveau de supervision humaine n'est pas fixe. Il dépend de la façon dont l'agent a été configuré.

### Définition

> Un agent est une entité autonome qui perçoit son environnement, décide des actions à entreprendre et les exécute pour atteindre un objectif.
>
> En pratique, il fonctionne en boucle : il perçoit, décide, agit en mobilisant les outils dont il dispose, puis perçoit à nouveau jusqu'à ce que l'objectif soit atteint ou qu'un obstacle l'arrête. Il peut coordonner d'autres agents ou être coordonné par eux, selon la complexité de la mission. Le niveau de supervision humaine dépend de la façon dont il a été configuré.

## Couche 3 — La définition enrichie — Niveau praticien

*La couche 3 intègre la réalité technique d'un agent tel qu'un praticien le configure et l'utilise. Elle s'appuie sur un lexique praticien dont chaque terme est défini avant d'être mobilisé.*

### Lexique praticien

*Chaque terme décrit une composante technique réelle de l'agent.*

**LLM (Large Language Model)**

Un modèle informatique entraîné sur de grandes quantités de texte, capable de traiter du langage naturel et d'en produire en retour.

*Dans le contexte d'un agent :* le LLM est la capacité cognitive que l'agent mobilise pour traiter les informations et produire des décisions. C'est l'agent qui décide. Le LLM est ce qui lui en donne la capacité. Ce n'est pas le LLM qui pilote l'agent : ce sont ses instructions système.

**Prompt**

Une instruction ou une question formulée en langage naturel, adressée à un LLM pour obtenir une réponse ou déclencher une action.

*Dans le contexte d'un agent :* le prompt est le moyen par lequel on communique avec l'agent, que ce soit pour lui confier un objectif, lui donner des contraintes ou lui fournir des informations.

**Instructions système**

Un ensemble de directives données à l'agent avant le début de la mission, qui définissent son comportement, son rôle et ses contraintes.

*Dans le contexte d'un agent :* les instructions système sont invisibles à l'utilisateur final mais structurent entièrement la façon dont l'agent traite les situations et produit ses décisions. C'est la source réelle de pilotage de l'agent.

**Contexte**

L'ensemble des informations disponibles à un moment donné pour traiter une situation.

*Dans le contexte d'un agent :* le contexte est ce que l'agent a à disposition au moment où il doit produire une décision. Plus le contexte est riche et pertinent, plus la décision produite est adaptée.

**Mémoire**

La capacité à conserver des informations pour les réutiliser ultérieurement.

*Dans le contexte d'un agent :* la mémoire permet à l'agent de disposer d'informations issues d'interactions passées. Sans mémoire, il repart de zéro à chaque interaction.

**RAG (Retrieval-Augmented Generation)**

Une technique qui consiste à interroger une base de connaissances externe avant de produire une réponse, pour enrichir le contexte disponible.

*Dans le contexte d'un agent :* le RAG permet à l'agent de consulter des documents, des bases de données ou des sources spécifiques avant de produire une décision. Il ne se limite pas aux données contenues dans le LLM.

**API (Application Programming Interface)**

Un point de connexion standardisé qui permet à deux systèmes informatiques de communiquer et d'échanger des données.

*Dans le contexte d'un agent :* l'agent utilise des API pour accéder aux outils et aux systèmes externes nécessaires à l'accomplissement de sa mission.

**MCP (Model Context Protocol)**

Un protocole standardisé qui définit la façon dont un agent accède à des outils, des sources de données et des services externes.

*Dans le contexte d'un agent :* le MCP joue le rôle d'interface entre l'agent et ses outils. Là où une API est un point de connexion spécifique à un service, le MCP est le protocole qui unifie et standardise ces connexions, quelle que soit la nature de l'outil appelé.

**Orchestration**

La coordination et le séquencement des étapes nécessaires pour accomplir une tâche complexe.

*Dans le contexte d'un agent :* l'orchestration définit dans quel ordre l'agent appelle ses outils, consulte sa mémoire et sollicite d'autres agents. C'est ce qui transforme une suite d'actions isolées en mission cohérente.

**Workflow**

Une séquence d'étapes organisées pour accomplir un processus défini.

*Dans le contexte d'un agent :* le workflow est la structure dans laquelle l'agent opère. Il peut être rigide, avec des étapes fixes, ou flexible, avec des branchements que l'agent détermine lui-même selon la situation.

**Human-in-the-loop**

Un mode de fonctionnement dans lequel un humain intervient à certaines étapes d'un processus automatisé pour valider, corriger ou orienter.

*Dans le contexte d'un agent :* le human-in-the-loop définit les moments où l'agent marque une pause et attend une validation humaine avant de continuer. C'est un paramètre de supervision, pas une limite de l'agent.

### Définition

> Un agent est une entité autonome dont le comportement est structuré par ses instructions système. Il reçoit son objectif via un prompt, puis perçoit les informations de son environnement et mobilise un LLM pour les traiter, enrichies par le contexte disponible et, si nécessaire, par le RAG. Sur cette base, l'agent produit des décisions et exécute les actions correspondantes en appelant les outils dont il a besoin, accessibles via des API ou via le protocole MCP.
>
> En pratique, il fonctionne en boucle : il perçoit, traite le contexte, produit une décision, exécute une action, puis actualise son contexte grâce à sa mémoire, jusqu'à ce que l'objectif soit atteint ou qu'un obstacle l'arrête. Il opère dans un workflow qui peut être rigide ou flexible selon la mission. Il peut coordonner d'autres agents ou être coordonné par eux via l'orchestration. Le niveau de supervision humaine, y compris les points de human-in-the-loop, dépend de la façon dont il a été configuré.

## Couche 4 — La définition enrichie — Niveau concepteur

*La couche 4 intègre la réalité architecturale et de gouvernance d'un système agentique tel qu'un concepteur le conçoit et le déploie. Elle s'appuie sur un lexique concepteur dont chaque terme est défini avant d'être mobilisé.*

### Lexique concepteur

*Chaque terme décrit une composante architecturale ou de gouvernance d'un système agentique.*

**Architecture multi-agents** *(système à plusieurs agents)*

Une structure dans laquelle plusieurs agents distincts coopèrent pour accomplir une mission qu'aucun ne pourrait réaliser seul.

*Dans le contexte d'un concepteur :* l'architecture multi-agents définit comment les agents sont organisés, comment ils communiquent et comment leurs actions sont coordonnées. Elle peut être hiérarchique, avec un agent central qui pilote les autres, ou distribuée, sans chef d'orchestre.

**Orchestrateur** *(agent coordinateur)*

L'entité responsable de la coordination des actions de plusieurs agents dans un système multi-agents.

*Dans le contexte d'un concepteur :* l'orchestrateur reçoit l'objectif global, le décompose en sous-tâches et les distribue aux agents spécialisés. Il suit l'avancement, gère les dépendances entre tâches et consolide les résultats.

**Sous-agent** *(agent spécialisé)*

Un agent qui opère sous la coordination d'un orchestrateur et qui est responsable d'une sous-tâche spécifique.

*Dans le contexte d'un concepteur :* le sous-agent reçoit une instruction précise, l'exécute dans son périmètre et retourne un résultat à l'orchestrateur. Il n'a pas connaissance de l'objectif global, seulement de sa propre mission.

**Framework** *(cadre de développement)*

Un ensemble d'outils, de bibliothèques et de conventions qui facilitent la construction d'un type de système.

*Dans le contexte d'un concepteur :* un framework agentique comme LangGraph, CrewAI ou AutoGen fournit les briques de base pour construire des agents et les faire interagir. Il abstrait la complexité de l'orchestration, de la gestion de la mémoire et des appels aux outils.

**Mémoire à court terme** *(mémoire de session)*

La capacité à conserver des informations pendant la durée d'une session ou d'une mission, sans persistance au-delà.

*Dans le contexte d'un concepteur :* la mémoire à court terme correspond à la fenêtre de contexte du LLM. Elle est gérée dans le périmètre de l'agent et disparaît à la fin de la session. Elle peut être transmise à un autre agent sous forme d'instructions ou de résumé, mais elle ne persiste pas d'elle-même.

**Mémoire à long terme** *(mémoire persistante)*

La capacité à conserver des informations au-delà d'une session, dans un système de stockage externe.

*Dans le contexte d'un concepteur :* la mémoire à long terme nécessite un mécanisme explicite : base de données, stockage vectoriel, registre d'état. Dans un système multi-agents, elle est le seul moyen de maintenir une cohérence entre plusieurs agents, plusieurs sessions et plusieurs missions. Sans elle, chaque agent repart de zéro.

**Planification** *(décomposition de l'objectif)*

Le processus par lequel un agent décompose un objectif complexe en une séquence d'étapes réalisables.

*Dans le contexte d'un concepteur :* la planification est produite par le LLM sur la base des instructions système et du contexte disponible. Elle détermine l'ordre des actions, les outils à mobiliser et les agents à solliciter. Une mauvaise planification initiale se propage à toutes les étapes suivantes.

**Raisonnement** *(traitement décisionnel)*

Le processus par lequel un agent évalue une situation et produit une décision adaptée.

*Dans le contexte d'un concepteur :* le raisonnement est la capacité du LLM à traiter le contexte disponible et à produire une décision cohérente avec les instructions système et l'objectif. Il ne s'agit pas d'un raisonnement au sens humain du terme, mais d'un traitement probabiliste du langage qui produit une sortie structurée.

**Boucle de rétroaction** *(feedback loop)*

Un mécanisme par lequel le résultat d'une action est réinjecté comme information pour la décision suivante.

*Dans le contexte d'un concepteur :* la boucle de rétroaction permet à l'agent d'ajuster ses décisions en fonction de ce que ses actions ont produit. Sans elle, l'agent exécute sans corriger. Avec elle, il peut détecter une erreur, la qualifier et adapter sa stratégie.

**Guardrails** *(garde-fous)*

Des contraintes explicites imposées à un agent pour limiter ses actions à un périmètre défini et sécurisé.

*Dans le contexte d'un concepteur :* les guardrails définissent ce que l'agent ne peut pas faire, quelles que soient ses décisions. Ils peuvent porter sur les outils accessibles, les données consultables, les actions autorisées ou le format des sorties produites. Ils sont distincts des instructions système : les instructions orientent, les guardrails bloquent.

**Observabilité** *(traçabilité)*

La capacité à suivre, enregistrer et analyser le comportement d'un agent pendant et après son exécution.

*Dans le contexte d'un concepteur :* l'observabilité permet de savoir ce que l'agent a fait, dans quel ordre, avec quels outils et sur la base de quel contexte. Sans observabilité, un agent en production est une boîte noire. C'est un prérequis à la gouvernance et à la correction des erreurs.

**Handoff** *(transfert de mission)*

Le mécanisme par lequel un agent transfère la responsabilité d'une tâche à un autre agent.

*Dans le contexte d'un concepteur :* le handoff inclut le transfert du contexte, de l'état courant et des instructions nécessaires pour que l'agent destinataire puisse continuer sans perte d'information. Un handoff mal conçu est une source fréquente d'erreurs dans les systèmes multi-agents.

**State** *(état)*

L'ensemble des informations qui décrivent la situation courante d'un agent ou d'un système à un moment donné.

*Dans le contexte d'un concepteur :* le state est ce que l'agent sait de sa propre situation à chaque étape de la boucle. Il inclut le contexte actuel, les actions déjà réalisées, les résultats obtenus et les obstacles rencontrés. La gestion du state est centrale dans les architectures multi-agents : un state mal maintenu produit des décisions incohérentes.

**Sandbox** *(environnement d'exécution isolé)*

Un environnement contrôlé dans lequel un agent peut être testé sans risque d'impact sur les systèmes réels.

*Dans le contexte d'un concepteur :* le sandbox permet de valider le comportement d'un agent, ses appels aux outils et ses décisions avant tout déploiement en production. Il isole l'exécution pour éviter qu'une erreur de conception n'affecte des données ou des systèmes critiques.

### Définition

> Un agent est une entité autonome dont le comportement est structuré par ses instructions système et ses guardrails. Il reçoit son objectif via un prompt, puis perçoit les informations de son environnement et mobilise un LLM pour assurer le raisonnement et la planification nécessaires à leur traitement, enrichies par le contexte disponible, sa mémoire à court terme et, si nécessaire, par le RAG ou la mémoire à long terme. Sur cette base, l'agent produit des décisions et exécute les actions correspondantes en appelant les outils dont il a besoin, accessibles via des API ou via le protocole MCP.
>
> En pratique, il fonctionne en boucle intégrant une boucle de rétroaction : il perçoit, traite le state courant, produit une décision, exécute une action, met à jour son state et réinjecte le résultat dans son contexte, jusqu'à ce que l'objectif soit atteint ou qu'un obstacle l'arrête. Il opère dans un workflow défini par le framework retenu. Dans une architecture multi-agents, il peut jouer le rôle d'orchestrateur ou de sous-agent, assurant ainsi la coordination de l'ensemble, les transitions entre agents étant gérées par des handoffs. L'ensemble du système est soumis à l'observabilité pour garantir la traçabilité des décisions. Le niveau de supervision humaine, y compris les points de human-in-the-loop, est défini à la configuration et validé en sandbox avant tout déploiement.
