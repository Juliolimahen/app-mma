// FighterDetailsModal.tsx
import React from 'react';
import Modal from 'react-modal';
import { Fighter } from '../../types/Fighter';
import { ModalContent, CustomStylesModal } from './style';

interface FighterDetailsModalProps {
  fighter: Fighter;
  isOpen: boolean;
  onClose: () => void;
}

const FighterDetailsModal: React.FC<FighterDetailsModalProps> = ({ fighter, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalhes do Lutador" style={CustomStylesModal}>
      <ModalContent>
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
