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

    var matchLimitScore;

    var player1ClipPath;
    var player2ClipPath;
    var offset = 200;

    //var $replicantCurrentTheme = nodecg.replicant(replicantCurrentTheme);

    var $tournamentRound = $('#tournamentRound');
    var $tournamentRoundText = $('#tournamentRoundText');


    // Contains two objects, player 1 at value[0] and player 2 at value[1]
    var replicantCurrentMatchData = nodecg.Replicant("replicantCurrentMatch");
    var previousMatchData = new Object();

    initialize();

    // Triggered every time update or swap button in player control panel is pressed, and on init
    replicantCurrentMatchData.on('change', (newValue, oldValue) => {
        updateScreen();
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

        matchLimitScore = replicantCurrentMatchData.value[3];

        setScores();

        $tournamentRoundText.text(replicantCurrentMatchData.value[2]);

        // Deep copy using JQuery
        previousMatchData = jQuery.extend(true, {}, replicantCurrentMatchData);
    }

    function newPlayer(side) {
        switchName(side);
    }
    
    function initialize() {
        previousMatchData.value = [{name:"", score:"", flag:""}, {name:"", score:"", flag:""}]
        $player1Name.text(" ");
        $player2Name.text(" ");
        $player1Score.text(" ");
        $player2Score.text(" ");
        $player1Flag.text(" ");
        $player2Flag.text(" ");
    }

    function switchName(side) {
        if(side == 1) {

            $player1ScoreHighlight1.animate({
                top: "-200px",
            }, 600, 'easeInExpo', function() {
                $player1ScoreHighlight1.css("left", "-100px");
            });
            $player1ScoreHighlight2.animate({
                top: "-200px",
            }, 700, 'easeInExpo', function() {
                $player1ScoreHighlight2.css("left", "-100px");
            });
            $player1ScoreHighlight3.animate({
                top: "-200px",
            }, 800, 'easeInExpo', function() {
                $player1ScoreHighlight3.css("left", "-100px");
            });

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

            $player2ScoreHighlight1.animate({
                top: "-200px",
            }, 600, 'easeInExpo', function() {
                $player2ScoreHighlight1.css("right", "-100px");
            });
            $player2ScoreHighlight2.animate({
                top: "-200px",
            }, 700, 'easeInExpo', function() {
                $player2ScoreHighlight2.css("right", "-100px");
            });
            $player2ScoreHighlight3.animate({
                top: "-200px",
            }, 800, 'easeInExpo', function() {
                $player2ScoreHighlight3.css("right", "-100px");
            });

            $player2Spinner.toggleClass('rotatingCW', true);

            $player2Container.animate({  now: '+=400' },
            {
                duration:1500,
                easing:'easeInOutQuart',
                step: function(now,fx) {
                    player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + (now - offset) + 'px ';
                    $player2Spinner.toggleClass('rotatingCW', true);
                    $player2Container.css('left', -now)
                    $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                },
                complete: function() {
                    $player2Spinner.toggleClass('rotatingCW', false);
                    $player2Spinner.toggleClass('backToZero', true);
                    $player2Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        easing: 'easeOutBack',
                        step: function(now,fx) {
                            $player2Name.text(replicantCurrentMatchData.value[1].name);
                            player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + (now - offset) + 'px ';
                            $player2Container.css('left', -now)
                            $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                        },
                        complete: function() {
                            $player2Spinner.toggleClass('backToZero', false);
                        }
                    })
                }
            });
        }
    }

    function setScores() {
        if(matchLimitScore < 2) {
            $player1ScoreHighlight1.css("visibility", "visible");
            $player1ScoreHighlight2.css("visibility", "hidden");
            $player1ScoreHighlight3.css("visibility", "hidden");

            $player2ScoreHighlight1.css("visibility", "visible");
            $player2ScoreHighlight2.css("visibility", "hidden");
            $player2ScoreHighlight3.css("visibility", "hidden");

            if($player1Score.text() > 0)
            {
                $player1ScoreHighlight1.toggleClass("pointScored", true);
            }
            if($player2Score.text() > 0)
            {
                $player2ScoreHighlight1.toggleClass("pointScored", true);
            }
        }
        else if(matchLimitScore < 3) {
            $player1ScoreHighlight1.css("visibility", "visible");
            $player1ScoreHighlight2.css("visibility", "visible");
            $player1ScoreHighlight3.css("visibility", "hidden");

            $player2ScoreHighlight1.css("visibility", "visible");
            $player2ScoreHighlight2.css("visibility", "visible");
            $player2ScoreHighlight3.css("visibility", "hidden");

            if($player1Score.text() == 1)
            {
                $player1ScoreHighlight1.toggleClass("pointScored", true);
            }
            else  if($player1Score.text() == 2)
            {
                $player1ScoreHighlight1.toggleClass("pointScored", true);
                $player1ScoreHighlight2.toggleClass("pointScored", true);
            }

            if($player2Score.text() == 1)
            {
                $player2ScoreHighlight1.toggleClass("pointScored", true);
            }
            else  if($player2Score.text() == 2)
            {
                $player2ScoreHighlight1.toggleClass("pointScored", true);
                $player2ScoreHighlight2.toggleClass("pointScored", true);
            }
        }
        else if(matchLimitScore < 4) {
            $player1ScoreHighlight1.css("visibility", "visible");
            $player1ScoreHighlight2.css("visibility", "visible");
            $player1ScoreHighlight3.css("visibility", "visible");

            $player2ScoreHighlight1.css("visibility", "visible");
            $player2ScoreHighlight2.css("visibility", "visible");
            $player2ScoreHighlight3.css("visibility", "visible");

            if($player1Score.text() == 1)
            {
                $player1ScoreHighlight1.toggleClass("pointScored", true);
            }
            else  if($player1Score.text() == 2)
            {
                $player1ScoreHighlight1.toggleClass("pointScored", true);
                $player1ScoreHighlight2.toggleClass("pointScored", true);
            }
            else  if($player1Score.text() == 3)
            {
                $player1ScoreHighlight1.toggleClass("pointScored", true);
                $player1ScoreHighlight2.toggleClass("pointScored", true);
                $player1ScoreHighlight3.toggleClass("pointScored", true);
            }
            if($player2Score.text() == 1)
            {
                $player2ScoreHighlight1.toggleClass("pointScored", true);
            }
            else  if($player2Score.text() == 2)
            {
                $player2ScoreHighlight1.toggleClass("pointScored", true);
                $player2ScoreHighlight2.toggleClass("pointScored", true);
            }
            else  if($player2Score.text() == 3)
            {
                $player2ScoreHighlight1.toggleClass("pointScored", true);
                $player2ScoreHighlight2.toggleClass("pointScored", true);
                $player2ScoreHighlight3.toggleClass("pointScored", true);
            }
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

    nodecg.listenFor("newMatch", function() {
        newMatch();
    });

    nodecg.listenFor("updateScore", function(side) {
        //updateScore(side);
    });

    function newMatch() {

        $player1ScoreHighlight1.css("top", "0px");
        $player1ScoreHighlight2.css("top", "0px");
        $player1ScoreHighlight3.css("top", "0px");
        $player2ScoreHighlight1.css("top", "0px");
        $player2ScoreHighlight2.css("top", "0px");
        $player2ScoreHighlight3.css("top", "0px");

        $player1ScoreHighlight1.toggleClass("pointScored", false);
        $player1ScoreHighlight2.toggleClass("pointScored", false);
        $player1ScoreHighlight3.toggleClass("pointScored", false);

        $player2ScoreHighlight1.toggleClass("pointScored", false);
        $player2ScoreHighlight2.toggleClass("pointScored", false);
        $player2ScoreHighlight3.toggleClass("pointScored", false);

        $tournamentRound.animate({
            top: "47px"
        }, 2000, 'easeInOutExpo', function() {
                $tournamentRound.animate({top: "0px"}, 6000, 'easeInOutElastic')
        });

        $player1ScoreHighlight1.animate({
            left: "240px"
        }, 500, 'easeInOutExpo', function() {
            $player1ScoreHighlight2.animate({
                left: "170px"
            }, 500, 'easeInOutExpo', function() {
                $player1ScoreHighlight3.animate({
                    left: "100px"
                }, 500, 'easeInOutExpo');
            });
        });

        $player2ScoreHighlight1.animate({
            right: "240px"
        }, 500, 'easeInOutExpo', function() {
            $player2ScoreHighlight2.animate({
                right: "170px"
            }, 500, 'easeInOutExpo', function() {
                $player2ScoreHighlight3.animate({
                    right: "100px"
                }, 500, 'easeInOutExpo');
            });
        });
    }
});