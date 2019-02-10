import { Component } from "@angular/core";
import { MatchService } from "../omnilays.match.service";
import { Match } from '../omnilays.match.model';

@Component({
    selector: 'matchscreen',
    templateUrl: './omnilays.matchscreen.html',
    providers: [MatchService]
})

export class MatchScreenComponent {

    constructor(private matchService:MatchService) {

    }

    title = "Matchscreen"

    player1 = this.matchService.getCurrentMatch().player1.name
    player2 = this.matchService.getCurrentMatch().player2.name
}