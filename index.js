//getting current time & day to display
var currnetTime = moment().format("h" + ':' + "mm" + "a")
  $("#current-time").html(currnetTime);

var currentDay = moment().format("dddd, MMMM Do YYYY");
  $("#current-day").html(currentDay); 


//creating variables for getCurrentLocation() function
var input = document.getElementById('inputfield');
var submitButton = document.getElementById('submitbttn');
var weather = document.getElementById('weather')
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');
var uv = document.getElementById('uv');
var currentCity = document.getElementById('current-city')
var cord = document.getElementById('cordinate');
var icon = document.getElementById('icon');
var date = document.getElementById('date')
var container1 = document.getElementById('cont1')
var container2 = document.getElementById('cont2')
var container3 = document.getElementById('cont3')
var container4 = document.getElementById('cont4')
var container5 = document.getElementById('cont5')
var mainContainer = document.getElementById('maincont')
var citylist = document.getElementById('citylists')

// hiding containers upon initial display
mainContainer.style.display = 'none';
container1.style.display = 'none';
container2.style.display = 'none';
container3.style.display = 'none';
container4.style.display = 'none';
container5.style.display = 'none';
citylist.style.display = 'none';

var searchedCities = [];

//users input-value invokes function
input.addEventListener('keypress', function(event) {
    // event.preventDefault();
    if (event.key === 'Enter') {
        console.log('works');
        //displays containers once function is invoked
        mainContainer.style.display = 'flex';
        container1.style.display = 'flex';
        container2.style.display = 'flex';
        container3.style.display = 'flex';
        container4.style.display = 'flex';
        container5.style.display = 'flex';

        var userInput = input.value;
        searchedCities.push(userInput)
        localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
        
        
        getCurrentLocation(userInput);
        citylist.style.display = 'flex';
    }
})

var savedCity = JSON.parse(localStorage.getItem("searchedCities"));
if (savedCity !== null) {

    for (var i = 0; i < savedCity.length; i++) {
        console.log(savedCity);
        var bttn = document.createElement('button');
        bttn.innerHTML = savedCity[i]
        citylist.appendChild(bttn)

    }
}

citylist.addEventListener('click', function(event){
    console.log(event);
    getCurrentLocation(event.target.innerHTML);
})


function getCurrentLocation(input) {
    var weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q='+input+'&units=imperial&mode=json&appid=1a4b15c9243ae99b3ae0200e047cf5d7'
    fetch(weatherApi)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
       console.log(data);
       //setting data from api to variables
       var langValue = data.coord.lat
       var lonValue = data.coord.lon
       var weatherValue = data.weather[0].description
       var tempValue = data.main.temp
       var windValue = data.wind.speed
       var humidityValue = data.main.humidity
       var currentCityValue = data.name
       var currentCountryValue = data.sys.country
       var iconValue = data.weather[0].icon
       var currentDay1 =  moment().format("MMMM Do YYYY");


       weather.innerHTML = `${weatherValue}`
       temp.innerHTML = `${tempValue}°F`
       wind.innerHTML = `${windValue}mph`
       humidity.innerHTML = `${humidityValue}%`
       currentCity.innerHTML = `${currentCityValue}, ${currentCountryValue}`
        //    icon.innerHTML = `${iconValue}`
        icon.src = 'https://openweathermap.org/img/wn/' + iconValue + '.png'
       date.innerHTML = `${currentDay1}`
       
       cord.innerHTML = `${langValue}° N,  ${lonValue}° W`
        futureForcast(langValue, lonValue)
    })
}

//variables for futureForcast() function
var futureIcon = document.getElementById('icon1')
var futureTempMin = document.getElementById('futtempmin1');
var futureTempMax = document.getElementById('futtempmax1');
var futureWind = document.getElementById('futtwind1');
var futureHumid = document.getElementById('futhumid1');
var futureDay = document.getElementById('futuredate1');

var futureIcon1 = document.getElementById('icon2')
var futureTempMin1 = document.getElementById('futtempmin2');
var futureTempMax1 = document.getElementById('futtempmax2');
var futureWind1 = document.getElementById('futtwind2');
var futureHumid1 = document.getElementById('futhumid2')
var futureDay1 = document.getElementById('futuredate2');

var futureIcon2 = document.getElementById('icon3')
var futureTempMin2 = document.getElementById('futtempmin3');
var futureTempMax2 = document.getElementById('futtempmax3');
var futureWind2 = document.getElementById('futtwind3');
var futureHumid2 = document.getElementById('futhumid3');
var futureDay2 = document.getElementById('futuredate3');

var futureIcon3 = document.getElementById('icon4')
var futureTempMin3 = document.getElementById('futtempmin4');
var futureTempMax3 = document.getElementById('futtempmax4');
var futureWind3 = document.getElementById('futtwind4');
var futureHumid3 = document.getElementById('futhumid4');
var futureDay3 = document.getElementById('futuredate4');

var futureIcon4 = document.getElementById('icon5')
var futureTempMin4 = document.getElementById('futtempmin5');
var futureTempMax4 = document.getElementById('futtempmax5');
var futureWind4 = document.getElementById('futtwind5');
var futureHumid4 = document.getElementById('futhumid5');
var futureDay4 = document.getElementById('futuredate5');

