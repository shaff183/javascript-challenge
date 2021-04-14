console.log("app.js has loaded");

// from data.js
var tableData = data;

// YOUR CODE HERE!

// get a refereence to the tbody section where the table data will go
var tbody = d3.select("tbody");

// for each array of data, insert into the tbody section
tableData.forEach(ufoSiting => {
    // add a new row for each entry
    var newRow = tbody.append("tr");

    // loop through each entry 
    Object.entries(ufoSiting).forEach(function([key, value]) {
        // testing if we are logging the correct values for each entry
        console.log(key, value);

        // add these to the table, each with a new cell
        var newCell = newRow.append("td");
        newCell.text(value);
    })

})

// create event handlers to run when user inputs a date
var button = d3.select("#filter-btn");
var form = d3.select("#formz");

// create the event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


// create funtion to filter through data matching criteria
function runEnter(){

    // prevent the page from refreshing
    d3.event.preventDefault();


    //deleting the table rows when button is clicked
    // maybe try creating a function that deletes rows when button is clicked


    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // filter through the data based on the date provided by user
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    // display only the data that matches
    filteredData.forEach(ufoSiting => {
        // add a new row for each entry
        var newRow = tbody.append("tr");
    
        // loop through each entry 
        Object.entries(ufoSiting).forEach(function([key, value]) {
            // testing if we are logging the correct values for each entry
            console.log(key, value);
    
            // add these to the table, each with a new cell
            var newCell = newRow.append("td");
            newCell.text(value);
        })
    
    })

};

