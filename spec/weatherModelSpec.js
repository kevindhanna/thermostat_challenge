
describe('WeatherModel', function() {

  beforeEach(function() {
    weathermodel = new WeatherModel();
  });

  describe('getWeather', function() {
    it('gets the weather for selected city', function() {
      spyOn(weathermodel,'_get');
      weathermodel.getWeather("Sydney,au")
      expect(weathermodel._get).toHaveBeenCalledWith("Sydney,au", jasmine.any(Function))
    });

    it('gets the weather for selected city', function() {
      var jQueryMock = { get: function(){} }
      spyOn(jQueryMock,'get');
      weathermodel.getWeather("Helsinki,fi", jQueryMock)
      expect(jQueryMock.get).toHaveBeenCalledWith("http://api.openweathermap.org/data/2.5/weather?q=Helsinki,fi&appid=4f304d45f3b62616958643460868fcac")
    });

  });
});

// "http://api.openweathermap.org/data/2.5/weather?q=Sydney,au&appid=4f304d45f3b62616958643460868fcac"
