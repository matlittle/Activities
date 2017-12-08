const Student = require('./student');

var myTest = new Student("Name", "Fav Sub", 4.0);



/* * The second constructor function is called "Class" and has the following properties within it...

 * An array of students within the class
 * Number of students in the class
 * Name of the professor
 * Room number
 * The Student constructor function from above which adds a new student to the class */


function Class() {
    this.profName = pName;
    
}

Class.prototype.addStudent = function(name, sub, gpa) {
    this.sArr.push( new Student(name, sub, gpa) );
}
