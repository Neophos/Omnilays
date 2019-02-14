import { Component, OnInit, Input, OnChanges, DoCheck } from "@angular/core";
import { MatchService } from "../matchservice/omnilays.match.service";
import { Match } from '../omnilays.match.model';
import { MatchScreenComponent } from '../matchscreen/omnilays.matchscreen';

@Component({
    selector: 'dashboard',
    templateUrl: './omnilays.dashboard.html'
})
export class DashboardComponent implements OnInit{

    matches = this.matchService.getMatches()
    currentMatch: Match

    constructor(private matchService:MatchService) {
        
     }


    ngOnInit() {
        this.currentMatch = this.matchService.getCurrentMatch()
    }

    Update(){
        this.currentMatch = this.matchService.getCurrentMatch()
    }

    changeMatch(id: number) {
        console.log("changed match to " + this.matchService.getMatchByID(id).player1.name)
        this.matchService.setCurrentMatch(id)
        this.Update()
    }

    // ngOnInit(){
    //     this.player1 = this.matchService.getMatchByID(1).player1.name;
    //     this.title = "Runboard"
    //     this.player2 = this.matchService.getMatchByID(1).player2.name;
    // }
}