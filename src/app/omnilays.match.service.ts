import { Injectable } from '@angular/core';
import { Player } from './omnilays.player.model';
import { Match } from './omnilays.match.model';

import { MATCHES } from './mock-games';

@Injectable()
export class MatchService {
    constructor() { }

    private currentMatchID: number;
    public currentMatch = MATCHES[0]
    private clickedMatch = MATCHES[2]

    getMatches() {
        return MATCHES;
    }

    getMatchByID(id: number) {
        for (var i = 0; i <= MATCHES.length - 1; i++) {
            if (MATCHES[i].id === id) {
                this.currentMatch = MATCHES[i];
                return MATCHES[i]
            }
        }
    }

    getCurrentMatch() {
        return this.currentMatch;
    }

    setAndGetClickedMatch(clicked: Match) {
        this.currentMatch = clicked
        return this.currentMatch
    }

}