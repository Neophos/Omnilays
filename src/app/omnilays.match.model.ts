import { Player } from './omnilays.player.model';

export class Match {
    constructor (public id: number, public player1: Player, public player2: Player, public tournamentRound: string) { }
  }