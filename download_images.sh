#!/bin/bash

# Créer le dossier images s'il n'existe pas
mkdir -p public/images

# Liste des URLs d'images à télécharger
declare -a urls=(
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
)

# Noms de fichiers correspondants
declare -a filenames=(
    "pexels-323780-house.jpeg"
    "pexels-1396122-modern-house.jpeg"
    "pexels-1643383-luxury-house.jpeg"
    "pexels-2029673-architecture.jpeg"
    "pexels-1571460-interior.jpeg"
    "pexels-2102587-kitchen.jpeg"
    "pexels-1370704-living-room.jpeg"
    "pexels-2343465-bathroom.jpeg"
    "pexels-1438832-bedroom.jpeg"
    "pexels-2724749-dining-room.jpeg"
    "pexels-1396132-office.jpeg"
)

# Télécharger chaque image
for i in "${!urls[@]}"; do
    echo "Téléchargement de ${filenames[$i]}..."
    curl -L "${urls[$i]}" -o "public/images/${filenames[$i]}"
done

echo "Téléchargement terminé !" 