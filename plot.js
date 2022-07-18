// Sorting cities by growth in descending order
var sortedCities = cityGrowths.sort((a, b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities)

// Creating variables to store name and growth amounts for our top 5 growth cities
var topFiveCityNames = cityGrowths.map(city => city.City).slice(0,5);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016)).slice(0,5);

// Creating a Bar Chart
var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: {title: "City" },
  yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);