import React from 'react';
import { StyledPlayerButtons, Button } from './Buttons.styled';

import play_active from '../../assets/images/Play_active.png';
import play_inactive from '../../assets/images/Play_inactive.png';
import shuffle from '../../assets/images/shuffle_ico.svg';
import repeat from '../../assets/images/repeat_ico.svg';
import previous from '../../assets/images/previous_ico.svg';
import next from '../../assets/images/next_ico.svg';

const PlayerButtons = () => {
  const iconsArray = [
    { src: shuffle, name: 'suffle' },
    { src: previous, name: 'previous' },
    { src: play_active, name: 'play_active', visible: true },
    { src: play_inactive, name: 'play_inactive', visible: false },
    { src: next, name: 'next' },
    { src: repeat, name: 'repeat' },
  ];
  return (
    <StyledPlayerButtons>
      {iconsArray.map(
        ({ src, name, visible }) =>
          visible !== false && (
            <Button key={name} src={src} isPlayButton={name.includes('play')} />
          )
      )}
    </StyledPlayerButtons>
  );
};

export default PlayerButtons;
