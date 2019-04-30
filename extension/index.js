var request = require('request');
var util = require('util');

var api_url = "https://api.smash.gg/";

module.exports = function(nodecg) {
	nodecg.listenFor('smashgg-gettournament', function(value, callback) {
		callbackCopy = callback;
		request(api_url + '/tournament/' + value + '?expand[]=event', function(error, response, body) {
			callbackCopy(error, response, body);
		});
	});
	
	nodecg.listenFor('smashgg-getevent', function(value, callback) {
		request(api_url + '/event/' + value + '?expand[]=phase&expand[]=groups', callback);
	});

	nodecg.listenFor('smashgg-getphasegroup', function(value, callback) {
        request(api_url + '/phase_group/' + value + '?expand[]=sets&expand[]=entrants&expand[]=standings&expand[]=seeds', callback);
	});
};