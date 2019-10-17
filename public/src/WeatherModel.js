function WeatherModel(url, key) {

}
WeatherModel.prototype = {
  _get: function(city, $) {
    console.log($)
    return $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f304d45f3b62616958643460868fcac`, function (  resp ){return resp})
  },
  getWeather: function(city, jquery) {
    var jquery = jquery || $
    var weatherparams = this._get(city, jquery)
    var returnArray = []
    returnArray.push(weatherparams.responseJSON.main.temp_min)
    returnArray.push(weatherparams.responseJSON.main.temp_max)
    return returnArray
  }
}
