const convertToCelsius = function(tempf) {
  return resultc = Math.round(((tempf - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(tempc) {
  return resultf = Math.round(((tempc * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
