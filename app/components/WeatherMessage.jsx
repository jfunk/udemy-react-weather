var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {temp, location} = this.props
//
//     return (
//       <h3>It is {temp} in {location}</h3>
//     )
//   }
// });

// in ES6 we can destructure props into temp and location right in the arrow function
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage;
