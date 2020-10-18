class Forecast {
  constructor (Temp, Description, Humidity, Icon) {
    this.Temp = Temp
    this.Description = Description
    this.Humidity = Humidity
    this.Icon = Icon
  }
}

const forecast = []

TodayshowForecast('Moscow')

function TodayshowForecast (City) {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + City + '&appid=701bd4cbe98492ced20181dc39ae5329') // get Api and parse to json
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      getForecast(data)
    })
}
function getForecast (data) {
  const forecastOfWeather = new Forecast(
    data.main.temp,
    data.weather[0].main,
    data.main.humidity,
    data.weather[0].icon
  )
  forecast.push(forecastOfWeather)
  return (forecast)
}

export default {
  forecast
}
