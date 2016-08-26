juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/playlist.html',
    controller: 'PlaylistCtrl'
    // resolve: {
    //   allArtists: function (ArtistFactory) {
    //     return ArtistFactory.fetchAll();
    //   }
    // }
  });
});


juke.config(function ($stateProvider) {

  $stateProvider.state('singlePlaylist', {
    url: '/playlists/:playlistId',
    templateUrl: '/js/playlist/onePlaylist.html',
    controller: 'SinglePlaylistCtrl'
    // resolve: {
    //   allArtists: function (ArtistFactory) {
    //     return ArtistFactory.fetchAll();
    //   }
    // }
  });
});