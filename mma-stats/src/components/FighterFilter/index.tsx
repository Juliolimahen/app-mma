import React from 'react';
import { FilterContainer } from './style';

interface FighterFilterProps {
    filter: string;
    onFilterChange: (filter: string) => void;
}

const FighterFilter: React.FC<FighterFilterProps> = ({ filter, onFilterChange }) => {
    return (
        <FilterContainer>
            <input
                type="text"
                placeholder="Digite o nome do lutador..."
                value={filter}
                onChange={(e) => onFilterChange(e.target.value)}
            />
        </FilterContainer>
    );
};

export default FighterFilter;
