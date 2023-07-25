import React, { useState } from 'react';
import FighterCard from '../FighterCard';
import { Fighter } from '../../types/Fighter';
import { FighterListContainer } from './style';
import FighterFilter from '../FighterFilter';
import GenderFilter from '../GenderFilter';

interface FighterListProps {
    fighters: Fighter[];
}

const FighterList: React.FC<FighterListProps> = ({ fighters }) => {
    const [filter, setFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState<'male' | 'female' | ''>('');

    const filteredFighters = fighters.filter((fighter) => {
        const nameMatchesFilter = fighter.name.toLowerCase().includes(filter.toLowerCase());
        if (genderFilter === '') {
            return nameMatchesFilter;
        } else {
            return nameMatchesFilter && fighter.gender === genderFilter;
        }
    });

    return (
        <div>
            <FighterFilter filter={filter} onFilterChange={setFilter} />
            <GenderFilter genderFilter={genderFilter} onGenderFilterChange={setGenderFilter} />
            <FighterListContainer>
                {filteredFighters.map((fighter) => (
                    <FighterCard key={fighter.name} fighter={fighter} />
                ))}
            </FighterListContainer>
        </div>
    );
};

export default FighterList;