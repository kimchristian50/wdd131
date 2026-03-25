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

// indicate to the user which menu is active by highlighting it in CSS
function toggleActive(element) {
    const links = document.querySelectorAll(".navigation a");
    // clean up - remove the class from everyone
    links.forEach(link => link.classList.remove("active"));
    // target: add the class to the specific link clicked
    element.classList.add("active");
};

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // {
    // templeName: "Paris France",
    // location: "Paris, France",
    // dedicated: "2017, May, 21",
    // area: 44175,
    // imageUrl:
    // "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    // },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    // {
    // templeName: "Bern Switzerland",
    // location: "Bern, Switzerland",
    // dedicated: "1955, September, 11-15",
    // area: 35546,
    // imageUrl:
    // "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    // },
    // {
    // templeName: "Copenhagen Denmark",
    // location: "Copenhagen, Denmark",
    // dedicated: "2004, May, 23",
    // area: 25000,
    // imageUrl:
    // "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-16169-main.jpg"
    // },
    {
        templeName: "Lubbock Texas",
        location: "Lubbock, Texas",
        dedicated: "2002, April, 21",
        area: 16498,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lubbock-texas-temple/lubbock-texas-temple-13996-main.jpg"
    },
    // {
    // templeName: "Jordan River Utah",
    // location: "South Jordan, Utah",
    // dedicated: "1981, November, 16-20",
    // area: 148236,
    // imageUrl:
    // "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-3449.jpg"
    // },
    {
        templeName: "Seattle Washington",
        location: "Bellevue, Washington",
        dedicated: "1980, November, 17-21",
        area: 110000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg"
    },
    {
        templeName: "Snowflake Arizona",
        location: "Snowflake, Arizona",
        dedicated: "2002, March, 2",
        area: 18621,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/snowflake-arizona-temple/snowflake-arizona-temple-46560-main.jpg"
    },
    // removing to try to improve best practices to 95%
    // { 
    // templeName: "St. George Utah", 
    // location: "St. George, Utah",
    // dedicated: "1877, April, 6-8",
    // area: 143969,
    // imageUrl:
    // "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
    // },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois",
        dedicated: "2002, June, 27-30",
        area: 54000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
    },
    {
        templeName: "Colonia Juarez Chihuahua Mexico",
        location: "Colonia Juarez, Chihuahua, Mexico",
        dedicated: "1999, March, 6-7",
        area: 6800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    navigation.classList.remove('show');
    hambutton.classList.remove('show');
    navElement.classList.remove('show');
    toggleActive(homeLink);
    document.querySelector("h1").textContent = "All Temples";
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    // close the menu after clicking a filter
    navigation.classList.remove('show');
    hambutton.classList.remove('show');
    navElement.classList.remove('show');
    toggleActive(oldLink); // added to toggle the active element
    document.querySelector("h1").textContent = "Old Temples";
    let oldTemples = temples.filter(temple => temple.dedicated.startsWith("18"));
    createTempleCard(oldTemples);
});

newLink.addEventListener("click", () => {
    // close the menu after clicking a filter
    navigation.classList.remove('show');
    hambutton.classList.remove('show');
    navElement.classList.remove('show');
    toggleActive(newLink); // added to toggle the active element
    document.querySelector("h1").textContent = "New Temples"; // change the h1 to match the menu selected
    let newTemples = temples.filter(temple => temple.dedicated.startsWith("2"));
    createTempleCard(newTemples);
});

largeLink.addEventListener("click", () => {
    // close the menu after clicking a filter
    navigation.classList.remove('show');
    hambutton.classList.remove('show');
    navElement.classList.remove('show');
    toggleActive(largeLink); // added to toggle the active element
    document.querySelector("h1").textContent = "Large Temples";
    let largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
});

smallLink.addEventListener("click", () => {
    // close the menu after clicking a filter
    navigation.classList.remove('show');
    hambutton.classList.remove('show');
    navElement.classList.remove('show');
    toggleActive(smallLink); // added to toggle the active element
    document.querySelector("h1").textContent = "Small Temples";
    let smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
});

function createTempleCard(filteredTemples) {
    document.querySelector(".album").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".album").appendChild(card);
    });
};
