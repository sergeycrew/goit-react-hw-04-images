import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { PropTypes } from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [picTags, setpicTags] = useState([]);

  const openModalImage = () => {
    setSelectedImage(largeImageURL);
    setpicTags(tags);
    toggleModal();
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <GalleryItem key={id}>
        {
          <Image
            src={webformatURL}
            alt={tags}
            onClick={openModalImage}
            data-largeurl={largeImageURL}
            data-alt={tags}
          />
        }
        {isModalOpen && (
          <Modal
            key={id}
            onClose={toggleModal}
            selectedImage={selectedImage}
            tags={picTags}
          />
        )}
      </GalleryItem>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
