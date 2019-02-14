import { Match } from "./omnilays.match.model";
import { Player } from './omnilays.player.model';

export const MATCHES: Match[] = [
    new Match(1, new Player("Neophos", "SE"), new Player("Hogge", "SE"), "GF"),
    new Match(2, new Player("jerry", "SE"), new Player("Akkare", "DK"), "Round 2 pools"),
    new Match(3, new Player("Svampen", "SE"), new Player("Mighty", "NO"), "Losers semis"),
    new Match(4, new Player("Daigo", "JP"), new Player("Itazan", "JP"), "Winners finals"),
    new Match(5, new Player("JWong", "US"), new Player("Jaffar", "SE"), "Round 3")
]