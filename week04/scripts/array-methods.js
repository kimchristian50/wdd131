const numbers = [1, 2, 3, 4];

// Create a new array that contains each of the numbers array values at double the value.
let doubleNumbers = numbers.map(number => number * 2);

// here's me adding another place to test mapping out

const testArea = document.querySelector("#testArea");
// let mytestvar = numbers.map((number) => { return number * 5 }); // this is the longer way to write it but you can remove the {} and the return
let mytestvar = numbers.map(number => number * 2);
testArea.innerHTML = mytestvar;

const courses = [
    "CSE 110",
    "CSE 111",
    "WDD 130",
    "WDD 131",
    "WDD 231",
    "CSE 210"
];

// 1️⃣ map() courses to subject list

const courseList = document.querySelector("#subjects");

function renderCourses(courseListArray) {
    // 1. Transform strings into <li> strings
    const htmlItems = courseListArray.map((course) => `<li>${course}</li>`);

    // 2. Join them together and put them in the <ul>
    courseList.innerHTML = htmlItems.join("");

    // 3. Transform strings into something else
    const htmlItemsB = courseListArray.map((course) => `<li>${course} lookatme I'm mapping</li>`);

    // 4. Join the second bit onto the first bit
    courseList.innerHTML = courseList.innerHTML + htmlItemsB.join("");

    // 5. pick the 4-6th characters in the strings
    const htmlItemsC = courseListArray.map((course) => `<li>${course.charAt(4)}${course.charAt(5)}${course.charAt(6)} </li>`);

    // 6. Join the third bit onto the second bit
    courseList.innerHTML = courseList.innerHTML + htmlItemsC.join("");
}

renderCourses(courses);

// *************************************************************************************
const countries = [
    "Uganda",
    "United States",
    "Uruguay",
    "Brazil",
    "Canada",
    "Germany",
    "Japan",
    "Mexico",
    "Spain",
    "Turkey",
    "Colombia",
    "Calaska",
    "Gew Mexico"
];

// 2️⃣ filter() countries to those starting with "U"

const uList = document.getElementById("u");
const uCountries = countries.filter((country) => country.startsWith("G"));
uList.innerHTML = uCountries.map((country) => `<li>${country}</li>`).join("");
// you have to do the extra mapping step to turn the array of filtered countries into the list <li>
// otherwise it would put up a single string of text Uganda,United States,Uruguay

// *************************************************************************************
const fruits = [
    { name: "apple", price: 1 },
    { name: "banana", price: 0.5 },
    { name: "orange", price: 1.2 },
    { name: "grape", price: 0.1 }
];

// 3️⃣ reduce() array of objects to total cost.
const displayDiv = document.getElementById("total");

const sum = fruits.reduce(
    (accumulator, fruit) => accumulator + fruit.price, 0
);
displayDiv.textContent = `Total Cost: $${sum.toFixed(2)}`;

// or you can skip the first const displayDiv and do it like this:
document.getElementById("total").textContent = `Total Cost 4 U: $${sum.toFixed(2)}`;

// *************************************************************************************
const students = [
    { fullName: "Alice Johnson", state: "California, USA", class: "Mathematics" },
    {
        fullName: "Benjamin Lee",
        state: "Ontario, Canada",
        class: "Computer Science"
    },
    { fullName: "Chloe Smith", state: "London, UK", class: "Physics" },
    { fullName: "David Kim", state: "Seoul, South Korea", class: "Engineering" },
    { fullName: "Elena Rodriguez", state: "Madrid, Spain", class: "Biology" },
    { fullName: "Felix Müller", state: "Berlin, Germany", class: "History" }
];
// 4️⃣ loop through the array

students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = student.fullName;

    document.getElementById("studentList").appendChild(li);
})

// *************************************************************************************
const products = [
    {
        name: "Widget A",
        partNumber: "WA-123",
        quantity: 50,
        price: 12.5
    },
    {
        name: "Gear B",
        partNumber: "GB-456",
        quantity: 100,
        price: 3.75
    },
    {
        name: "Lever C",
        partNumber: "LC-789",
        quantity: 25,
        price: 25.0
    },
    {
        name: "Bolt D",
        partNumber: "BD-012",
        quantity: 200,
        price: 0.5
    },
    {
        name: "Panel E",
        partNumber: "PE-345",
        quantity: 10,
        price: 50.0
    },
    {
        name: "Wire F",
        partNumber: "WF-678",
        quantity: 150,
        price: 1.25
    },
    {
        name: "Tube G",
        partNumber: "TG-901",
        quantity: 30,
        price: 18.0
    }
];
// 5️⃣ find first 'expensive' product

const firstLargePrice = products.find((product) => product.quantity > 60);

document.getElementById("product").textContent = `First price over 20 is: ${firstLargePrice.name}`;

// You could also do the whole thing in one line with an OR in case no product is found:

document.getElementById("product").textContent = products.find((product) => product.price >= 50)?.name || "No product found";

// *************************************************************************************
// 6️⃣ determine if Canada is contained within the array countries (see line 18)

document.getElementById("output").textContent = countries.indexOf("Canada");
//this time I did it in a single line, but here's a way to do it in 2:

const index = countries.indexOf("Uruguay");
document.getElementById("output").textContent = index > 0 ? index : "country not found";

// my way is actually better in some ways because Uganda shows up as not found, because its index is 0