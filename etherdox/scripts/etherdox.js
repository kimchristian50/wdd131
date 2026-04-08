// --- Global Footer & Nav (Runs on all pages) ---
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

// --- Slideshow Section (Only runs if .mySlides exists) ---
// make slideshow automatic
let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

if (slides.length > 0) {
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // for (i = 0; i < slides.length; i++) { - old script used before I realized it was adding inline styles
    //     slides[i].style.display = "none";
    // }
    // Remove the "active" class from all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Add the "active" class to the current slide
    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 7000); // change image every 7 seconds

    // Use localStorage to store and track the number of visits to the site. Each time the etherdox-photography.html
    // page loads, increment the counter by one.

    // Initialize display element variable
    const visitsDisplay = document.querySelector(".visits");

    // Only do this if on the home page with the .visits class
    if (visitsDisplay) {

        // Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. 
        // If the numVisits KEY is missing, then assign 0 to the numVisits variable.
        let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

        // increment the number of visits by one.
        numVisits++;

        // Determine if this is the first visit or display the number of visits.
        if (numVisits !== 0) {
            if (numVisits == 1) {
                visitsDisplay.textContent = `This is your first visit to our page - welcome!`;
            }
            else if (numVisits == 2) {
                visitsDisplay.textContent = `This is your ${numVisits}nd visit to our page - welcome back!`;
            }
            else if (numVisits == 3) {
                visitsDisplay.textContent = `This is your ${numVisits}rd visit to our page - welcome back!`;
            }
            else {
                visitsDisplay.textContent = `This is your ${numVisits}th visit to our page - welcome back!`;
            }
        }

        // store the new visit total into localStorage, key=numVisits-ls
        localStorage.setItem("numVisits-ls", numVisits);
    }

    // --- Product Viewer Section (Only runs if #product-album exists) ---
    const products = [
        {
            productName: "Photo Prints",
            productPrice: "from $25 to $150",
            imageUrl: "images/prints2.webp"
        },
        {
            productName: "Wall Art - Framed Prints",
            productPrice: "from $50 to $450",
            imageUrl: "images/framed-prints.webp"
        },
        {
            productName: "Wall Art - Canvas Print",
            productPrice: "starting at $75",
            imageUrl: "images/canvas.gif"
        },
        {
            productName: "Wall Art - Canvas Gallery",
            productPrice: "starting at $250",
            imageUrl: "images/canvas-gallery.webp"
        },
        {
            productName: "Metal Prints - Single or Gallery",
            productPrice: "starting at $150",
            imageUrl: "images/metal.webp"
        },
        {
            productName: "Photo Book",
            productPrice: "$150",
            imageUrl: "images/photo-book.webp"
        },
        {
            productName: "Digital Files",
            productPrice: "$595 for all full-sized image files",
            imageUrl: "images/digital-files.webp"
        }
    ]

    // Select the container where the card will go
    const albumContainer = document.querySelector("#product-album");

    // the function that builds the HTML card
    function createProductCard(product) {
        if (!albumContainer) return;    // if there is no #product-album, don't run this function
        albumContainer.innerHTML = ""; // clear out the old card first

        let card = document.createElement("section");
        card.classList.add("product-card"); // add a class for CSS styling

        let name = document.createElement("h3");
        name.textContent = product.productName; // the product name will be the header of the card

        let price = document.createElement("p");
        price.innerHTML = `<span class="label">Price:</span> ${product.productPrice}`; // price goes below the name

        let img = document.createElement("img"); // set up the image with correct attributes
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", product.productName);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);             // add the name, price, and img to the card
        card.appendChild(price);
        card.appendChild(img);

        albumContainer.appendChild(card);   // actually put the card into the albumContainer which is #product-album above
    }

    // Only set up listeners if the IDs actually exist on this specific page
    const setupListener = (id, index) => {
        const el = document.querySelector(id);
        if (el) {
            el.addEventListener("click", () => createProductCard(products[index]));
        }
    };

    if (albumContainer) {                       // if there is no #product-album, don't run this setup
        setupListener("#photo-prints", 0);
        setupListener("#framed-prints", 1);
        setupListener("#canvas", 2);
        setupListener("#canvas-gallery", 3);
        setupListener("#metal", 4);
        setupListener("#photo-book", 5);
        setupListener("#digital-files", 6);

        // Initial load
        createProductCard(products[0]);
    }

// These are for if I want a slideshow that's manually advanced
// Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// Slideshow section - Index Page
// let slideIndex = 1;
// showSlides(slideIndex);

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }