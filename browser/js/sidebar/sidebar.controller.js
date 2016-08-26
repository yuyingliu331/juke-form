'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  // nothing to see here for now… state transitions happening with ui-sref!
	$scope.toFrequency = function (str) {
	  str = str || '';
	  return str.split('').reduce(function (freq, char) {
	    char = char.toLowerCase();
	    freq[char] = (freq[char] || 0);
	    freq[char]++;
	    return freq;
	  }, {});
	};
	$scope.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
});
