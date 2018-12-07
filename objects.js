var playlist = { 'Rilo Kiley': 'More Adventurous' }

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
 playlist[artistName] = songTitle
 return playlist
=======
  return Object.assign({}, playlist, {[artistName]: songTitle})
>>>>>>> b9a7d832bc420963f07b3aaedcbe8dffbe6c099e
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}