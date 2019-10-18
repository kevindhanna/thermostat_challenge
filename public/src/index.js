(function() {
  window.addEventListener("load", function() {
    var cityObj = $('#city-name');
    var minTemp = $('#min-temp');
    var maxTemp = $('#max-temp');
    var selectCity = $('#city');
    var selectButton = $('#submit-button');
    var upButton = $('button.up-btn');
    var downButton = $('button.down-btn');
    var resetButton = $('button.reset-btn');
    var powerButton = $('button.switch-btn');
    var powerCard = $('div.power-usage');
    var temperatureDisplay = $('#temp-text');

    new WeatherController(selectCity, selectButton, new WeatherView(cityObj,
                                                                    minTemp,
                                                                    maxTemp))
    new ThermostatController(upButton,
                            downButton,
                            powerButton,
                            resetButton,
                            new thermostatModel(),
                            new thermostatView(powerButton,
                                              powerCard,
                                              temperatureDisplay))
  })
})()
