const API_KEY = "9a8f6bab412cc2d81cca67a13c00de22";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${data.weather[0].main} / ${data.main.temp}˚ / `;
            city.innerText = `${data.name}`;
            console.log(weather.innerHTML);
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);