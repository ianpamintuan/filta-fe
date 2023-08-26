import './styles.css';

export const Modal = (id = 'modal') => {
  return `
    <div id="${id}" class="modal">
        <span class="close">&times;</span>
        <div class="modal-content">
            <img id="modal-image">
        </div>
    </div>`;
};

export default Modal;
