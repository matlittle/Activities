console.log(process.argv[2] === process.argv[3]);

if (parseFloat(process.argv[2]) % 7 === 0 &&
parseFloat(process.argv[3]) % 7 === 0) {
    console.log(true);
} else {
    console.log(false);
}