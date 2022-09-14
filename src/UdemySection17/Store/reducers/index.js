import { combineReducers } from "redux";

export const songReducers = () => {
  return [
    {
      title: "Ek tera piyar",
      duration: "4:05",
    },
    {
      title: "All star",
      duration: "2:30",
    },
    {
      title: "Saari dunya bekar",
      duration: "5:15",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

combineReducers({
  songs: songReducers,
  selectedSong: selectedSongReducer,
});
