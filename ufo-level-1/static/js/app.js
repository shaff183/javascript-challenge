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