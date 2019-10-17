(function(exports) {
  function thermostatView(powerButton, powerCard, temperatureDisplay) {
    this._powerButton = powerButton;
    this._powerCard = powerCard;
    this._temperatureDisplay = temperatureDisplay;
  }

  thermostatView.prototype = {
    _setCardColour: function(energyUsage) {
      var card = this._powerCard
      if (energyUsage === 'low-usage') {
        card.removeClass('bg-danger')
        card.removeClass('bg-warning')
        card.addClass('bg-success')
      } else if (energyUsage === 'medium-usage') {
        card.removeClass('bg-danger')
        card.removeClass('bg-success')
        card.addClass('bg-warning')
      } else {
        card.removeClass('bg-warning')
        card.removeClass('bg-success')
        card.addClass('bg-danger')
      };
    },

    _setPowerButtonColour: function(value){
      if (value === true) {
        this._powerButton.addClass('btn-success')
        this._powerButton.removeClass('btn-dark')
      } else {
        this._powerButton.removeClass('btn-success')
        this._powerButton.addClass('btn-dark')
      }
    },

    update: function(temp, energyUsage) {
      this._temperatureDisplay.text(temp);
      this._setCardColour(energyUsage);
    },

    updatePowerButton: function(value){
      this._setPowerButtonColour(value)
    }
  }
  exports.thermostatView = thermostatView;
})(this)