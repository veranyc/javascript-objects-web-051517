let playlist = {
  'Radiohead': 'Fake Plastic Trees',
  'David Bowie': 'China Girl'
}

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  //removes artistName from playlist
  delete playlist[artistName]
  return playlist
}
