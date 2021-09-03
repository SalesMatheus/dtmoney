import Modal from 'react-modal';

//import { Container } from './styles';

Modal.setAppElement('#root');

interface NewtransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewtransactionModalProps) {
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastrar transação</h2>
        </Modal>
    )
    
}