//calling api for futureforcast, will be invoked within getCurrentLocation()
function futureForcast(lat, lon) {
    var futureApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=1a4b15c9243ae99b3ae0200e047cf5d7`
    console.log(futureApi);
    fetch(futureApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        var uvValue = data.current.uvi
        var futureIconValue = data.daily[1].weather[0].icon
        var futureTempMinValue = data.daily[1].temp.min
        var futureTempMaxValue = data.daily[1].temp.max
        var futureWindValue = data.daily[1].wind_speed
        var futureHumidValue = data.daily[1].humidity
        var futureDayValue = moment().add(1, 'days').format("MMMM Do YYYY");

        var futureIconValue1 = data.daily[2].weather[0].icon
        var futureTempMinValue1 = data.daily[2].temp.min
        var futureTempMaxValue1 = data.daily[2].temp.max
        var futureWindValue1 = data.daily[2].wind_speed
        var futureHumidValue1 = data.daily[2].humidity
        var futureDayValue1 = moment().add(2, 'days').format("MMMM Do YYYY");

        var futureIconValue2 = data.daily[3].weather[0].icon
        var futureTempMinValue2 = data.daily[3].temp.min
        var futureTempMaxValue2 = data.daily[3].temp.max
        var futureWindValue2 = data.daily[3].wind_speed
        var futureHumidValue2 = data.daily[3].humidity
        var futureDayValue2 = moment().add(3, 'days').format("MMMM Do YYYY");

        var futureIconValue3 = data.daily[4].weather[0].icon
        var futureTempMinValue3 = data.daily[4].temp.min
        var futureTempMaxValue3 = data.daily[4].temp.max
        var futureWindValue3 = data.daily[4].wind_speed
        var futureHumidValue3 = data.daily[4].humidity
        var futureDayValue3 = moment().add(4, 'days').format("MMMM Do YYYY");

        var futureIconValue4 = data.daily[5].weather[0].icon
        var futureTempMinValue4 = data.daily[5].temp.min
        var futureTempMaxValue4 = data.daily[5].temp.max
        var futureWindValue4 = data.daily[5].wind_speed
        var futureHumidValue4 = data.daily[5].humidity
        var futureDayValue4 = moment().add(5, 'days').format("MMMM Do YYYY");

        //this uv value displays the current uv index for the current container
        uv.innerHTML = `${uvValue}`

        futureIcon.src = 'https://openweathermap.org/img/wn/' + futureIconValue + '.png'
        futureTempMin.innerHTML = `${futureTempMinValue}°F`
        futureTempMax.innerHTML = `${futureTempMaxValue}°F`
        futureWind.innerHTML = `${futureWindValue}mph`
        futureHumid.innerHTML = `${futureHumidValue}%`
        futureDay.innerHTML = `${futureDayValue}`

        futureIcon1.src = 'https://openweathermap.org/img/wn/' + futureIconValue1 + '.png'
        futureTempMin1.innerHTML = `${futureTempMinValue1}°F`
        futureTempMax1.innerHTML = `${futureTempMaxValue1}°F`
        futureWind1.innerHTML = `${futureWindValue1}mph`
        futureHumid1.innerHTML = `${futureHumidValue1}%`
        futureDay1.innerHTML = `${futureDayValue1}`

        futureIcon2.src = 'https://openweathermap.org/img/wn/' + futureIconValue2 + '.png'
        futureTempMin2.innerHTML = `${futureTempMinValue2}°F`
        futureTempMax2.innerHTML = `${futureTempMaxValue2}°F`
        futureWind2.innerHTML = `${futureWindValue2}mph`
        futureHumid2.innerHTML = `${futureHumidValue2}%`
        futureDay2.innerHTML = `${futureDayValue2}`

        futureIcon3.src = 'https://openweathermap.org/img/wn/' + futureIconValue3 + '.png'
        futureTempMin3.innerHTML = `${futureTempMinValue3}°F`
        futureTempMax3.innerHTML = `${futureTempMaxValue3}°F`
        futureWind3.innerHTML = `${futureWindValue3}mph`
        futureHumid3.innerHTML = `${futureHumidValue3}%`
        futureDay3.innerHTML = `${futureDayValue3}`

        futureIcon4.src = 'https://openweathermap.org/img/wn/' + futureIconValue4 + '.png'
        futureTempMin4.innerHTML = `${futureTempMinValue4}°F`
        futureTempMax4.innerHTML = `${futureTempMaxValue4}°F`
        futureWind4.innerHTML = `${futureWindValue4}mph`
        futureHumid4.innerHTML = `${futureHumidValue4}%`
        futureDay4.innerHTML = `${futureDayValue4}`

        //if statement to change color of the uv index depending on the uv value
        if(uvValue >= 0 && uvValue <= 2) {
            //change to green
            uv.style.backgroundColor = '#09BC8A';
        } else if (uvValue > 2 && uvValue <= 5) {
            //change to yellow
            uv.style.backgroundColor = '#FFE882'
        } else if (uvValue > 5 && uvValue <= 7) {
            //change to orange
            uv.style.backgroundColor = '#FA8334'
        } else if (uvValue > 7 && uvValue <= 10) {
            //change to red
            uv.style.backgroundColor = '#D95D39'
        }
    })
}


