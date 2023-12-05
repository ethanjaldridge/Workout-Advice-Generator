/* 
Build message generator
Everytime a user runs the program, they get a new, randomized output
The output message should be made up of 3 different pieces of data 

Workout Advice Generator
1. Your GOAL is: lose bodyfat, build muscle, gain strength
2. You should START: going to bed early, eating real food, training hard
3. You should STOP: staying up late, eating junk food, skipping the gym
*/

const workoutAdvice = {
    goal: ['lose bodyfat', 'build muscle', 'gain strength'],
    start: ['going to bed early', 'eating real food', 'training hard'],
    stop: ['staying up late', 'eating junk food', 'skipping the gym']
};

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

let yourAdvice = [];

for (let advice in workoutAdvice) {
    let selector = generateRandomNumber(workoutAdvice[advice].length)

    switch (advice) {
        case 'goal':
            yourAdvice.push(`If your goal is to ${workoutAdvice[advice][selector]},`);
            break;
        case 'start':
            yourAdvice.push(`you should start ${workoutAdvice[advice][selector]},`);
            break;
        case 'stop': 
            yourAdvice.push(`and you should stop ${workoutAdvice[advice][selector]}.`);
            break;
        default:
            yourAdvice.push('Invalid entry');
            break;
    };
};

function formatAdvice() {
    const formattedAdvice = yourAdvice.join(' ');
    console.log(formattedAdvice);
};

formatAdvice(yourAdvice);