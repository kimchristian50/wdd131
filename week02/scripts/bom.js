// declare three variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// add a click event listener for the Add Chapter button with addEventListener
button.addEventListener('click', function () {
    const chapters = list.children.length; // Count how many <li> are in the <ul>
    // check to make sure the user entered something, if they did then proceed
    if (input.value.trim() !== '') {

        // Check if we already have 10
        if (chapters >= 10) {
            alert("You've reached the Top 10! Delete one to add more.");
            input.value = '';
            input.focus();
            return; // STOP the function here so it doesn't add the 11th one
        }

        // test to see if the chapter is a duplicate
        // Get all the current list items
        const existingChapters = list.querySelectorAll('li');
        let isDuplicate = false;

        // Loop through them to see if the text matches
        for (let item of existingChapters) {
            // We use .firstChild.textContent because the <li> contains the text AND the button
            if (item.firstChild.textContent.trim().toLowerCase() === input.value.trim().toLowerCase()) {
                isDuplicate = true;
                break; // We found a match, no need to keep looking
            }
        }

        // If it's a duplicate, stop the function
        if (isDuplicate) {
            alert("This chapter is already in your Top 10!");
            input.value = '';
            input.focus();
            return;
        }

        // create a li element that will hold each entry's chapter title and an associated delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // populate the li element variable's textContent with the input value.
        li.textContent = input.value;

        // set the delete button's textContent to ❌.
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('area-label', `Remove ${input.value}`); // gemeni's extra bit

        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })

        // append the delete button to the li element
        li.append(deleteButton);

        // append the li element variable to the unordered list in the html
        list.append(li);

        // add an aria-label attribute to the button since it's just an emoticon
        // <button aria-label="Close" id="close-button">❌</button>

        // clean up - change the input value to an emptystring to clean up the interface for the user
        input.value = '';
        // focus the user back to the input field
        input.focus();
    } else {
        // if it's blank, just send focus back
        input.focus();
    }

})