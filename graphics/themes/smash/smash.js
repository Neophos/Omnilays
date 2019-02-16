'use strict'
$(function () {
    var player1ClipPath;
    var player2ClipPath;

    function switchName(side) {
        if(side == 1) {
            $player1Container.animate({  now: '+=400' },
            {
                duration:1500,
                step: function(now,fx) {
                    player1ClipPath = 0 + ' ' + now + 'px ' + 0 + ' ' + 0;
                    $player1Container.css('left', now)
                    $player1Container.css({"clip-path": 'inset(' + player1ClipPath + ')'});
                },
                complete: function() {
                    $player1Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        step: function(now,fx) {
                            console.log('new name');
                            $player1Name.text(replicantCurrentMatchData.value[0].name);
                            player1ClipPath = 0 + ' ' + now + 'px ' + 0 + ' ' + 0;
                            $player1Container.css('left', now)
                            $player1Container.css({"clip-path": 'inset(' + player1ClipPath + ')'});
                        }
                    })
                }
            });
        
        }
        if(side == 2) {
            $player2Container.animate({  now: '+=400' },
            {
                duration:1500,
                step: function(now,fx) {
                    player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + now + 'px ';
                    $player2Container.css('left', -now)
                    $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                },
                complete: function() {
                    $player2Container.animate({  now: '-=400' },
                    {
                        duration:1500,
                        step: function(now,fx) {
                            $player2Name.text(replicantCurrentMatchData.value[1].name);
                            player2ClipPath = 0 + ' ' + 0 + ' ' + 0 + ' ' + now + 'px ';
                            $player2Container.css('left', -now)
                            $player2Container.css({"clip-path": 'inset(' + player2ClipPath + ')'});
                        }
                    })
                }
            });
        }
    }

    function updateScore(side) {
        if(side == 1) {

            $player1ScoreHighlight1.css('visibility', 'hidden');
            $player1ScoreHighlight2.css('visibility', 'hidden');
            $player1ScoreHighlight3.css('visibility', 'hidden');

            if($player1Score.text() >= 1){
                $player1ScoreHighlight1.css('visibility', 'visible');
            }
            if($player1Score.text() >= 2){
                $player1ScoreHighlight1.css('visibility', 'visible');
                $player1ScoreHighlight2.css('visibility', 'visible');
            }
            if($player1Score.text() >= 3){
                $player1ScoreHighlight1.css('visibility', 'visible');
                $player1ScoreHighlight2.css('visibility', 'visible');
                $player1ScoreHighlight3.css('visibility', 'visible');
            }
        }
        else if(side == 2){
            $player2ScoreHighlight1.css('visibility', 'hidden');
            $player2ScoreHighlight2.css('visibility', 'hidden');
            $player2ScoreHighlight3.css('visibility', 'hidden');

            if($player2Score.text() >= 1){
                $player2ScoreHighlight1.css('visibility', 'visible');
            }
            if($player2Score.text() >= 2){
                $player2ScoreHighlight1.css('visibility', 'visible');
                $player2ScoreHighlight2.css('visibility', 'visible');
            }
            if($player2Score.text() >= 3){
                $player2ScoreHighlight1.css('visibility', 'visible');
                $player2ScoreHighlight2.css('visibility', 'visible');
                $player2ScoreHighlight3.css('visibility', 'visible');
            }

        }
    }
});