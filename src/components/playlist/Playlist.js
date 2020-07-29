import React from 'react';
import {
  StyledPlaylist,
  HeaderText,
  SongTitle,
  SongDescription,
} from './Playlist.styled';

import playlist from '../../assets/images/playlist_ico.svg';

const Playlist = () => {
  return (
    <StyledPlaylist>
      <img src={playlist} alt="playlist" />
      <SongDescription>
        <HeaderText>test</HeaderText>
        <SongTitle>test</SongTitle>
      </SongDescription>
      <div>
        <HeaderText>test</HeaderText>
        <SongTitle>test</SongTitle>
      </div>
    </StyledPlaylist>
  );
};

export default Playlist;
