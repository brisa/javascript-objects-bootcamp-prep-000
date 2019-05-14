let playlist = {artistName:songTitle}
playlist.artistName = 'Rayman'
playlist.songTitle = 'Orchestra Chaos'
playlist.artistName = 'Christophe'
playlist.songTitle = 'Flight & Whirl'
console.log(playlist)

function updatePlaylist(playlist, artistName, songTitle){
  playlist = {playlist, artistName, songTitle}
  return playlist
}