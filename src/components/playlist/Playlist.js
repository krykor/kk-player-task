import React, { useContext } from 'react';
import {
  StyledPlaylist,
  HeaderText,
  SongTitle,
  SongDescription,
} from './Playlist.styled';
import Context from '../../store/PlaylistContext';

import playlist from '../../assets/images/playlist_ico.svg';

const Playlist = () => {
  const { playlists, songIndex } = useContext(Context);

  const controlSongTitle = (index) => {
    if (index >= 0 && index <= playlists.length - 2)
      return playlists[index + 1].title;
    else if (index > playlists.length - 2) return playlists[0].title;
    else return playlists[playlists.length - 1].title;
  };

  return (
    <StyledPlaylist>
      <img src={playlist} alt="playlist" />
      <SongDescription>
        <HeaderText>Next</HeaderText>
        <SongTitle>{controlSongTitle(songIndex)}</SongTitle>
      </SongDescription>
    </StyledPlaylist>
  );
};

export default Playlist;
