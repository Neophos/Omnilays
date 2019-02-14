'use strict';

$(function() {

    var $player1Spinner = $('#player1Spinner');
    var $player2Spinner = $('#player2Spinner');
    var $player1Name = $('#player1Name');
    var $player2Name = $('#player2Name');
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');

    // Contains two objects, player 1 at value[0] and player 2 at value[1]
    var replicantCurrentMatchData = nodecg.Replicant("replicantCurrentMatch");
    var previousMatchData = new Object();

    initialize();

    // Triggered every time update or swap button in player control panel is pressed, and on init
    replicantCurrentMatchData.on('change', (newValue, oldValue) => {
        console.log(`replicant data for current match changed from ${oldValue} to ${newValue}`);

        updateScreen();
    });

    function updateScreen() {

        if(replicantCurrentMatchData.value[0].name != previousMatchData.value[0].name)
        {
            newPlayer(1);
        }
        if(replicantCurrentMatchData.value[0].name != previousMatchData.value[1].name)
        {
            newPlayer(2);
        }

        $player1Score.text(replicantCurrentMatchData.value[0].score)
        $player2Score.text(replicantCurrentMatchData.value[1].score)

        // Deep copy using JQuery
        previousMatchData = jQuery.extend(true, {}, replicantCurrentMatchData);
    }

    function newPlayer(side) {
        if(side == 1)
        {
            console.log("hej")
            $player1Name.text(replicantCurrentMatchData.value[0].name);
        }
        else if(side == 2)
        {
            console.log("hopp")
            $player2Name.text(replicantCurrentMatchData.value[1].name);
        }
    }
    
    function initialize() {

        console.log("init");

        previousMatchData.value = [{name:"", score:""}, {name:"", score:""}]
        $player1Name.text(" ba")
        $player2Name.text("abaa ")
        $player1Score.text(" ")
        $player2Score.text(" ")
    }
});