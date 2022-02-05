//Get elements
let input = document.getElementById('inputString');
let button = document.getElementById('button');
let cityName = document.getElementById('cityName');
let temp = document.getElementById('temp');
let cloudCover = document.getElementById('cloudCover');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');

//When the button is clicked, open connection to OpenWeather API using access token.
//Get data from JSON array. Fill HTML elements with selected data.
button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=ec22b8803014cc9bccfcec45e252397c')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let cloudsValue = data['weather'][0]['description'];
        let humidValue = data['main']['humidity'];
        let windsValue = data['wind']['speed'];
        //to check weather condition for image to display.
        let weatherSkyValue = data['weather'][0]['description'];
        cityName.innerHTML = `City: ` + nameValue;
        temp.innerHTML = `Current Temperature: ` + tempValue + `&#8451`;
        cloudCover.innerHTML = `Cloud Cover: ` + cloudsValue;
        humidity.innerHTML = `Humidity Levels: ` + humidValue + `%`;
        wind.innerHTML = `Wind Speed: ` + Math.round((windsValue * (windsValue * 3.6))) + `km/h`;
        backgroundChanger(weatherSkyValue);
    })
    .catch(error => alert(`This city does not exist!`))
})

//Set webpage background based on cloud cover
const backgroundChanger = (cloudcover) => {
    switch(cloudcover){
    case 'broken clouds' : document.body.style.backgroundImage = "url('images/broken-clouds.jpg')";
    break;
    case 'clear sky' : document.body.style.backgroundImage = "url('images/clear-skies.png')";
    break;
    case 'few clouds' : document.body.style.backgroundImage = "url('images/few-clouds.jpg')";
    break;
    case 'scattered clouds' : document.body.style.backgroundImage = "url('images/scattered-clouds.jpg')";
    break;
    case 'mist' : document.body.style.backgroundImage = "url('images/mist.jpg')";
    break;
    case 'rain' : document.body.style.backgroundImage = "url('images/rain.jpg')";
    break;
    case 'thunder storm' : document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
    break;
    case 'shower rain' : document.body.style.backgroundImage = "url('images/shower-rain.jpg')";
    break;
    case 'snow' : document.body.style.backgroundImage = "url('images/snow.jpg')";
    break;
    case 'moderate rain' : document.body.style.backgroundImage = "url('images/moderate-rain.jpg')";
    break;
    default : document.body.style.backgroundImage = "url('images/all-seasons-default.jpg')";
    break;
    }
}

//load default image when web page loads
onload = () => {
    backgroundChanger(cloudCover);
}

