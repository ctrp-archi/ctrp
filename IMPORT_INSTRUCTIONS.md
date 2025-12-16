# 📋 GUIDE D'IMPORT DES PROJETS CTRP

## 🎯 Objectif
Importer tous les projets depuis https://www.ctrp.pt/fr/projets/ vers le nouveau site Bolt.

## ⚠️ Limitation Technique
Bolt ne peut pas scraper automatiquement les sites web. L'import doit être fait manuellement.

## 📝 Procédure d'Import Manuel

### Étape 1 : Préparation
1. Ouvrir le fichier `src/data/projectsData.ts`
2. Dupliquer le template `template-project` pour chaque nouveau projet
3. Préparer un dossier local pour télécharger les images

### Étape 2 : Pour Chaque Projet
1. **Visiter la page projet** sur l'ancien site
2. **Copier les informations** dans le template :
   - Nom du projet → `title`
   - Code projet → `code` 
   - Type → `category`
   - Localisation → `location`
   - Années → `timeline`
   - Surface/Budget → `specifications`
   - Descriptions → `descriptions`

3. **Télécharger les images** :
   - Clic droit → "Enregistrer sous"
   - Nommer clairement (ex: `djs20-hero.jpg`, `djs20-gallery-1.jpg`)

4. **Héberger les images** :
   - Utiliser Imgur, Cloudinary, ou Google Drive
   - Obtenir les URLs publiques
   - Les ajouter dans `images.hero` et `images.gallery`

### Étape 3 : Validation
1. Utiliser `validateProject()` pour vérifier les données
2. Tester l'affichage sur le site
3. Corriger les erreurs éventuelles

## 📊 Mapping des Catégories

| Site Source | Nouveau Site |
|-------------|--------------|
| Réhabilitation | Rénovations |
| Extension | Rénovations |
| Construction Neuve | Neufs |
| Conversion | Rénovations |
| Logement | Habitations |
| Conseil | Services |

## 🖼️ Gestion des Images

### Format Requis
- **Image principale** : Paysage, min 1920x1080px
- **Galerie** : Formats variés selon schéma architectural
- **Qualité** : Haute résolution
- **Format** : JPG ou PNG

### Services Recommandés
1. **Imgur** (gratuit, simple)
2. **Cloudinary** (professionnel)
3. **Google Drive** (avec liens publics)

## 🔧 Template de Projet

```typescript
{
  id: 'nom-du-projet',
  code: 'CODE',
  title: 'Nom du Projet',
  type: 'Rénovations', // ou 'Neufs', 'Habitations', 'Services'
  category: 'Réhabilitation',
  location: {
    district: 'Quartier',
    city: 'Ville',
    country: 'Portugal',
    fullLocation: 'Quartier, Ville, Portugal'
  },
  timeline: {
    startYear: 2020,
    endYear: 2022,
    duration: '2020-2022'
  },
  specifications: {
    area: '150 m²',
    budget: '250.000€'
  },
  descriptions: {
    short: 'Description courte pour les listes',
    long: 'Description détaillée du projet',
    concept: 'Concept architectural',
    technicalSolutions: 'Solutions techniques'
  },
  images: {
    hero: 'https://url-image-principale.jpg',
    gallery: [
      'https://url-image-1.jpg',
      'https://url-image-2.jpg'
    ]
  },
  status: 'completed',
  featured: false, // true pour page d'accueil
  tags: ['tag1', 'tag2']
}
```

## ✅ Checklist par Projet

- [ ] Informations de base copiées
- [ ] Images téléchargées et hébergées
- [ ] URLs des images testées
- [ ] Catégorie correctement mappée
- [ ] Validation passée sans erreur
- [ ] Test d'affichage OK

## 🚀 Après l'Import

1. Mettre à jour les pages qui utilisent les projets
2. Vérifier l'affichage sur toutes les pages
3. Tester la navigation entre projets
4. Optimiser les images si nécessaire

## 📞 Support

Si vous rencontrez des difficultés :
1. Vérifier la console pour les erreurs
2. Utiliser `validateProject()` pour diagnostiquer
3. Tester les URLs d'images individuellement