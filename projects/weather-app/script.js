let cityName = document.querySelector(".city")
let dateTime = document.querySelector(".date-time")
let weatherForecast = document.querySelector(".weather-forecast")
let weaterIcon = document.querySelector(".weather-icon")
let weatherTemprature = document.querySelector(".weather-temprature")
let weatherMinTemprature = document.querySelector(".min")
let weatherMaxTemprature = document.querySelector(".max")

let weatherFeelsLike = document.querySelector("#feelslike")
let weatherHumidity = document.querySelector("#humidity")
let weatherPressure = document.querySelector("#pressure")
let  weatherWind = document.querySelector("#wind")
let city = document.querySelector(".weather-search")

let City = "chiniot"

city.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const cityname = document.querySelector("#search");
    console.log(cityname.value)
    City =  cityname.value;
    getWeatherData();
    cityname.value = ""
})


const getCountryName = (country)=>{
  return new Intl.DisplayNames([country], { type: "region" }).of(country);
}


const getDateTime = (dt)=>{
    const curdate = new Date(dt * 1000);
options = {
    weekday: 'long',
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric", 
    minute: "numeric",
    second: "numeric",
};
const formatter = new Intl.DateTimeFormat("en-US" , options).format(curdate)
return formatter;
}
const getWeatherData = async ()=>{
    const weatherApiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${City}&APPID=0aa6b1194da9e51d08d9b6dc5b195b82`
    try {
        const response = await fetch(weatherApiUrl)
        const data = await response.json()
        console.log(data)
        const {main,name,wind,weather,sys,dt} = data;
        console.log(name) 
        cityName.textContent = `${name} , ${getCountryName(sys.country)}`
        dateTime.textContent = `${getDateTime(dt)}`;
        weatherTemprature.innerHTML = `${main.temp}&#176`;
        weatherMinTemprature.innerHTML = `Max :  ${main.temp_min.toFixed()}&#176`;
        weatherMaxTemprature.innerHTML = `Max : ${main.temp_max.toFixed()}&#176`;
        weatherFeelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
        weatherHumidity.innerHTML = `${main.humidity}%`;
        weatherWind.innerHTML = `${wind.speed} m/s`;
        weatherPressure.innerHTML = `${main.pressure} hpa`;
        weatherForecast.innerHTML = `${weather[0].main}`
        weaterIcon.innerHTML = `<img src ="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`
    } catch (error) {
        console.log(error)
    }
}
window.addEventListener("load" , getWeatherData())