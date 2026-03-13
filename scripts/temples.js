// set the current year
const today = new Date();
// find the span with id="currentyear" and put the year inside it
document.querySelector("#currentyear").textContent = today.getFullYear();
// set the last modified date
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const navigation = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const navElement = document.querySelector('nav');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hambutton.classList.toggle('show');
    navElement.classList.toggle('show');
});