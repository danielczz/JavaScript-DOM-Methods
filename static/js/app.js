// Declaration of HTML references 
// Select the submit and reset button
var submit = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");

reset.on("click", function(){
  // d3.event.preventDefault();
  // document.getElementById("ufo-table").innerHTML="";
  // ("ufo-table td").remove();
});

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Reference to select input elements on HTML
  var inputElementDatetime = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get values from inputElement value
  var inputValueDatetime = inputElementDatetime.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  // Review values on console
  // console.log(inputElementDatetime)
  // console.log(inputValueCity)
  // console.log(inputValueState)
  // console.log(inputValueCountry)
  // console.log(inputValueShape)

  // Filter data using input values for DateTime
  var filteredData = data.filter(report => report.datetime === inputValueDatetime);
  
  // Review values on console
  console.log(filteredData);

  // Get a reference to the table body

var tbody = d3.select("tbody");

d3.selectAll("tbody > *").remove();

// BONUS: Refactor to use Arrow Functions!
filteredData.forEach((UFOReport) => {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });

});

});
