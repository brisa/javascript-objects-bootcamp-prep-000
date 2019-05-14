let playlist = {"Chris Helan":'Flight & Whirl'}


function updatePlaylist(playlist, artistName, songTitle){
  playlist = {playlist, artistName, songTitle}
  return playlist
}