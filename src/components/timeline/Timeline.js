import React, { useState } from 'react';
import { StyledTimeline, Counter } from './Timeline.styled';

const Timeline = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <StyledTimeline>
      <Counter>5:78</Counter>
      <input
        type="range"
        id="progress-bar"
        min="0"
        max=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Counter>5:78</Counter>
    </StyledTimeline>
  );
};

export default Timeline;
