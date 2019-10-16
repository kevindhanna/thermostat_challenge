
(function(exports){
  function thermostatModel(){
    this.temp = 20;
    this.min = 10
    this.savingMode = true
  };

  thermostatModel.prototype.up = function() {
    if (this.temp >= this._max()) { return null }
    return this.temp += 1;
  };


  thermostatModel.prototype.down = function() {
    if (this.temp <= this.min) { return null }
    return this.temp -= 1;
  };

  thermostatModel.prototype.isSavingMode = function() {
    return this.savingMode
  };

  thermostatModel.prototype._max = function () {
    if (this.savingMode === true) {
      return 25
    } else {
      return 32
    }
  };

  thermostatModel.prototype.resetTemp = function() {
    return this.temp = 20
  }

  thermostatModel.prototype.energyUsage = function() {
    if (this.temp < 18) {
      return "low-usage";
    } else if (this.temp < 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };

  thermostatModel.prototype.switchSavingMode = function() {
    return this.savingMode = !this.savingMode
  };
  exports.thermostatModel = thermostatModel
})(this)