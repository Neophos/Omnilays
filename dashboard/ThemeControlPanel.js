'use strict';
$(function () {
    var $updateButton = $('#updateButton');
    var $themeSelector = $('#themeSelector');
    var $replicantCurrentTheme = nodecg.replicant("replicantCurrentTheme");

    $updateButton.button();

    populateThemes();

    $updateButton.click(function() {
        nodecg.sendMessage("themeSwap");
    });

    function populateThemes() {
        $themeSelector.empty();
    }

});