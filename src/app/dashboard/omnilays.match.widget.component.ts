import { Component, Input } from "@angular/core";
import { MatchService } from "../matchservice/omnilays.match.service";
import { Match } from '../omnilays.match.model';

@Component({
    selector: 'matchwidget',
    templateUrl: './omnilays.match.widget.component.html',
    providers: [MatchService]
})

export class MatchWidget {

    constructor(private matchService:MatchService) {

    }

    // matches = this.matchService.getMatches()

    // public changeMatch(id) {
    //     this.matchService.setClickedMatch(id)
    //     console.log("match changed to" + id.toString())
    //     console.log(this.matchService.currentMatch.player1.name)
    // }
}