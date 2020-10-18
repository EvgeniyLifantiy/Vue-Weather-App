
class Forecast {
  constructor (MinTemp, MaxTemp, Description, Day, Icon) {
    this.MinTemp = MinTemp
    this.MaxTemp = MaxTemp
    this.Description = Description
    this.Day = Day
    this.Icon = Icon
  }
}

const forecast = []

showForecast('Moscow')

function showForecast (City) {
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + City + '&appid=701bd4cbe98492ced20181dc39ae5329') // get Api and parse to json
    .then(function (resp) {
      return resp.json()
    })
    .then(function (data) {
      getForecast(data)
    })
}

function getForecast (data) {
  for (let i = 0; i < data.list.length; i = i + 8) { // we take values in 24 hours from the current moment
    const forecastOfWeather = new Forecast(
      data.list[i].main.temp_min,
      data.list[i].main.temp_max,
      data.list[i].weather[0].description,
      data.list[i].dt_txt,
      data.list[i].weather[0].icon
    )
    forecast.push(forecastOfWeather)
  }
  return (forecast)
}

export default {
  showForecast,
  getForecast,
  forecast
}
