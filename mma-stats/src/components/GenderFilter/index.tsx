// GenderFilter.tsx
import React from 'react';
import { GenderFilterContainer } from './style'

interface GenderFilterProps {
  genderFilter: 'male' | 'female' | '';
  onGenderFilterChange: (gender: 'male' | 'female' | '') => void;
}


const GenderFilter: React.FC<GenderFilterProps> = ({ genderFilter, onGenderFilterChange }) => {
  return (
    <GenderFilterContainer>
      <div>
        <label>
          Mostrar categoria masculino
          <input
            type="checkbox"
            checked={genderFilter === 'male'}
            onChange={(e) => onGenderFilterChange(e.target.checked ? 'male' : '')}
          />
        </label>
      </div>
      <div>
        <label>
        Mostrar categoria feminina
          <input
            type="checkbox"
            checked={genderFilter === 'female'}
            onChange={(e) => onGenderFilterChange(e.target.checked ? 'female' : '')}
          />
        </label>
      </div>
    </GenderFilterContainer>
  );
};

export default GenderFilter;
