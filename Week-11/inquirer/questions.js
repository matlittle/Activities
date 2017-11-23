const inquire = require('inquirer');

inquire.prompt([
    {
        type: 'input',
        message: `What's your name?`,
        name: 'username'
    },
    {
        type: 'password',
        message: `Choose a password`,
        name: 'pass1'
    },
    {
        type: 'password',
        message: `Repeat your password`,
        name: 'pass2',
        validate: checkPasses
    },
    {
        type: 'list',
        message: `What's your favorite animal from this list?`,
        name: 'animal',
        choices: ['Dogs', 'Cats', 'Fish']
    },
    {
        type: 'checkbox',
        message: `Which of these countries have you visited?`,
        name: 'countries',
        choices: ['Canada', 'Mexico', 'England', 'France', 'Japan']
    },
    {
        type: 'confirm',
        message: `Were these questions ridiculous?`,
        name: 'ridiculous'
    }
]).then( (answers) => {
    console.log(answers);
});


function checkPasses(input, answers) {
    if(input === answers.pass1) {
        return true;
    } else {
        return "Your passwords don't match!";
    }
}
