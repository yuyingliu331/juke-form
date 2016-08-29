juke.controller('PlaylistCtrl', function($scope, PlaylistFactory, $state){
    $scope.playList = {};
    $scope.createPlaylist = function(data) {
    	 PlaylistFactory.create(data)
    	 .then(function(playlist) {
    	 	$scope.playList.name = "";
    	 	$state.go('singlePlaylist', { playlistId: playlist.id });
    	 })
    }
})

juke.controller('SidePlaylistCtrl', function($scope, $log, PlaylistFactory){
   
    PlaylistFactory.getPlaylists() 
    .then(function(result) {
    	$scope.playlists = result;
    })
    .catch($log.error);
})


juke.controller('SinglePlaylistCtrl', function($scope, $log, PlaylistFactory, SongFactory, $stateParams){
    PlaylistFactory.getPlaylist($stateParams.playlistId)
    .then(function(result) {
    	$scope.playlist = result;
    })
    .catch($log.error);
     
    SongFactory.fetchAll()
    .then(function(songs) {
        $scope.songs = songs;
    }).catch($log.error);

    $scope.addedSong = function(playlistId, song){
        PlaylistFactory.addSong(playlistId, song) 
        .then(function(result){
             console.log("added song data: ", result);
            return result;
           
        }).catch($log.error);
   }

})