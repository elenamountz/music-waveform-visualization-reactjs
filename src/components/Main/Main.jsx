import React, { useEffect } from 'react';
import AppBar from 'components/layout/AppBar';
import PlayerContainer from 'components/PlayerContainer';
import SongList from 'components/SongList';
import { useDispatch } from 'react-redux';
import { fetchSongs } from 'redux/actions/song';
import UploadSongDialog from 'components/dialogs/UploadSongDialog/UploadSongDialog';
import Backdrop from 'components/common/Backdrop';

const Main = () => {
  const dispatch = useDispatch(); 

  const init = async () => {
    dispatch(fetchSongs());
  }
  
  useEffect(() => {
    init();
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <PlayerContainer/>
      <SongList />
      <UploadSongDialog />
      <Backdrop />
    </div>
  );
};

export default Main;
