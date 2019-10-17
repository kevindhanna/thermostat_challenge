function WeatherModel(url, key) {

}
WeatherModel.prototype = {
  _get: function(city, $) {
    console.log($)
    return $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f304d45f3b62616958643460868fcac`)
  },
  getWeather: function(city, jquery) {
    var jquery = jquery || $
    return this._get(city, jquery)
  }
}
