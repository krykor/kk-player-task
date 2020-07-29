import React, { useReducer, useEffect } from 'react';

import {
  Reducer,
  CHANGE_ID,
  CHANGE_CONTROL_STATUS,
  CHANGE_FILTER,
  CHANGE_SONG_TIME,
  CHANGE_PLAYER_MODE,
} from './Reducer';

import PlaylistContext from './PlaylistContext';
import playlists from './playlist.json';

const GlobalState = (props) => {
  const inicialState = {
    songId: playlists[0].id,
    isPlay: 'stopped',
    songIndex: 0,
    filteredList: playlists[0],
    songTime: {
      currentTime: '0:00',
      duration: '0:00',
    },
    playerMode: 'normal',
  };

  const [playerState, dispatch] = useReducer(Reducer, inicialState);

  const changeId = (songId) => {
    dispatch({ type: CHANGE_ID, songId });
  };

  const changeControlStatus = (isPlay) => {
    dispatch({ type: CHANGE_CONTROL_STATUS, isPlay });
  };

  const changeFilter = (filteredList, songIndex) => {
    dispatch({ type: CHANGE_FILTER, filteredList, songIndex });
  };

  const changeSongTime = (songTime) => {
    dispatch({ type: CHANGE_SONG_TIME, songTime });
  };

  const changePlayerMode = (playerMode) => {
    dispatch({ type: CHANGE_PLAYER_MODE, playerMode });
  };

  const controlSong = (index) => {
    if (index >= 0 && index <= playlists.length - 1)
      return changeId(playlists[index].id);
    else if (index > playlists.length - 1) return changeId(playlists[0].id);
    else return changeId(playlists[playlists.length - 1].id);
  };

  const setNextSong = () => {
    const { playerMode, songId, songIndex } = playerState;

    switch (playerMode) {
      case 'normal':
        controlSong(songIndex + 1);
        break;
      case 'random':
        changeId(2);
        changeControlStatus('played');
        break;
      case 'loop':
        changeId(songId);
        changeControlStatus('played');
        break;
      default:
        changeControlStatus('stopped');
        break;
    }
  };

  useEffect(() => {
    changeFilter(
      playlists.find((item) => item.id === playerState.songId),
      playlists.findIndex((item) => item.id === playerState.songId)
    );
    changeControlStatus('stopped');
  }, [playerState.songId]);

  useEffect(() => {
    const { currentTime, duration } = playerState.songTime;
    currentTime === duration && currentTime > 0 && setNextSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerState.songTime]);

  return (
    <PlaylistContext.Provider
      value={{
        playlists: playlists,
        songId: playerState.songId,
        changeId,
        isPlay: playerState.isPlay,
        changeControlStatus,
        songIndex: playerState.songIndex,
        filteredList: playerState.filteredList,
        controlSong,
        songTime: playerState.songTime,
        changeSongTime,
        playerMode: playerState.playerMode,
        changePlayerMode,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default GlobalState;
