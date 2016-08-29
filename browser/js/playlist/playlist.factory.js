juke.factory('PlaylistFactory', function ($http) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.getPlaylists = function () {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };
  PlaylistFactory.getPlaylist = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) {
      var playlist = response.data
      return playlist;
    });
  };

  PlaylistFactory.addSong = function(playlistId, song){
        console.log(song);
    return $http.post('/api/playlists/:'+playlistId+'/'+song)
           .then(function(response){
            console.log("response in factory: "+response);
            return response;
           });     
      }

  return PlaylistFactory;

});