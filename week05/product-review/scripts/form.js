const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Use JavaScript to populate the Product Name options where the array's
// name field is used for the select option display and the array's id is used for the value field.

const selectMenu = document.querySelector('#product'); // find the select menu in the html doc

for (let i = 0; i < products.length; i++) {
    let newOption = document.createElement('option');       // create a new option element
    newOption.textContent = products[i].name;               // set the text
    newOption.value = products[i].id;                       // set the value
    selectMenu.appendChild(newOption);                      // send the text string to the select menu
};

selectMenu.disabled = false;                            // turn off the "disabled" tag in html

// here's a method outside a loop for sending text to a select option
// const testArray = ['sun','moom','stars']
// let newOption = document.createElement('option');       // create a new option element
// newOption.textContent = testArray[0];                   // set the text
// newOption.value = "test-value";                         // set the value
// selectMenu.appendChild(newOption);                      // send the text string to the select menu

// set the current year
const today = new Date();
// find the span with id="currentyear" and put the year inside it
document.querySelector("#currentyear").textContent = today.getFullYear();
// set the last modified date
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;