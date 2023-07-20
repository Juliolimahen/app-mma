// src/components/FighterCard.tsx
import React from 'react';
import { Fighter } from '../types/Fighter';
import { FaMale, FaFemale, FaUser } from 'react-icons/fa';
import { FighterCardContainer } from './styles'; // Importe o estilo adicionado

interface FighterCardProps {
  fighter: Fighter;
}

const FighterCard: React.FC<FighterCardProps> = ({ fighter }) => {
  const getAvatarContent = () => {
    if (fighter.imageURL) {
      return <img src={fighter.imageURL} alt={fighter.name} />;
    } else if (fighter.gender === 'female') {
      return <FaFemale />;
    } else if (fighter.gender === 'male') {
      return <FaMale />;
    } else {
      return <FaUser />;
    }
  };

  return (
    <FighterCardContainer>
      <div>{getAvatarContent()}</div>
      <h2>{fighter.name}</h2>
      <p>Wins: {fighter.wins}</p>
      <p>Losses: {fighter.losses}</p>
      <p>Draws: {fighter.draws}</p>
      <p>Weight Class: {fighter.weightClass}</p>
    </FighterCardContainer>
  );
};

export default FighterCard;
