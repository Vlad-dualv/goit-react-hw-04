import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
ReactModal.setAppElement('#root');

export default function ImageModal({ image, isOpen, onClose }) {
  return (
    <div>
      <ReactModal
        className={css.modal}
        isOpen={isOpen}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
      >
        <img
          src={image.urls.regular}
          alt={image.description}
          className={css.img}
        />
      </ReactModal>
    </div>
  );
}
