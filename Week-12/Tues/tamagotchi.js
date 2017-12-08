
function DigitalPal() {
    this.hungry = false,
    this.sleepy = false,
    this.bored = true,
    this.age = 0,
    this.feed = () => {
        if(this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        }
    },
    this.sleep = () => {
        if(this.sleepy) {
            console.log("Zzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        }
    },
    this.play = () => {
        if(this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    },
    this.increaseAge = () => {
        this.age ++;
        console.log(`Happy Birthday to me! I am ${this.age} years old!`);
    }
}


var dog = new DigitalPal();
var cat = new DigitalPal();
var houseCondition = 100;


dog.outside = false;
dog.bark = () => {
    console.log("Woof! Woof!");
}
dog.goOutside = () => {
    if(!this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
}
dog.goInside = () => {
    if(this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
}


cat.meow = () => {
    console.log("Meow! Meow!");
}
cat.destroyFurniture = () => {
    if (houseCondition <= 0) return;
    houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored = false;
    this.sleepy = true;
}

function buyNewFurniture() {
    houseCondition += 50;
    console.log("Are you sure about that?");
}


