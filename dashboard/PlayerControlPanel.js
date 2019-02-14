'use strict';
$(function () {

    // Main navigational buttons
    var $updateButton = $('#updateButton');
    var $swapButton = $('#swapButton');
    var $player1AddPointButton = $('#player1AddPoint');
    var $player2AddPointButton = $('#player2AddPoint');
    var $player1DropdownMenu = $('#p1ayer1NameDropdown');
    var $player2DropdownMenu = $('#p1ayer2NameDropdown');
    var $player1Score = $('#player1Score');
    var $player2Score = $('#player2Score');
    // An array consisting of all current player objects
    var replicantPlayerData = nodecg.Replicant("replicantPlayerData");
    // Replicant for current match, consists of two players and their scores
    var replicantCurrentMatchData = nodecg.Replicant("replicantCurrentMatch")


    var $operationResult = $('#operationResult');



    $updateButton.button();
    $swapButton.button();

    $player1AddPointButton.button({
        icons: { primary: "ui-icon-plus"},
        text: false
    });

    $player2AddPointButton.button({
        icons: { primary: "ui-icon-plus"},
        text: false
    });

    $player1AddPointButton.click(function () {
		$player1Score.val(Number($player1Score.val()) + 1);
		updateMatchStats();
    });
    $player2AddPointButton.click(function () {
		$player2Score.val(Number($player2Score.val()) + 1);
		updateMatchStats();
    });

    async function updateMatchStats() {
        var currentMatch = [];
        var player1Object = new Object();
        var player2Object = new Object();

        player1Object.name = $player1DropdownMenu.val();
        player1Object.score = $player1Score.val();

        player2Object.name = $player2DropdownMenu.val();
        player2Object.score = $player2Score.val();

        currentMatch = [player1Object, player2Object];

        replicantCurrentMatchData.value = currentMatch;

        NodeCG.waitForReplicants(replicantCurrentMatchData).then(() => {
            console.log(replicantCurrentMatchData.value)
        });

    }

    function getPlayers() {

    }

    $updateButton.click(function() {
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

        updateMatchStats();
	});
})