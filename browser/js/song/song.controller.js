juke.controller('SongCtrl', function($scope, $log, SongFactory){
    $scope.getSongs = function() {
    	 SongFactory.getSongs()
    	 .then(function(songs) {
    	 	console.log('songs.data is', songs.data);
    	 	$scope.songs = songs.data;
    	 })
    	 .catch($log.error);
    }
})
