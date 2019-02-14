'use strict';
$(function () {
	// Tournament Fetcher
    var $smashggTournamentSelector = $('#smashggTournamentSelector');
	var $smashggTournamentName = $('#smashggTournamentName');
	var $smashggUpdateButton = $('#smashggUpdateButton');
	
	// Event Fetcher
	var $smashggEvents = $('#smashgg-events');
	var $smashggEventDropdown = $('#smashggTournamentEvents');
	var $smashggEventButton = $('#smashggEventButton');
	
	// Phase Fetcher
	var $smashggPhases = $('#smashgg-phases');
	var $smashggPhasesDropdown = $('#smashggEventPhases');
	var $smashggPhaseGroupsDropdown = $('#smashggPhaseGroups');
    var $smashggPhaseGroupButton = $('#smashggPhaseGroupButton');

	// Phase Groups
	//var $smashggPhaseGroups = $('#smashgg-phasegroup');
    var $smashggGroupDetails = $('#smashgg-group');
    var $smashggGroupPlayerInfo = $('#smashggGroupPlayerInfo');

	// Operation result
	var $operationResult = $('#operationResult');
	
    var $sendMatchButtons = {};
	
	// Initialize jQuery UI elements
    $smashggTournamentSelector.hide();
	$smashggUpdateButton.button();
	
	//$smashggEventDropdown.selectmenu({ style: 'dropdown' });
	$smashggEventButton.button();
	$smashggEvents.hide();

    $smashggPhaseGroupButton.button();
    $smashggPhases.hide();

    $smashggGroupDetails.hide();
	

	//$smashggPhaseGroups.hide();

	/************************************************************************************
	 * Persistant Data
	************************************************************************************/
	var replicantTournamentData = nodecg.Replicant("replicantTournamentData");
    replicantTournamentData.on("change", function (newValue, oldValue) {

		if (typeof newValue !== 'undefined' && newValue != '') {
			updateTournamentData(newValue);
			return;
		}
		//else if (typeof oldValue === 'undefined' || typeof newValue === 'undefined') {
		//	return;
		//}
    });

	/************************************************************************************
	 * Helper Functions
	************************************************************************************/
    function initializeTournamentDropdown(tournaments) {

    }

    function resumeTournament(tournament) {

    }

    function updateGroupDropdown(groups, phase) {
        // Loop through groups and find first group with same id as phase,
        // then read as many phases as phase.groupCount

        var groupsFirstId = 0;
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].phaseId === phase.id) {
                groupsFirstId = i;
                break;
            }
        }
        if (groupsFirstId === groups.length) {
            // No group with matching phase-id found, error
            setOperationResult("No group with matching phase.id: " + phase.id + " was found!", false);
        }

        var g = [];
        for (var i = 0; i < phase.groupCount; i++) {
            g.push(groups[i + groupsFirstId]);
        }

        //console.log("Compact groups: ", g);

        if (g.length <= 0) { } // Don't know if this can happen
        else if (g.length == 1) {
            // No need for dropdown, just display details for group
            $smashggPhaseGroupsDropdown.html("<option value='" + g[0].id + "'>" + g[0].displayIdentifier + "</option>");
            $smashggPhaseGroupsDropdown.hide();
        } else {
            // Display dropdown to select group
            var listItems = "";
            for (var i = 0; i < g.length; i++) {
                listItems += "<option value='" + g[i].id + "'>" + g[i].displayIdentifier + "</option>";
            }
            $smashggPhaseGroupsDropdown.html(listItems);
            $smashggPhaseGroupsDropdown.show();
        }
    }



    function updateTournamentData(newValue) {
        //console.log("updateTournamentData: ", newValue);
        //console.log("tournament: ", newValue.tournament);
        if (newValue && newValue.tournament) {
            //console.log("Hello!!!!!");
            var listItems = "";
            for (var i = 0; i < newValue.tournament.length; i++) {
                var t = newValue.tournament[i].entities.tournament;
                listItems += "<option value='" + t.id + "'>" + t.name + "</option>";
            }

            $smashggTournamentSelector.html(listItems);
            $smashggTournamentSelector.show();
        }

        if (newValue && newValue.name) {
            $smashggTournamentName.val(newValue.name);
        }
    }

    function updatePhasesDropdown(phases) {
        if (phases.length <= 0) {
            var listItems = "<option value='None'>" + "None" + "</option>";
            $smashggPhasesDropdown.html(listItems);

            return;
        }

        var listItems = "";
        for (var i = 0; i < phases.length; i++) {
            listItems += "<option value='" + phases[i].id + "'>" + phases[i].name + "</option>";
        }

        $smashggPhasesDropdown.html(listItems);
    }

    function updateEventsDropdown(events) {
        if (events.length <= 0) {
            var listItems = "<option value='None'>" + "None" + "</option>";
            $smashggEventDropdown.html(listItems);
            //$smashggEventDropdown.selectmenu("refresh");

            return;
        }
        var listItems = "";
        for (var i = 0; i < events.length; i++) {
            listItems += "<option value='" + events[i].id + "'>" + events[i].name + "</option>";
        }

        $smashggEventDropdown.html(listItems);
        //$smashggEventDropdown.selectmenu("refresh");
    }

    function setOperationResult(text, isOperationPositive) {
        if (isOperationPositive) {
            $operationResult.css('color', 'green');
        }
        else {
            $operationResult.css('color', 'red');
        }
        $operationResult.html(text);
    }

    function createTournamentContainer() {
        return { tournament: [] }
    }

	/************************************************************************************
	 * jQuery event functions
	************************************************************************************/
    $smashggUpdateButton.click(function () {
        if ($smashggTournamentName.val() != '') { // Makes HTTP call to try and download new tournament
            nodecg.sendMessage("smashgg-gettournament", $smashggTournamentName.val(), function (error, response, body) {

                var tournamentContainer = replicantTournamentData.value;
                //console.log("tournamentContainer: " + tournamentContainer);
                if (typeof tournamentContainer === 'undefined' || tournamentContainer == "" || tournamentContainer === null) {
                    tournamentContainer = createTournamentContainer();
                }

                if (!response || (response && response.statusCode != 200)) {
                    if (error)
                        //console.log(error);

                    setOperationResult("Couldn't fetch tournament '" + $smashggTournamentName.val() + "' from smash.gg.", false);
                    return;
                }

                var b = JSON.parse(body);

                setOperationResult("Fetched tournament successfully", true);
                tournamentContainer.tournament.push(b);
                replicantTournamentData.value = tournamentContainer;

                var events = b.entities.event;
                events.forEach(function (entry) {
                    //console.log(entry.name);
                });

                //console.log("error:", error);
                //console.log("statusCode:", response && response.statusCode);
                var b = JSON.parse(body);
                //console.log("body:", b.entities);

                updateEventsDropdown(events);

                $smashggEvents.show();
            });
        }
        else { // No tournament specifed to download, try to resume the one in the selectmenu
            var ts = $smashggTournamentSelector.val();
            if (typeof ts !== 'undefined' || ts !== '') {
                // Should be safe to access this without checking for undefined/null, since $smashggTournamentSelector is populated from this
                var tournamentContainer = replicantTournamentData.value;
                var tournamentToLoad;

				// Find the tournament matching the one in the selectmenu
                tournamentContainer.tournament.forEach(function (item) {
                    if (item.entities.tournament.id == ts) {
                        tournamentToLoad = item;
                    }
                });

				// Extract the events from it, and populate event-section
                var events = tournamentToLoad.entities.event;
                updateEventsDropdown(events);
                $smashggEvents.show();

                setOperationResult("Resumed tournament successfully", true);
            }
            else {
                setOperationResult("No tournament specified to load!", false);
            }
        }
    }); // Download/Resume tournament
    $smashggEventButton.click(function () {
        nodecg.sendMessage("smashgg-getevent", $smashggEventDropdown.val(), function (error, response, body) {
            var b = JSON.parse(body);
            //console.log("Event " + $smashggEventDropdown.val() + " - ", b);

            var groups = b.entities.groups;
            var phases = b.entities.phase;
            updatePhasesDropdown(phases);

            var p = $.grep(phases, function (e) { return e.id == $smashggPhasesDropdown.val(); });
            //console.log(groups, p[0]); // Perhaps not safe, consider checking if p[0] exists

            updateGroupDropdown(groups, p[0]);

            $smashggPhases.show();
        });
    });
    $(document).on('change', '#smashggEventPhases', function () {
        // Oh ffs... don't do this, cache the result from smashgg-getevent in $smashggEventButton.click( ... )
        nodecg.sendMessage("smashgg-getevent", $smashggEventDropdown.val(), function (error, response, body) {

            var b = JSON.parse(body);
            var groups = b.entities.groups;
            var phases = b.entities.phase;

            var p = $.grep(phases, function (e) { return e.id == $smashggPhasesDropdown.val(); });
            //console.log(groups, p[0]); // Perhaps not safe, consider checking if p[0] exists

            updateGroupDropdown(groups, p[0]);
        });
    });
    $smashggPhaseGroupButton.click(function () {
        nodecg.sendMessage("smashgg-getphasegroup", $smashggPhaseGroupsDropdown.val(), function (error, response, body) {
            var b = JSON.parse(body);
			
            var tableItems = "<tr><th>Tournament round</th><th>Player 1</th><th>Player 2</th><th>Send to control panel</th><th>Match played</th></tr>";
            var sets = b.entities.sets;
            var players = b.entities.player;
            nodecg.sendMessage("smashgg-sendplayerdata", players);
            sets.forEach(function (item) {
                var player1 = $.grep(players, function (e) { return e.entrantId == item.entrant1Id; })[0];
                var player2 = $.grep(players, function (e) { return e.entrantId == item.entrant2Id; })[0];

                if (player1 && player2) {
                    var control = "<input type='button' id='sendmatch-" + item.id + "'>";
                    var newItem = "<tr><td>" + item.fullRoundText + "</td><td>" + player1.gamerTag + "</td><td>" + player2.gamerTag + "</td><td>" + control + "</td><td></input><input type='checkbox'></input></tr>";
                    tableItems += newItem;
                }
            });

            $smashggGroupPlayerInfo.html(tableItems);


            sets.forEach(function(item) {
                var e = $('#sendmatch-' + item.id);
                
                if (typeof e !== 'undefined' && e !== null) {
                    $sendMatchButtons[e.id] = e;
                    e.button();
                    e.click(function() {
                        // Send data about this match to PlayerControlDashboard
                        var currentMatch = $.grep(sets, function(e) { return e.id == item.id; })[0];
                        var player1 = $.grep(players, function (e) { return e.entrantId == currentMatch.entrant1Id; })[0];
                        var player2 = $.grep(players, function (e) { return e.entrantId == currentMatch.entrant2Id; })[0];

                        nodecg.sendMessage("smashgg-setplayersactive", { p1: player1, p2: player2 });
                        setOperationResult("Sent player data to Player Control Dashboard", true);
                    });
                }
            });

            $smashggGroupDetails.show();
        });
    });

	
	/************************************************************************************
	 * Code to run at start
	************************************************************************************/
 //   if (tournamentPersistantDataReplicant && tournamentPersistantDataReplicant.value) {
 //       initializeTournamentDropdown(tournamentPersistantDataReplicant.value);
	//	//$smashggTournamentName.val( tournamentPersistantDataReplicant.value.name );
	//}
});
