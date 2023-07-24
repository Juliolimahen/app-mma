import React from 'react';
import FighterCard from '../FighterCard/FighterCard';
import { Fighter } from '../../types/Fighter';
import { FighterListContainer } from './style';

interface FighterListProps {
    fighters: Fighter[];
}

const FighterList: React.FC<FighterListProps> = ({ fighters }) => {
    return (
        <FighterListContainer>
            {fighters.map((fighter) => (
                <FighterCard key={fighter.name} fighter={fighter} />
            ))}
        </FighterListContainer>
    );
};

export default FighterList;