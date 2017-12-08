

var mat = new Character('Mat', 'coder', 'male', 26, 4, 10);
var kat = new Character('Kat', 'MUA', 'female', 23, 2, 20);

mat.printStats();
kat.printStats();

mat.hitPoints = kat.attack(mat.hitPoints);

mat.printStats();

function Character(name, prof, gen, age, str, hp) {
    this.name = name,
    this.profession = prof,
    this.gender = gen, 
    this.age = age, 
    this.strength = str,
    this.hitPoints = hp,
    this.printStats = () => {
        console.log( JSON.stringify(this, null, 2) );
    },
    this.isAlive = () => {
        console.log( (this.hitPoints > 0 ? true : false) );
    },
    this.attack = (hp) => {
        return hp - this.strength;
    }, 
    this.levelUp = () => {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
    }
}

