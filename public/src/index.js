(function() {
  window.addEventListener("load", function() {
    var upButton = $('button.up-btn');
    var downButton = $('button.down-btn');
    var resetButton = $('button.reset-btn');
    var powerButton = $('button.switch-btn');
    var powerCard = $('div.power-usage');
    var temperatureDisplay = $('#temp-text');

    model = new thermostatModel()

    new thermostatController(upButton,
                            downButton,
                            powerButton,
                            resetButton,
                            model,
                            new thermostatView(powerButton,
                                              powerCard,
                                              temperatureDisplay))
  })
})()
