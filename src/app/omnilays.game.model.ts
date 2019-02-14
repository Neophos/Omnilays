import { Player } from './omnilays.player.model';

export class Game {
    constructor (public winner: Player, public loser: Player) { }
  }