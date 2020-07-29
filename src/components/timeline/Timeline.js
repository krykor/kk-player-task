import React, { useContext } from 'react';
import { StyledTimeline, Counter } from './Timeline.styled';
import Context from '../../store/PlaylistContext';

const Timeline = () => {
  const {
    songTime: { currentTime, duration },
    changeControlStatus,
    changeSongTime,
  } = useContext(Context);

  const setValue = (e) => {
    changeControlStatus('changeValue');
    changeSongTime({
      currentTime: e.target.value,
      duration: duration,
    });
  };

  const getTime = (time) =>
    duration > 0
      ? !isNaN(time) &&
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      : '0:00';

  return (
    <StyledTimeline>
      <Counter>{getTime(currentTime)}</Counter>
      <input
        type="range"
        id="progress-bar"
        min="0"
        max={duration}
        value={currentTime}
        onChange={(e) => setValue(e)}
      />
      <Counter>{getTime(duration)}</Counter>
    </StyledTimeline>
  );
};

export default Timeline;
