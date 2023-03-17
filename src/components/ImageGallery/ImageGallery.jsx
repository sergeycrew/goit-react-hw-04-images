import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const ImageGallery = ({ data }) => {
  //   console.dir(ImageGallery);
  return (
    <Gallery>
      {data.map(image => (
        <ImageGalleryItem key={nanoid()} image={image} />
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
