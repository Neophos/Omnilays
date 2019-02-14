import { Component, OnChanges, Input, OnInit } from "@angular/core";
import { MatchService } from "../matchservice/omnilays.match.service";
import { Match } from '../omnilays.match.model';

@Component({
    selector: 'currentmatch',
    templateUrl: './omnilays.current.widget.html'
})
export class CurrentMatchWidget implements OnInit{

    currentMatchID: number
    clickedMatch: Match
    currentMatch: Match

    constructor(private matchService:MatchService) { 
        
    }

    ngOnInit() {
        this.currentMatch = this.matchService.getCurrentMatch()
    }

    getCurrentMatch() {
        return this.currentMatch
    }

    setClickedMatch(clicked: number) {
        this.currentMatch = this.matchService.getMatchByID(clicked)
    }

}