var dog = new Animal(true, "Woof!");
var cat = new Animal(false, "Meow!"); 

dog.makeNoise();
cat.makeNoise();

cat.raining = true;

massHysteria(dog, cat)

function Animal(raining, sound) {
    this.raining = raining;
    this.noise = sound;
    this.makeNoise = function() {
        if(this.raining) console.log(this.noise);
    }
}

function massHysteria(a1, a2) {
    if(a1.raining && a2.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}