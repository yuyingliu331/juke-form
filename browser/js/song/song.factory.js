'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song.id + '/audio';
      return song;
    },
    getSongs: function () {
    	$http.get('/api/')
    	.then(function(songs){
    		return songs.data;
    	})
    }
  };

});
