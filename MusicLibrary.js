const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003"},
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952"}
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

function printPlaylists() {
  for (const playlistId in library.playlists) {
    const playlist = library.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
  }
}

function printTracks() {
  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
}

function printPlaylist(playlistId) {
  const playlist = library.playlists[playlistId];
  console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);

  for (const trackId of playlist.tracks) {
    const track = library.tracks[trackId];
    console.log(`   ${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
}

function addTrackToPlaylist(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}

function addTrack(id, name, artist, album) {
  library.tracks[id] = { id, name, artist, album };
}

function addPlaylist(id, name) {
  library.playlists[id] = { id, name, tracks: [] };
}

function printSearchResults(query) {
  const results = [];

  for (const trackId in library.tracks) {
    const track = library.tracks[trackId];
    if (track.name.includes(query) || track.artist.includes(query) || track.album.includes(query)) {
      results.push(track);
    }
  }

  console.log(`Search results for '${query}':`);
  for (const track of results) {
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
  }
}

// Test cases
printPlaylists();
printTracks();
printPlaylist('p01');
addTrackToPlaylist('t03', 'p01');
addTrack('t04', 'New Track', 'New Artist', 'New Album');
addPlaylist('p03', 'New Playlist');
printSearchResults('Jonathan Coulton');
