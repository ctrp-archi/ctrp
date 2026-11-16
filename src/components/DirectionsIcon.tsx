import React from 'react';

interface DirectionsIconProps {
  className?: string;
}

// Pictogramme « plusieurs directions » (flèches qui partent d'un même tronc),
// dessiné d'après le modèle fourni par le client (Pastel n° 16).
const DirectionsIcon: React.FC<DirectionsIconProps> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Flèche de gauche, en diagonale */}
    <path d="M7 21v-6l-4-4" />
    <path d="M3 14.5V11h3.5" />
    {/* Flèche centrale, tout droit */}
    <path d="M10.5 21V3" />
    <path d="M8 5.5 10.5 3 13 5.5" />
    {/* Flèche de droite, qui tourne */}
    <path d="M14 21v-8.5a3 3 0 0 1 3-3h4" />
    <path d="M18.5 7 21 9.5 18.5 12" />
  </svg>
);

export default DirectionsIcon;
