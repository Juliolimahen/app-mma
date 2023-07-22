// FighterCard.tsx
import React, { useState, useEffect } from 'react';
import { Fighter } from '../types/Fighter';
import { FighterCardContainer } from './styles';
import { FaMale, FaFemale, FaUser } from 'react-icons/fa';
import PlusButton from './PlusButton';
import FighterDetailsModal from './FighterDetailsModal';

interface FighterCardProps {
  fighter: Fighter;
}

const FighterCard: React.FC<FighterCardProps> = ({ fighter }) => {
  const [showModal, setShowModal] = useState(false);
  const getAvatarIcon = () => {
    if (fighter.imageURL) {
      return <img src={fighter.imageURL} alt={fighter.name} />;
    } else {
      return fighter.gender === 'female' ? <FaFemale /> : fighter.gender === 'male' ? <FaMale /> : <FaUser />;
    }
  };

  useEffect(() => {
    setShowModal(false);
  }, [fighter]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="fighter-card">
      <FighterCardContainer>
        {getAvatarIcon()}
      </FighterCardContainer>
      <h2>{fighter.name}</h2>
      <p>Vitórias: {fighter.wins}</p>
      <p>Derrotas: {fighter.losses}</p>
      <p>Empates: {fighter.draws}</p>
      <p>Categoria: {fighter.weightClass}</p>
      <PlusButton onShowModal={handleShowModal} />
      {showModal && (
        <FighterDetailsModal fighter={fighter} isOpen={showModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FighterCard;
