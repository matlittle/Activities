/*
Your "Programmer" constructor should be able to take in the following information...

The programmer's name
Their position/job title
How old they are
Favorite programming language
Now create a method for the constructor that would print all of the information contained within an object to the console.

Finally, create a "Programmer" object and call the method to print its contents */

function Programmer(n, p, a, l) {
    this.name = n;
    this.position = p;
    this.age = a;
    this.language = l;

    this.testFunc = function() {
        console.log("Hello");
    }
}

Programmer.prototype.info = function() {
    console.log( JSON.stringify(this, null, 1) );
}


var test = new Programmer('Mat', 'Dev', 26, 'JS');

test.info();

