# Un petit Cœur à la fois

Site vitrine construit avec **Astro** + **Tailwind CSS** pour l’organisme *Un petit Cœur à la fois*.

## Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:4321/`.

## Scripts

```bash
npm run dev      # Développement local
npm run build    # Build production
npm run preview  # Prévisualisation du build
```

## Déploiement (GitHub Pages)

Le workflow GitHub Actions publie automatiquement sur GitHub Pages à chaque push sur `main`.

URL finale :

```
https://xjodoin.github.io/unpetitcoeuralafois/
```

## Structure

```
public/assets/   # Images statiques (logo, portraits, hero)
src/pages/       # Pages Astro
src/styles/      # Styles globaux
```

## Notes

- Les portraits sont fournis dans `public/assets/`.
- L’image de hero est générée et peut être remplacée si nécessaire.
