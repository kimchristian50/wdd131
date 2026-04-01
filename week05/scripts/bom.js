// declare three variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// set up the array with either the chapters returned by the function or make it empty
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    // populate the li element variable's textContent with the input value.
    li.textContent = item; // note use of the displayList parameter 'item'
    // set the delete button's textContent to ❌.
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    // append the delete button to the li element
    li.append(deleteButton);
    // append the li element variable to the unordered list in the html
    list.append(li);

    // add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and LocalStorage
        input.focus(); // set the focus back to the input
    });
}

function setChapterList() { // set the localStorage item that's already named, stringify the array
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() { // retrieve the localStorage item, use parse to convert the string back
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // redefine the chaptersArray to return everything except the chapter to be removed
    setChapterList(); // call the setChapterList function to update the localStorage item
}

// add a click event listener for the Add Chapter button with addEventListener
button.addEventListener('click', function () {
    const chapters = list.children.length; // Count how many <li> are in the <ul>
    // check to make sure the user entered something, if they did then proceed
    if (input.value.trim() !== '') { // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the LocalStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
})