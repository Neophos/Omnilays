'use strict';
$(function() {

    function switchName(side) {
        if(side == 1) {
            this.$player1Spinner.toggleClass('rotatingCCW', true);
            this.$player1Container.animate({
                top: -100
            }, 1500, function() {

                this.$player1Spinner.toggleClass('rotatingCCW', false);

                this.$player1Spinner.toggleClass('backToZero', true);

                this.$player1Name.text(replicantCurrentMatchData.value[0].name);

                this.$player1Container.animate({top: 0}, 1500, 'easeInOutBack',
                    function() {
                        this.$player1Spinner.toggleClass('backToZero', false);
                    });
            });
            //$player1Flag.attr('class', 'flag flag-' + replicantCurrentMatchData.value[0]);
        
        }
        if(side == 2) {
            this.$player2Spinner.toggleClass('rotatingCW', true);
            this.$player2Container.animate({
                top: -100
            }, 1500, function() {

                this.$player2Spinner.toggleClass('rotatingCW', false);

                this.$player2Spinner.toggleClass('backToZero', true);

                this.$player2Name.text(replicantCurrentMatchData.value[1].name);

                this.$player2Container.animate({top: 0}, 1500, 'easeInOutBack',
                    function() {
                        this.$player2Spinner.toggleClass('backToZero', false);
                    });
            });
        }
    }
});