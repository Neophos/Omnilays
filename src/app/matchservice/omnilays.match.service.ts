import { Injectable} from '@angular/core';
import { Player } from '../omnilays.player.model';
import { Match } from '../omnilays.match.model';

import { MATCHES } from '../mock-games';


@Injectable({
    providedIn: 'root'
})
export class MatchService{
    
    currentMatch: Match

    constructor() {
        this.currentMatch = MATCHES[0]
        console.log("matchservice instance")
    }

    getCurrentMatch() {
        return this.currentMatch
    }


    getMatches() {
        return MATCHES;
    }

    getMatchByID(id: number) {
        for (var i = 0; i <= MATCHES.length - 1; i++) {
            if (MATCHES[i].id === id) {
                this.currentMatch = MATCHES[i]
                return MATCHES[i]
            }
        }
    }

    setCurrentMatch(id: number) {
        this.currentMatch = MATCHES[id - 1]
    }
}