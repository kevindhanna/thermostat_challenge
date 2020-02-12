
describe('WeatherView', function() {

  beforeEach(function() {
    cityMock = {text: function(){console.log('city called')}}
    minMock = {text: function(){console.log('min called')}}
    maxMock = {text: function(){console.log('max called')}}
    spyOn(minMock, 'text')
    spyOn(maxMock, 'text')
    weatherView = new WeatherView(cityMock, minMock, maxMock)
  });
  
  describe('::new', function() {
    it('stores html objects to store values', function() {
      expect(weatherView._cityObj).toEqual(cityMock)
      expect(weatherView._minObj).toEqual(minMock)
      expect(weatherView._maxObj).toEqual(maxMock)
    })
  })
  
  describe('update', function() {
    it('changes the text of the weatherView objects', function(done) {
      weatherView.update('Sydney,au')
      expect(cityMock.text).toHaveBeenCalledWith('Sydney')
      expect(minMock.text).toHaveBeenCalled()
      expect(maxMock.text).toHaveBeenCalled()
      done()
    })

    it('gets the weatherView for the selected city from the OpenWeather API', function(done){
      spyOn($, 'get')
      weatherView.update('London')
      expect(jQuery.get).toHaveBeenCalled()
      done()
    })
  })

});
