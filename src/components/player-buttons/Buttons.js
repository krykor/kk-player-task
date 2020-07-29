import React, { useContext } from 'react';
import { StyledPlayerButtons, Button } from './Buttons.styled';
import Context from '../../store/PlaylistContext';

import play_active from '../../assets/images/Play_active.png';
import play_inactive from '../../assets/images/Play_inactive.png';
import shuffle from '../../assets/images/shuffle_ico.svg';
import repeat from '../../assets/images/repeat_ico.svg';
import previous from '../../assets/images/previous_ico.svg';
import next from '../../assets/images/next_ico.svg';

const PlayerButtons = () => {
  const {
    songIndex,
    controlSong,
    changeControlStatus,
    isPlay,
    playerMode,
    changePlayerMode,
  } = useContext(Context);

  const iconsArray = [
    {
      src: shuffle,
      name: 'suffle',
      onClick: () =>
        playerMode === 'normal'
          ? changePlayerMode('random')
          : changePlayerMode('normal'),
    },
    {
      src: previous,
      name: 'previous',
      onClick: () => controlSong(songIndex - 1),
    },
    {
      src: play_active,
      name: 'play_active',
      visible: isPlay !== 'playing',
      onClick: () => changeControlStatus('playing'),
    },
    {
      src: play_inactive,
      name: 'play_inactive',
      visible: isPlay === 'playing',
      onClick: () => changeControlStatus('paused'),
    },
    { src: next, name: 'next', onClick: () => controlSong(songIndex + 1) },
    {
      src: repeat,
      name: 'repeat',
      onClick: () =>
        playerMode === 'normal'
          ? changePlayerMode('loop')
          : changePlayerMode('normal'),
    },
  ];
  return (
    <StyledPlayerButtons>
      {iconsArray.map(
        ({ src, name, visible, onClick }) =>
          visible !== false && (
            <Button
              key={name}
              src={src}
              isPlayButton={name.includes('play')}
              onClick={onClick}
            />
          )
      )}
    </StyledPlayerButtons>
  );
};

export default PlayerButtons;
