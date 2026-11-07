# Supports de formation publics

Supports de formation publics, et archive des articles publiés sur LinkedIn.

- Site : https://jalaime-a11y.github.io/
- Articles LinkedIn : https://jalaime-a11y.github.io/articles/

## Ajouter un article LinkedIn

1. Copier `MODELE_ARTICLE.md` dans `articles/_posts/` en le renommant
   `AAAA-MM-JJ-titre-court.md` (date de publication sur LinkedIn,
   titre en minuscules sans accents, mots séparés par des tirets).
   Exemple : `articles/_posts/2026-11-04-ia-agentique.md`.
2. Remplir l'en-tête (`title`, `date`, `linkedin`, et au choix `resume`, `tags`)
   puis coller le texte de l'article en Markdown sous l'en-tête.
3. Les images éventuelles vont dans `articles/images/`.
4. Committer : GitHub Pages reconstruit le site, l'article apparaît
   dans la liste `/articles/` et à l'adresse `/articles/AAAA/titre-court/`.

## Brouillons

Un article dont l'en-tête contient `published: false` reste dans le dépôt
mais n'est pas mis en ligne. Remplacer par `published: true` (ou supprimer
la ligne) pour le publier.

Les repères `<!-- À COMPLÉTER ... -->` signalent des passages que l'export
LinkedIn n'a pas restitués (blocs de code, schémas). Ils sont invisibles
sur le site.

## Organisation

| Chemin | Rôle |
| --- | --- |
| `*.html` (racine) | Supports de formation autonomes |
| `articles/_posts/` | Un fichier Markdown par article LinkedIn |
| `articles/index.html` | Liste des articles, groupés par année |
| `articles/images/` | Images des articles |
| `_layouts/linkedin-article.html` | Mise en page d'un article |
| `assets/articles.css` | Styles des articles (thème sombre de la page d'accueil) |
| `assets/vignettes.js` | Vignette animée de chaque article, dessinée d'après sa structure |
| `MODELE_ARTICLE.md` | Modèle à copier (non publié) |
