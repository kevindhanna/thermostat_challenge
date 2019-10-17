describe('ThermostatController', function() {
  var thermostatController,
      upButtonMock,
      downButtonMock,
      resetButtonMock,
      powerButtonMock,
      thermostatModelMock,
      thermostatViewMock

  beforeEach(function() {
    upButtonMock = $([])
    upButtonMock.on('custom', function(){console.log("this")})
    upButtonMock.trigger('custom')
    downButtonMock = { click: function(){} }
    resetButtonMock = { click: function(){} }
    powerButtonMock = { click: function(){} }

    thermostatModelMock = jasmine.createSpyObj("thermostatModel", ['temp', 'energyUsage', 'up'])
    thermostatModelMock.energyUsage.and.returnValue('medium-usage')
    thermostatModelMock.temp = function(){
      return 20
    }()
    
    thermostatViewMock = jasmine.createSpyObj("thermostatView", ['update'])

    thermostatController = new ThermostatController(upButtonMock,
                                                    downButtonMock,
                                                    resetButtonMock,
                                                    powerButtonMock,
                                                    thermostatModelMock,
                                                    thermostatViewMock)
  })

  describe('::new', function() {
    it("should set thermostatView to initial values", function(){
      expect(thermostatViewMock.update).toHaveBeenCalledWith(20, 'medium-usage');
    })
  })

  describe('clicking up button', function(){
    it("should allow a button click to update thermostat model", function() {
      console.log('inside test')
      console.log(upButtonMock)
      upButtonMock.trigger('click')
      expect(thermostatModelMock.up).toHaveBeenCalledWith();
    })
  })

})