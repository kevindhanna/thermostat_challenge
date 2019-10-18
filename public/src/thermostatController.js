(function(exports){
  function ThermostatController(upButton, downButton, powerButton, resetButton, thermostatModel, thermostatView) {
    this._upButton = upButton
    this._downButton = downButton
    this._resetButton = resetButton
    this._powerButton = powerButton
    this._thermostatModel = thermostatModel;
    this._thermostatView = thermostatView;
    
    this._setupButtontoAction();
    this._updateThermostatView(this._thermostatModel.temp)
  }
  ThermostatController.prototype = {
    _setupButtontoAction: function() {
      var self = this
      this._upButton.click(function() {
        var temp = self._thermostatModel.up();
        if (temp) {self._updateThermostatView(temp)}
      })
      this._downButton.click(function() {
        var temp = self._thermostatModel.down();
        if(temp) {self._updateThermostatView(temp)}
      })
      this._resetButton.click(function (){
        var temp = self._thermostatModel.resetTemp();
        self._updateThermostatView(temp)
      })
      this._powerButton.click(function() {
        var value = self._thermostatModel.switchSavingMode();
        self._updateThermostatViewPowerButton(value);
      })
    },

    _updateThermostatView: function(temp) {
      this._thermostatView.update(temp, this._thermostatModel.energyUsage())
    },

    _updateThermostatViewPowerButton: function(value) {
      this._thermostatView.updatePowerButton(value)
    }
  }
  myFunction = function(){
    return 1
  }

  exports.ThermostatController = ThermostatController
})(this);
