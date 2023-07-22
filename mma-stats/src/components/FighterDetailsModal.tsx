// FighterDetailsModal.tsx
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { Fighter } from '../types/Fighter';

interface ModalContentProps {
  hasImage: boolean;
}

const ModalContent = styled.div<ModalContentProps>`
  padding: 16px;
  text-align: center;
  color: white; /* Definir a cor do texto como branco */
`;

interface FighterDetailsModalProps {
  fighter: Fighter;
  isOpen: boolean;
  onClose: () => void;
}

const customStyles: Modal.Styles = {
  content: {
    width: '250px',
    height: '350px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

const FighterDetailsModal: React.FC<FighterDetailsModalProps> = ({ fighter, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalhes do Lutador" style={customStyles}>
      <ModalContent hasImage={!!fighter.imageURL}>
        <h2>{fighter.name}</h2>
        <p>Idade: {fighter.age}</p>
        <p>Altura: {fighter.height}</p>
        <p>Peso: {fighter.weight}</p>
        <p>Time: {fighter.team}</p>
        <p>Vitórias por KO/TKO: {fighter.winsKO}</p>
        <p>Vitórias por Finalização: {fighter.winsSubmission}</p>
        <p>Vitórias por Decisão: {fighter.winsDecision}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </Modal>
  );
};

export default FighterDetailsModal;
