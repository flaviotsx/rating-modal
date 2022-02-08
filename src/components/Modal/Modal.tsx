import { Overlay, Container } from './Modal.styles';
import Text from '../Text/Text';
import { ModalProps } from './Modal.types';

const Modal: React.FC<Partial<ModalProps>> = ({ 
  children, 
  width=360, 
  isOpen, 
  onClose,
}) => isOpen ? (
  <Overlay width={width} isOpen={true} onClick={onClose}>
    <Container>
      <Text type='h4' color='darkHigh' fontWeight='bold'>{children}</Text>
    </Container>
  </Overlay>
) : null ;

export default Modal;
