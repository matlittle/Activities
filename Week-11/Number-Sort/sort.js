
var arr = [];

for (let i = 2; i < process.argv.length; i++) {
    arr.push( parseFloat(process.argv[i]) );
}

console.log(arr);
arr.sort();
console.log(arr);