import React, { useContext, useEffect, useRef } from 'react';

import audio from '../../assets/audio/sample.mp3';
import Context from '../../store/PlaylistContext';

function Audio() {
  const player = useRef();

  const {
    isPlay,
    changeSongTime,
    songIndex,
    songTime: { currentTime },
    changeControlStatus,
  } = useContext(Context);

  useEffect(() => {
    if (audio) {
      player.current.src = audio;
    }
  }, [songIndex]);

  useEffect(() => {
    player.current.addEventListener('timeupdate', (e) => {
      changeSongTime({
        currentTime: e.target.currentTime,
        duration: e.target.duration > 0 ? e.target.duration : 0,
      });
    });

    if (isPlay === 'stopped') {
      player.current.pause();
      player.current.currentTime = 0;
    } else if (isPlay === 'playing') {
      player.current.play();
    } else if (isPlay === 'changeValue') {
      player.current.currentTime = currentTime;
      changeControlStatus('playing');
    } else {
      player.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlay]);

  return <audio ref={player} />;
}

export default Audio;
