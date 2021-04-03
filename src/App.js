import React, { useState } from 'react';

import Modal from './Modal';
import ModalPortal from './ModalPortal';

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => prev + 1);
  }

  return (
    <div onClick={handleClick}>
      <p>Number of clicks: {clicks}</p>
      <p>
        Open up the browser DevTools
        to observe that the button
        is not a child of the div
        with the onClick handler.
      </p>
      <ModalPortal>
        <Modal />
      </ModalPortal>
    </div>
  );
}

export default App;