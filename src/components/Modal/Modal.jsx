import { useEffect } from 'react';
import { Overlay, ModalWindow, Image } from './Modal.styled';

export const Modal = ({ selectedImage, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const closeModalHandler = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={closeModalHandler}>
      <ModalWindow>
        <Image src={selectedImage} alt={tags} />
      </ModalWindow>
    </Overlay>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//   closeModalHandler = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return (
//       <Overlay onClick={this.closeModalHandler}>
//         <ModalWindow>
//           <Image src={this.props.selectedImage} alt={this.props.tags} />
//         </ModalWindow>
//       </Overlay>
//     );
//   }
// }
