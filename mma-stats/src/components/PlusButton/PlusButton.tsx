import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { PlusButtonContainer } from './style';

interface PlusButtonProps {
  onShowModal: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onShowModal }) => {
  return (
    <PlusButtonContainer onClick={onShowModal}>
      <FaPlus /> Informações Detalhadas
    </PlusButtonContainer>
  );
};

export default PlusButton;
