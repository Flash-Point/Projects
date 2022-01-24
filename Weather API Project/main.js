let input = document.getElementById('inputString');
let button = document.getElementById('button');
let cityName = document.getElementById('cityName');
let temp = document.getElementById('temp');
let cloudCover = document.getElementById('cloudCover');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=ec22b8803014cc9bccfcec45e252397c')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let cloudsValue = data['weather'][0]['description'];
        let humidValue = data['main']['humidity'];
        let windsValue = data['wind']['speed'];
        cityName.innerHTML = `City: ` + nameValue;
        temp.innerHTML = `Current Temperature: ` + tempValue + `&#8451`;
        cloudCover.innerHTML = `Cloud Cover: ` + cloudsValue;
        humidity.innerHTML = `Humidity Levels: ` + humidValue + `%`;
        wind.innerHTML = `Wind Speed: ` + Math.round((windsValue * (windsValue * 3.6))) + `km/h`;
    })
    .catch(error => alert(`This city does not exist!`))
})

