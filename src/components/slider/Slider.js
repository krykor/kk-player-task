import React from 'react';
import { StyledSlider } from './Slider.styled';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import cover1 from '../../assets/images/unreleased_cover.png';
import cover2 from '../../assets/images/cover.png';
import cover3 from '../../assets/images/cover-1.png';

const Slider = () => {
  const images = [
    {
      original: cover1,
    },
    {
      original: cover2,
    },
    {
      original: cover3,
    },
    {
      original: cover1,
    },
    {
      original: cover1,
    },
  ];
  return (
    <StyledSlider>
      <ImageGallery
        items={images}
        showNav={false}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </StyledSlider>
  );
};

export default Slider;
