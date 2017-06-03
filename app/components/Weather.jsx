var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;


    this.setState({isLoading: true})

    openWeatherMap.getTemp(location).then(function (temp) {
      console.log('location:', location)
      console.log('temp:', temp)
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      })
    }, function (error) {
      that.setState({isLoading: false})
      alert(error.message)
    })
  },
  render: function () {
    var {isLoading, temp, location} = this.state; // ES6 destructuring

    function renderMessage () {
      if (isLoading) {
        console.log('isLoading')
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        console.log('temp && location')
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
