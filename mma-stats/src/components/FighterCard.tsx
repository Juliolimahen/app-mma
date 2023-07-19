import React from 'react';
import Fighter from '../types/Fighter';
import { FaMale, FaFemale, FaUser } from 'react-icons/fa';
import styled from 'styled-components';

interface FighterCardProps {
  fighter: Fighter;
}

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f1f1f1;
  margin-bottom: 10px;

  svg {
    color: #555;
  }
`;

const FighterCard: React.FC<FighterCardProps> = ({ fighter }) => {
  const getAvatarIcon = () => {
    if (fighter.weightClass.toLowerCase().includes('women')) {
      return <FaFemale />;
    } else if (fighter.weightClass.toLowerCase().includes('men')) {
      return <FaMale />;
    } else {
      return <FaUser />;
    }
  };

  return (
    <div className="fighter-card">
      <Avatar>{getAvatarIcon()}</Avatar>
      <h2>{fighter.name}</h2>
      <p>Wins: {fighter.wins}</p>
      <p>Losses: {fighter.losses}</p>
      <p>Draws: {fighter.draws}</p>
      <p>Weight Class: {fighter.weightClass}</p>
    </div>
  );
};

export default FighterCard;
