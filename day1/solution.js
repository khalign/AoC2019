const fs = require('fs');

function q1() {
    fs.readFile('./day1/input.txt', (err, data) => {
        const input = data.toString();
        const array = input.split('\n');
        let total = array.reduce((acc, value) =>  acc += Math.floor(parseInt(value)/3) - 2, 0);
        console.log(total)
    })
}

function q2() {
    fs.readFile('./day1/input.txt', (err, data) => {
        const input = data.toString();
        const array = input.split('\n');
        let total = array.reduce((acc, value) =>  {
            let fuel = Math.floor(parseInt(value)/3) - 2;
            while (fuel > 0) {
                acc += fuel;
                fuel = Math.floor(fuel/3) - 2;
            }
            return acc;
        }, 0);
        console.log(total)
    })
}

q1();
q2();