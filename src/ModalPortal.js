import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');
const el = document.createElement('div');

const ModalPortal = ({ children }) => {

    useEffect(() => {
        modalRoot.appendChild(el);

        return () => {
            modalRoot.removeChild(el);
        }
    }, []);

    return ReactDOM.createPortal(
        children,
        el,
    );
}

export default ModalPortal;