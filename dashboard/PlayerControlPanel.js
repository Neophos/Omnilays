'use strict';
$(function () {

    // Main navigational buttons
    var $updateButton = $('#updateButton');
    var $swapButton = $('#swapButton');
    var $newMatchButton = $('#newMatchButton');
    var $player1AddPointButton = $('#player1AddPoint');
    var $player2AddPointButton = $('#player2AddPoint');
    var $player1DropdownMenu = $('#p1ayer1NameDropdown');
    var $player2DropdownMenu = $('#p1ayer2NameDropdown');
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');
    var $player1Flag = $('#player1Flag');
    var $player2Flag = $('#player2Flag');
    var $tournamentRound = $('#tournamentRound');
    var $matchLimitCounter = $('#matchLimitCounter');
    var $matchLimitAddButton = $('#matchLimitAdd');
    var $matchLimitLowerButton = $('#matchLimitLower');
    // An array consisting of all current player objects
    var replicantPlayerData = nodecg.Replicant("replicantPlayerData");
    // Replicant for current match, consists of two players, the current tournament round and the set match limit
    var replicantCurrentMatchData = nodecg.Replicant("replicantCurrentMatch")


    var $operationResult = $('#operationResult');

    $updateButton.button();
    $swapButton.button();
    $newMatchButton.button();

    $player1AddPointButton.button({
        icons: { primary: "ui-icon-plus"},
        text: false
    });

    $player2AddPointButton.button({
        icons: { primary: "ui-icon-plus"},
        text: false
    });

    $matchLimitAddButton.button({
        icons: { primary: "ui-icon-plus"},
        text: false
    });

    $matchLimitLowerButton.button({
        icons: { primary: "ui-icon-minus"},
        text: false
    });

    $player1AddPointButton.click(function () {
        if($player1Score.val() < $matchLimitCounter.val())
        {
            $player1Score.val(Number($player1Score.val()) + 1);
            updateMatchStats();
            nodecg.sendMessage("updateScore", 1);
        }
    });
    $player2AddPointButton.click(function () {
        if($player2Score.val() < $matchLimitCounter.val())
        {
            $player2Score.val(Number($player2Score.val()) + 1);
            updateMatchStats();
            nodecg.sendMessage("updateScore", 2);
        }
    });

    $matchLimitAddButton.click(function() {
        $matchLimitCounter.val(Number($matchLimitCounter.val()) + 1);
        updateMatchStats();
    });

    $matchLimitLowerButton.click(function() {
        $matchLimitCounter.val(Number($matchLimitCounter.val()) - 1);
        if($matchLimitCounter.val() < 1)
        {
            $matchLimitCounter.val(1);
        }
        updateMatchStats();
    });

    function updateMatchStats() {
        var currentMatch = [];
        var player1Object = new Object();
        var player2Object = new Object();

        player1Object.name = $player1DropdownMenu.val();
        player1Object.score = $player1Score.val();
        player1Object.flag = $player1Flag.val();

        player2Object.name = $player2DropdownMenu.val();
        player2Object.score = $player2Score.val();
        player2Object.flag = $player2Flag.val();

        console.log(player1Object.score);

        currentMatch = [player1Object, player2Object, $tournamentRound.val(), $matchLimitCounter.val()];

        replicantCurrentMatchData.value = currentMatch;

        NodeCG.waitForReplicants(replicantCurrentMatchData).then(() => {
            //console.log(replicantCurrentMatchData.value)
        });
    }

    function swapPlayers() {
        var temp = [$player1DropdownMenu.val(), $player1Score.val(), $player1Flag.val()];
        $player1DropdownMenu.val($player2DropdownMenu.val());
        $player1Score.val($player2Score.val());
        $player1Flag.val($player2Flag.val());

        $player2DropdownMenu.val(temp[0]);
        $player2Score.val(temp[1]);
        $player2Flag.val(temp[2]);

        updateMatchStats();
    }

    function getPlayers() {

    }

    $updateButton.click(function() {
        updateMatchStats();
    });

    $swapButton.click(function() {
        swapPlayers();
    });

    $newMatchButton.click(function() {
        nodecg.sendMessage("newMatch");
        $player1Score.val(0);
        $player2Score.val(0);
        updateMatchStats();
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    nodecg.listenFor('smashgg-sendplayerdata', function(value, callback) {
        var playerNames = new Array();

        for (let i = 0; i < value.length; i++) {
            playerNames.push(value[i].gamerTag);
        }

        $player1DropdownMenu.empty();
        $player2DropdownMenu.empty();

        $.each(playerNames, function (index, item) {
            $player1DropdownMenu.append(
                $('<option>', {
                    text: item
                }, '</option>'))

            $player2DropdownMenu.append(
                $('<option>', {
                    text: item
                }, '</option>'))
        });
    });

	nodecg.listenFor('smashgg-setplayersactive', function(value, callback) {
        $player1DropdownMenu.val(value.p1.gamerTag);
        $player2DropdownMenu.val(value.p2.gamerTag);
        $player1Score.val(0);
        $player2Score.val(0);
        $player1Flag.val(value.p1.flag);
        $player2Flag.val(value.p2.flag);

        updateMatchStats();
	});
})