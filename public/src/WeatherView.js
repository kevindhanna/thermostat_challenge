(function(exports){
  function WeatherView(cityObj, minObj, maxObj) {
    this._cityObj = cityObj
    this._minObj = minObj
    this._maxObj = maxObj
  }
  
  WeatherView.prototype = {
    _get: function(city, callback){
      $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`, function(data){
        callback(data)
      })
    },
    
    update: function(city){
      var self = this
      this._get(city, function(data){
        console.log(data.main)
        self._cityObj.text(data.name)
        self._minObj.text('Min: ' + Math.round(data.main.temp_min) + '˚C')
        self._maxObj.text('Max: ' + Math.round(data.main.temp_max) + '˚C')
      })
    }
  }
  exports.WeatherView = WeatherView
})(this)

