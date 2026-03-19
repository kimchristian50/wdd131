// set the current year
const today = new Date();
// find the span with id="currentyear" and put the year inside it
document.querySelector("#currentyear").textContent = today.getFullYear();
// set the last modified date
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// calculate wind chill - define constants
const temperature = 5;
const windSpeed = 7;

// calculation function
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// logic to check conditions and update the UI
const windChillElement = document.querySelector("#windChillValue");

if (temperature <= 10 && windSpeed > 4.8) {
    const result = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${result} °C`;
} else {
    windChillElement.textContent = "N/A";
}