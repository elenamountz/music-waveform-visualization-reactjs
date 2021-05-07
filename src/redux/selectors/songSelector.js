export const selectSongList = (state) => state.songs.list;
export const selectSongListLoading = (state) => state.songs.listIsLoading;
export const selectSongListError = (state) => state.songs.listError;

export const selectCurrentTrack = (state) => state.songs.trackInfo;