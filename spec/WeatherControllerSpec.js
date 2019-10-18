describe('WeatherController', function() {

  beforeEach(function(){
    selectMock = {value: 'London,uk'}
    buttonMock = $.fn
    weatherViewMock = {update: function(){}}
    spyOn(selectMock, 'value')
    spyOn(weatherViewMock, 'update')
    weatherController = new WeatherController(selectMock, buttonMock, weatherViewMock)
  })
  describe('::new', function() {
    it('stores the button and select objects', function() {
      expect(weatherController._select).toEqual(selectMock)
      expect(weatherController._button).toEqual(buttonMock)
      expect(weatherController._weatherView).toEqual(weatherViewMock)
    })
  })

  describe('when a new city is selected', function() {
    it('updates the weatherView', function() {
      buttonMock.toggle('click')
      expect(selectMock.value).toHaveBeenCalled()
      expect(weatherViewMock.update).toHaveBeenCalledWith('London,uk')
    })
  })

})