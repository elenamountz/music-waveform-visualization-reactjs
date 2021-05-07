import React, { useEffect } from 'react';
import AppBar from 'components/layout/AppBar';
import SongList from 'components/SongList';
import { useDispatch } from 'react-redux';
import { fetchSongs } from 'redux/actions/song';

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
      <SongList />
    </div>
  );
};

export default Main;
