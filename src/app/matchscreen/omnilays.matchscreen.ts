import { Component, Input, OnInit } from "@angular/core";
import { MatchService } from "../matchservice/omnilays.match.service";
import { Match } from '../omnilays.match.model';
import { DashboardComponent } from '../dashboard/omnilays.dashboard';

@Component({
    selector: 'matchscreen',
    templateUrl: './omnilays.matchscreen.html',
    inputs: ["currentMatch"]
})

export class MatchScreenComponent implements OnInit{

    currentMatch: Match

    constructor(private matchService:MatchService) {
        
    }

    ngOnInit() {
        this.currentMatch = this.matchService.getCurrentMatch()
    }

    title = "Matchscreen"

    Update() {

    }
}