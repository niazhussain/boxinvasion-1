function Game () {
	//ID
	this.ID = new ObjectID();
	this.type = bool; //0 for computer, 1 multiplayer
	this.player = ['user 1 ID','user 2 ID'/0];
	this.turn = 0 for palyer[0], 1 for player[1];

	this.board = new Board();

	this.connection = 0;

	this.socketID = ['player 1 socket ', 'player 2'] //null for comp


	//functions
	function init();

	function updateGameDB();

	function broadcastGameState(); //send the current game object

	function checkWinningCondition();

	function WinScript();

}

function Board () {
	this.length = 5;
	this.width = 5;

	//array of dots
	this.dots[][] = 
	x, y pos
	color 



	this.tiles[][] =
	x, y pos
	empty color 
	filled color [player 1, player 2]
	captured = bool
	captured by = playerID


	this.hline[][] = 
	x, y pos
	empty color 
	filled color [player 1, player 2]
	DRAWN = bool
	DRAWN by = playerID


	this.vline[][] = 
	x, y pos
	empty color 
	filled color [player 1, player 2]
	DRAWN = bool
	DRAWN By = playerID

	//functions
	board init();
	board draw();

}


