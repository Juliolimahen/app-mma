import styled from 'styled-components';
import Modal from 'react-modal';

export const CustomStylesModal: Modal.Styles = {
    content: {
        width: '250px',
        height: '350px',
        margin: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};

export const ModalContent = styled.div`
    padding: 16px;
    text-align: center;
`;
