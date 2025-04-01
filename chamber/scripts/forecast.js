const currentDay = document.querySelector('.day1');
const tomorrow = document.querySelector('.day2');
const dayAfter = document.querySelector('.day3');

const key = "be4d345637ed47d542e6c75dde64fe18"
const latitude = "43.61"
const long = "-116.39"

const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${long}&appid=${key}&units=imperial`

async function apiFetch() {
    try {
        const answer = await fetch(forecastUrl);
        if (answer.ok) {
            const data = await answer.json();
            console.log(data);
            displayAnswer(data);
        } else {
            throw Error(await answer.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function formatDate(date) {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

function displayAnswer(data) {
    // Get the current, tomorrow's, and day-after's dates
    const currentDate = formatDate(new Date());
    const tomorrowDate = formatDate(new Date(Date.now() + 24 * 60 * 60 * 1000));  // Add 24 hours for tomorrow
    const dayAfterDate = formatDate(new Date(Date.now() + 48 * 60 * 60 * 1000)); // Add 48 hours for day after

    // Update the HTML with the dates and weather info
    currentDay.innerHTML = `${currentDate}<br>High: ${data.list[0].main.temp_max.toFixed(0)} &deg;F<br>Low: ${data.list[0].main.temp_min.toFixed(0)} &deg;F`;
    tomorrow.innerHTML = `${tomorrowDate}<br>High: ${data.list[1].main.temp_max.toFixed(0)} &deg;F<br>Low: ${data.list[1].main.temp_min.toFixed(0)} &deg;F`;
    dayAfter.innerHTML = `${dayAfterDate}<br>High: ${data.list[2].main.temp_max.toFixed(0)} &deg;F<br>Low: ${data.list[2].main.temp_min.toFixed(0)} &deg;F`;
}

apiFetch();
