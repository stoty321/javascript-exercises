const convertToCelsius = function(value) {
  let cel = (value - 32) * 5/9//(value * 9/5 + 32);
  //cel = cel.toFixed(1);
  cel = Math.round(cel * 10) / 10;
  return cel;
};

const convertToFahrenheit = function(value) {
  let fahr = (value * 9/5 + 32)//(value - 32) * 5/9;
  //fahr = fahr.toFixed(1);
  fahr = Math.round(fahr * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
