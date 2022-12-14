let API_KEY = "2b2c5484ef443da5b2de3ce632278195";

function getCityName() {
    let cityName = document.getElementById("city-name").value;
    weatherByCityName(cityName);
}

function getLonLat() {
    let lon = document.getElementById("longitude").value;
    let lat = document.getElementById("latitude").value;
    weatherByCoordinates(lat,lon);
}

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
    }
    else {
        alert("Something is wrong. Check your browser settings");
    }
}

function getCoordinates(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    weatherByCoordinates(lat,lon);
}

function weatherByCoordinates(lat, lon) {
    let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        generateHTML(data);
    });
}

function weatherByCityName(cityName) {
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + API_KEY;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        generateHTML(data);
    });
}

function generateHTML(data) {
    console.log(data);
}