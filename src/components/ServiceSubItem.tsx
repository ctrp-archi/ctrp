import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ServiceSubItemProps {
  id: string;
  label: string;
  description: string;
  points?: string[];
  isOpen: boolean;
  // Faux quand le service parent est replié : le bouton sort alors du parcours clavier.
  isReachable: boolean;
  onToggle: () => void;
}

// Sous-niveau dépliable d'un service (1.1, 1.2, 1.3…) — Pastel n° 18.
const ServiceSubItem: React.FC<ServiceSubItemProps> = ({
  id,
  label,
  description,
  points,
  isOpen,
  isReachable,
  onToggle,
}) => (
  <div
    className={`pl-6 border-l-2 transition-colors duration-300 ${
      isOpen ? 'border-accent-500' : 'border-accent-500/30 hover:border-accent-500'
    }`}
  >
    <h3>
      <button
        type="button"
        id={`${id}-titre`}
        aria-expanded={isOpen}
        aria-controls={`${id}-contenu`}
        tabIndex={isReachable ? 0 : -1}
        onClick={onToggle}
        className="w-full py-2 flex items-center justify-between gap-4 text-left font-display text-lg font-medium uppercase tracking-[-0.02em] text-white hover:text-accent-400 transition-colors duration-300 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-accent-400"
      >
        <span>{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 flex-shrink-0 text-accent-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
    </h3>

    <div
      id={`${id}-contenu`}
      role="region"
      aria-labelledby={`${id}-titre`}
      aria-hidden={!isOpen}
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className={`overflow-hidden ${isOpen ? 'visible' : 'invisible'}`}>
        <p className="text-accent-400 leading-relaxed pt-2 pb-4">{description}</p>
        {points && (
          <ul className="space-y-2 pb-2">
            {points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start text-sm text-accent-400">
                <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default ServiceSubItem;
