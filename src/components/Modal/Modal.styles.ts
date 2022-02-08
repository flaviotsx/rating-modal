import styled from 'styled-components';
import { color } from 'styles';
import { ModalProps } from './Modal.types';

export const Overlay = styled.div<ModalProps>`
  z-index: auto;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div<Partial<ModalProps>>`
  padding: 1rem;
  height: auto;
  border: 0.5px solid ${color.darkHigh};
  border-radius: 10px;
  background: ${color.lightSolid};
  transition: all 1.3s ease;
  transform: ${({ isOpen }) =>
    isOpen ? 'translate(-100vh)' : 'translate(0vh)'};
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};

  width: ${(props) => props.width}px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
