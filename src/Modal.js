import React from 'react';
import styled from 'styled-components'

const ModalElement = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = () => {
    
  return (
    <ModalElement>
      <button>Click</button>
    </ModalElement>
  );
}

export default Modal;