'use strict';

$(function() {

    var $player1Spinner = $('#player1Spinner');
    var $player2Spinner = $('#player2Spinner');
    var $player1Name = $('#player1Name');
    var $player2Name = $('#player2Name');
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');
    var $player1Flag = $('player1Flag');
    var $player2Flag = $('player2Flag');
    var $player1Container = $('#player1 > .playerContainer');
    var $player2Container = $('#player2 > .playerContainer');

    var $player1ScoreHighlight1 = $('#player1ScoreHighlight1');
    var $player1ScoreHighlight2 = $('#player1ScoreHighlight2');
    var $player1ScoreHighlight3 = $('#player1ScoreHighlight3');

    var $player2ScoreHighlight1 = $('#player2ScoreHighlight1');
    var $player2ScoreHighlight2 = $('#player2ScoreHighlight2');
    var $player2ScoreHighlight3 = $('#player2ScoreHighlight3');

    var player1ClipPath;
    var player2ClipPath;
    var offset = 200;

    //var $replicantCurrentTheme = nodecg.replicant(replicantCurrentTheme);

    var $tournamentRound = $('#tournamentRound');


    // Contains two objects, player 1 at value[0] and player 2 at value[1]
    var replicantCurrentMatchData = nodecg.Replicant("replicantCurrentMatch");
    var previousMatchData = new Object();

    initialize();

    // Triggered every time update or swap button in player control panel is pressed, and on init
    replicantCurrentMatchData.on('change', (newValue, oldValue) => {
        console.log(`replicant data for current match changed from ${oldValue} to ${newValue}`);

        updateScreen();
    });

    nodecg.listenFor("updateScore", function(side) {
        updateScore(side);
    });

    function updateScreen() {

        if(replicantCurrentMatchData.value[0].name != previousMatchData.value[0].name)
        {
            newPlayer(1);
        }
        if(replicantCurrentMatchData.value[1].name != previousMatchData.value[1].name)
        {
            newPlayer(2);
        }

        $player1Score.text(replicantCurrentMatchData.value[0].score);
        $player2Score.text(replicantCurrentMatchData.value[1].score);

        $player1Flag.text(replicantCurrentMatchData.value[0].flag);
        $player2Flag.text(replicantCurrentMatchData.value[1].flag);

        $tournamentRound.text(replicantCurrentMatchData.value[2]);

        // Deep copy using JQuery
        previousMatchData = jQuery.extend(true, {}, replicantCurrentMatchData);
    }

    function newPlayer(side) {
        switchName(side);
    }
    
    function initialize() {
        previousMatchData.value = [{name:"", score:"", flag:""}, {name:"", score:"", flag:""}]
        $player1Name.text(" ba");
        $player2Name.text("ba ");
        $player1Score.text(" ");
        $player2Score.text(" ");
        $player1Flag.text(" ");
        $player2Flag.text(" ");
    }

    function switchName(side) {
        if(side == 1) {

            $player1Spinner.toggleClass('rotatingCCW', true);

            $player1Container.animate({  now: '+=400' },
            {
                duration:1500,
                easing:'easeInOutQuart',
                step: function(now,fx) {
                    player1ClipPath = 0 + ' ' + (now - offset) + 'px ' + 0 + ' ' + 0;
                    $player1Container.css('left', now)
                    $player1Container.css({"clip-path": 'inset(' + player1ClipPath + ')'});
                },
                complete: function() {

                    $player1Spinner.toggleClass('rotatingCCW', false);
                    $player1Spinner.toggleClass('backToZero', true);
                    $player1Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        easing: 'easeOutBack',
                        step: function(now,fx) {
                            $player1Name.text(replicantCurrentMatchData.value[0].name);
                            player1ClipPath = 0 + ' ' + (now - offset) + 'px ' + 0 + ' ' + 0;
                            $player1Container.css('left', now)
                            $player1Container.css({"clip-path": 'inset(' + player1ClipPath + ')'});
                        },
                        complete: function() {
                            $player1Spinner.toggleClass('backToZero', false);
                        }
                    })
                }
            });
        
        }
        if(side == 2) {
            $player2Container.animate({  now: '+=400' },
            {
                duration:1500,
                easing:'easeInOutQuart',
                step: function(now,fx) {
                    player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + (now - offset) + 'px ';
                    $player2Container.css('left', -now)
                    $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                },
                complete: function() {
                    $player2Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        easing: 'easeOutBack',
                        step: function(now,fx) {
                            $player2Name.text(replicantCurrentMatchData.value[1].name);
                            player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + (now - offset) + 'px ';
                            $player2Container.css('left', -now)
                            $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                        }
                    })
                }
            });
        }
    }

    function winningScore(side) {
        if(side == 1) {

        }
        else if(side == 2){

        }
    }

    nodecg.listenFor("smashgg-sendrounddata", function() {

    });
});