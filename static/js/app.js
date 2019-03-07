// Declaration of HTML references 
// Select the submit and reset button
var submit = d3.select("#filter-btn");

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

  // Filter data using input values
  // Getting value entry Lengths
  var entryLengthDatetime = inputValueDatetime.length;
  var entryLengthCity = inputValueCity.length;
  var entryLengthState = inputValueState.length;
  var entryLengthCountry = inputValueCountry.length;
  var entryLengthShape = inputValueShape.length;


  if (entryLengthDatetime > 0) {
    console.log(inputValueDatetime)
    var filteredData = data.filter(report => report.datetime === inputValueDatetime);
  }

  else if (entryLengthCity > 0) {
    var filteredData = data.filter(report => report.city === inputValueCity);
  }

  else if (entryLengthState > 0) {
    var filteredData = data.filter(report => report.state === inputValueState);
  }
  
  else if (entryLengthCountry > 0) {
    var filteredData = data.filter(report => report.country === inputValueCountry);
  }

  else if (entryLengthShape > 0) {
    var filteredData = data.filter(report => report.shape === inputValueShape);
  }

    // Review values on console
    console.log(filteredData);

  // Get a reference to the table body 
  var tbody = d3.select("tbody");
  
  // Remove possible data populated before 
  d3.selectAll("tbody > *").remove();
  
  // Use filteredData to populate table using ForEach
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});
