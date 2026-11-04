# Supports de formation publics

Supports de formation publics, et archive des articles publiés sur LinkedIn.

- Site : https://jalaime-a11y.github.io/
- Articles LinkedIn : https://jalaime-a11y.github.io/articles/

## Ajouter un article LinkedIn

1. Copier `MODELE_ARTICLE.md` dans `articles/_posts/` en le renommant
   `AAAA-MM-JJ-titre-court.md` (date de publication sur LinkedIn,
   titre en minuscules sans accents, mots séparés par des tirets).
   Exemple : `articles/_posts/2026-11-04-ia-agentique.md`.
2. Remplir l'en-tête (`title`, `date`, `linkedin`, `resume`, `tags`)
   puis coller le texte de l'article en Markdown sous l'en-tête.
3. Les images éventuelles vont dans `articles/images/`.
4. Committer : GitHub Pages reconstruit le site, l'article apparaît
   dans la liste `/articles/` et à l'adresse `/articles/AAAA/titre-court/`.

## Organisation

| Chemin | Rôle |
| --- | --- |
| `*.html` (racine) | Supports de formation autonomes |
| `articles/_posts/` | Un fichier Markdown par article LinkedIn |
| `articles/index.html` | Liste des articles, groupés par année |
| `articles/images/` | Images des articles |
| `_layouts/linkedin-article.html` | Mise en page d'un article |
| `assets/articles.css` | Styles partagés (clair / sombre) |
| `MODELE_ARTICLE.md` | Modèle à copier (non publié) |
