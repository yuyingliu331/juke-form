'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      return song;
    },
    fetchAll: function () {
    	return $http.get('/api/songs')    //fetch all need 2 returns here!!!
    	.then(function(songs){            // One is returning the whole http.get request, 
    		return songs.data;              // The other one is returning the result of http get requests. 
    	})
    }
   };

});
