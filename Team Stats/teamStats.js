const team = {
  _players : [
    {
      firstName: 'Robyn',
      lastName: 'Gribbin',
      age: 28
    },
    {
      firstName: 'Devon',
      lastName: 'Gribbin',
      age: 27
    },
    {
      firstName: 'Miles',
      lastName: 'Bako',
      age: 15
    }
  ],
  _games : [
    {
      opponent: 'Demons',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'UAC',
      teamPoints: 30,
      opponentPoints: 40
    },
    {
      opponent: 'ARC',
      teamPoints: 35,
      opponentPoints: 15
    }
  ],
  get _getPlayers() {
    return this._players;
  },
  get _getGames() {
    return this._games;
  },
  addPlayer : function(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },
  addGame : function(opponentName, teamPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(game);
  }
}