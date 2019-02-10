import { Component, OnInit } from "@angular/core";
import { MatchService } from "../omnilays.match.service";
import { Match } from '../omnilays.match.model';

@Component({
    selector: 'dashboard',
    templateUrl: './omnilays.dashboard.html',
    providers: [MatchService]
})
export class DashboardComponent{

    matches: Match[]

    constructor(private matchService:MatchService) { }

    // ngOnInit(){
    //     this.player1 = this.matchService.getMatchByID(1).player1.name;
    //     this.title = "Runboard"
    //     this.player2 = this.matchService.getMatchByID(1).player2.name;
    // }

    player1 = this.matchService.getCurrentMatch().player1.name
    title = this.matchService.getCurrentMatch().tournamentRound
    player2 = this.matchService.getCurrentMatch().player2.name


}