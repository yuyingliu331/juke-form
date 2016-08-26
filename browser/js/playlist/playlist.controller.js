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


juke.controller('SinglePlaylistCtrl', function($scope, $log, PlaylistFactory, $stateParams){
    PlaylistFactory.getPlaylist($stateParams.playlistId)
    .then(function(result) {
    	$scope.playlists = result;
    })
    .catch($log.error);
})