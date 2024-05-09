import Modal from "react-modal";
import CSS from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ modalImg, isOpen, onCloseModal }) => {
  return (
    <Modal
      overlayClassName={CSS.backdrop}
      className={CSS.modalWindow}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
    >
      {modalImg && (
        <img className={CSS.imageModal} src={modalImg.imgUrl} />
      )}
    </Modal>
  );
};

export default ImageModal;
