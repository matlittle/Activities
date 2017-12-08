var inquirer = require('inquirer');

var numPlayers = 0;
var players = [];

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Player.prototype.goodGame = function() {
    if( (Math.random() * 2) > 1 ) {
        this.offense ++;
    } else {
        this.defense ++;
    }
}

Player.prototype.badGame = function() {
    if( (Math.random() * 2) > 1 ) {
        this.offense --;
    } else {
        this.defense --;
    }
}

Player.prototype.printStats = function() {
    console.log( `Name: ${this.name}  Position: ${this.position}  Off: ${this.offense}  Def: ${this.defense}` );
}


var questions = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter a name'
    },
    {
        name: 'pos',
        type: 'input',
        message: `Enter player's position`
    },
    {
        name: 'off',
        type: 'input',
        message: `Enter the player's offense rating`
    },
    {
        name: 'def',
        type: 'input',
        message: `Enter the player's defense rating`
    }
]


function createPlayer(p) {
    var off = parseInt(p.off);
    var def = parseInt(p.def);

    players[numPlayers] = new Player(p.name, p.pos, off, def);

    numPlayers++;

    if(numPlayers < 8) {
        getPlayer();
    } else {
        printPlayerStats();
    }
}

function getPlayer() {
    inquirer.prompt(questions).then( (answers) => {
        createPlayer(answers);
    });
}

function printPlayerStats() {
    for(var i = 0; i < players.length; i++) {
        players[i].printStats();
    }
}


getPlayer();


var game = {
    currScore: 0,
    numRounds: 0,

    play: function() {
        this.currScore = 0;

        this.nextRound();
    },

    getRandomNums: function() {
        var randArr = [];

        randArr[0] = Math.floor(Math.random() * 20) + 1;
        randArr[1] = Math.floor(Math.random() * 20) + 1;

        return randArr;
    },

    checkNumbers: function(nArr) {
        var ttlOff = 0;
        var ttlDef = 0;

        for(var i = 0; i < 5; i++) {
            ttlOff += players[i].offense;
            ttlDef += players[i].defense;
        }

        if(nArr[0] < ttlOff) {
            this.currScore ++;
        }

        if(nArr[1] > ttlDef) {
            this.currScore --;
        }

        this.promptSub();
    },

    promptSub: function() {
        prompt([{
            name: 'confirm',
            type: 'confirm',
            message: 'Would you like to sub a player?'
        }]).then( function(answer) {
            if(answer) {
                this.chooseSub();
            } else {
                this.nextRound();
            }
        });
    },

    chooseSub: function() {
        var startChoices = [];
        var subChoices = [];

        for(var i = 0; i < 8; i++) {
            if (i < 5) {
                startChoices.push( players[i].name );
            } else {
                subChoices.push( players[i].name );
            }
        }

        prompt([{
            name: 'subs',
            type: 'list',
            message: 'Choose the player to bring into the game.',
            choices: subChoices
        },{
            name: 'starts',
            type: 'list',
            message: 'Choose the player to bench.',
            choices: startChoices
        }]).then( function(answer) {
            var sub = players[answer.subs + 5];
            var start
        });


    },

    nextRound: function() {
        if(this.numRounds === 4) {
            this.numRounds ++;
            var nums = this.getRandomNums();
            this.checkNumbers(nums);
        }
        else {
            this.checkScores();
        }
        
    },

    checkScores: function() {
        if(this.currScore > 0) {
            console.log("Good game!");

            for(var i = 0; i < 5; i++) {
                players[i].goodGame();
                players[i].printStats();
            }
            
        } else if (this.currScore < 0) {
            console.log("Good game!");

            for(var i = 0; i < 5; i++) {
                players[i].badGame();
                players[i].printStats();
            }

        } else {
            console.log("That was an incredibly average game");
        }

        this.promptNewGame();
    },

    promptNewGame: function() {
        prompt([{
            name: 'confirm',
            type: 'confirm',
            message: 'Would you like to play again?'
        }]).then( function(answer) {
            if(answer) {
                this.play();
            }
        });
    }

}

