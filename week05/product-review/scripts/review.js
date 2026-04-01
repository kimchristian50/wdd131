// Use localStorage to store and track the number of reviews completed. Each time the review.html
// page loads successfully after form submission, increment the counter by one.

// Initialize display element variable
const reviewsDisplay = document.querySelector(".submissions");

// Get the stored VALUE for the numReviews-ls KEY in localStorage if it exists. 
// If the numReviews KEY is missing, then assign 0 to the numReviews variable.
let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

// increment the number of reviews by one.
numReviews++;

// Determine if this is the first review or display the number of reviews.
if (numReviews !== 0) {
    reviewsDisplay.textContent = numReviews;
} else {
    reviewsDisplay.textContent = `This is your first review!`;
}


// store the new review total into localStorage, key=numReviews-ls
localStorage.setItem("numReviews-ls", numReviews);