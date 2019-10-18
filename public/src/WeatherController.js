(function(exports){
  function WeatherController(select, button, weatherView) {
    this._select = select
    this._button = button
    this._weatherView = weatherView
  
    this._setupButtonToAction()
    this._weatherView.update('London,uk')
  }
  
  WeatherController.prototype = {
    _setupButtonToAction: function() {
      var self = this
      this._button.click(function() {
        self._weatherView.update(self._select.children('option:selected').val())
      })
    }
  }
  
  exports.WeatherController = WeatherController
})(this)
