// prints out the days of the week in order - on a console

const numberOfDays = 6;
const options = { weekday: "long" };

const today = new Date();
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);

console.log(`Today is: ${todaystring}`);


// while loop
let i = 0;
while (i < numberOfDays) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);

    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    console.log(`Day ${i}: ${nextdaystring}`);
    i++;
}

// for loop
for (let i = 1; i <= numberOfDays; i++) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);

    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    console.log(`Day ${i}: ${nextdaystring}`);
}

// for...of
const dayOffsets = [1, 2, 3, 4, 5, 6];

for (const i of dayOffsets) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + i);

    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);

    console.log(`Day ${i}: ${nextdaystring}`);
}