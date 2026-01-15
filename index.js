function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };

}

/* Helper to find a player by name */
function findPlayer(playerName) {
  const game = gameObject();
  if (game.home.players[playerName]) return game.home.players[playerName];
  if (game.away.players[playerName]) return game.away.players[playerName];
  return undefined;
}

/* 1) numPointsScored(playerName) -> number of points */
function numPointsScored(playerName) {
  const player = findPlayer(playerName);
  return player ? player.points : undefined;
}

/* 2) shoeSize(playerName) -> shoe size */
function shoeSize(playerName) {
  const player = findPlayer(playerName);
  return player ? player.shoe : undefined;
}

/* 3) teamColors(teamName) -> array of colors */
function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) return game.home.colors;
  if (game.away.teamName === teamName) return game.away.colors;
  return undefined;
}

/* 4) teamNames() -> array with both team names */
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

/* 5) playerNumbers(teamName) -> array of jersey numbers for that team */
function playerNumbers(teamName) {
  const game = gameObject();
  let playersObj = null;
  if (game.home.teamName === teamName) playersObj = game.home.players;
  else if (game.away.teamName === teamName) playersObj = game.away.players;
  else return undefined;
  return Object.values(playersObj).map((p) => p.number);
}

/* 6) playerStats(playerName) -> the stats object for the player (shallow copy) */
function playerStats(playerName) {
  const player = findPlayer(playerName);
  // Return a shallow copy using Object.assign() per the test hint
  return player ? Object.assign({}, player) : undefined;
}

/* 7) bigShoeRebounds() -> rebounds for player with biggest shoe size */
function bigShoeRebounds() {
  const game = gameObject();
  // Combine players into one object using Object.assign()
  const allPlayers = Object.assign({}, game.home.players, game.away.players);
  let maxShoe = -Infinity;
  let rebounds = undefined;
  for (const name in allPlayers) {
    if (Object.prototype.hasOwnProperty.call(allPlayers, name)) {
      const p = allPlayers[name];
      if (p.shoe > maxShoe) {
        maxShoe = p.shoe;
        rebounds = p.rebounds;
      }
    }
  }
  return rebounds;
}