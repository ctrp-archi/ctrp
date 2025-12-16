#!/usr/bin/env python3

import re

# Mapping des URLs vers les fichiers locaux
url_mapping = {
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-323780-house.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-1396122-modern-house.jpeg',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-1643383-luxury-house.jpeg',
    'https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-2029673-architecture.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-1571460-interior.jpeg',
    'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-2102587-kitchen.jpeg',
    'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-1370704-living-room.jpeg',
    'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-2343465-bathroom.jpeg',
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-1438832-bedroom.jpeg',
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-2724749-dining-room.jpeg',
    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop': '/images/pexels-1396132-office.jpeg',
    
    # Versions avec différentes dimensions
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-323780-house.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-1396122-modern-house.jpeg',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-1643383-luxury-house.jpeg',
    'https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-2029673-architecture.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-1571460-interior.jpeg',
    'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-1370704-living-room.jpeg',
    'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-2343465-bathroom.jpeg',
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-1438832-bedroom.jpeg',
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-2724749-dining-room.jpeg',
    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop': '/images/pexels-1396132-office.jpeg',
    
    # Versions avec dimensions 800x1200
    'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-2343465-bathroom.jpeg',
    'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-1438832-bedroom.jpeg',
    'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-2724749-dining-room.jpeg',
    'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-1396132-office.jpeg',
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-1396122-modern-house.jpeg',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-1643383-luxury-house.jpeg',
    'https://images.pexels.com/photos/2029673/pexels-photo-2029673.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-2029673-architecture.jpeg',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-1571460-interior.jpeg',
    'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop': '/images/pexels-1370704-living-room.jpeg',
}

# Lire le fichier
with open('src/data/projectsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remplacer toutes les URLs
for url, local_path in url_mapping.items():
    content = content.replace(url, local_path)

# Écrire le fichier modifié
with open('src/data/projectsData.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Remplacement des URLs terminé !") 