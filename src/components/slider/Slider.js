import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyledSlider } from './Slider.styled';
import Context from '../../store/PlaylistContext';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const Slider = () => {
  const { playlists, changeId, songIndex } = useContext(Context);

  const [slideIndex, setSlideIndex] = useState(0);

  const getImages = () => {
    let imagesArray = [];
    playlists.map(
      ({ photo, id }) =>
        (imagesArray = [
          ...imagesArray,
          {
            original: require(`../../assets/images/${photo}`),
            imagesId: id,
          },
        ])
    );

    return imagesArray;
  };

  const images = getImages();
  const gallerySlider = useRef();

  useEffect(() => {
    gallerySlider.current.slideToIndex(songIndex);
  }, [songIndex]);

  useEffect(() => {
    changeId(images[slideIndex].imagesId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  return (
    <StyledSlider>
      <ImageGallery
        items={images}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        onSlide={(id) => id !== slideIndex && setSlideIndex(id)}
        ref={gallerySlider}
      />
    </StyledSlider>
  );
};

export default Slider;
