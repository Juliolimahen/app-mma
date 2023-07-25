import React, { useState } from 'react';
import FighterCard from '../FighterCard/FighterCard';
import { Fighter } from '../../types/Fighter';
import { FighterListContainer } from './style';
import FighterFilter from '../FighterFilter/FighterFilter';

interface FighterListProps {
    fighters: Fighter[];
}

const FighterList: React.FC<FighterListProps> = ({ fighters }) => {
    const [filter, setFilter] = useState('');

    const filteredFighters = fighters.filter((fighter) =>
        fighter.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <FighterFilter filter={filter} onFilterChange={setFilter} />
            <FighterListContainer>
                {filteredFighters.map((fighter) => (
                    <FighterCard key={fighter.name} fighter={fighter} />
                ))}
            </FighterListContainer>
        </div>
    );
};

export default FighterList;
