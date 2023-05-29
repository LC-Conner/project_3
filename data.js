// Function to load local CSV file
function loadCSV(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
        callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var stockPriceCsv = "stockprice.csv";

// draw stock price by Plotly
loadCSV(stockPriceCsv, function(inputData) {
    // Parse the CSV data
    var parsedData = Plotly.d3.csv.parse(inputData);

    console.log(parsedData);

    // Extract x and y values from the parsed data
    // Date,JP Morgan,Apple,Amazon,Walmart,Target,Microsoft
    var dates = parsedData.map(function(row) { return row['Date']; });
    var jp = parsedData.map(function(row) { return row['JP Morgan']; });
    var ap = parsedData.map(function(row) { return row['Apple']; });
    var amz = parsedData.map(function(row) { return row['Amazon']; });
    var wal = parsedData.map(function(row) { return row['Walmart']; });
    var tar = parsedData.map(function(row) { return row['Target']; });
    var msft = parsedData.map(function(row) { return row['Microsoft']; });


    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'JP Morgan',
        x: dates,
        y: jp,
        line: {color: '#F7BECF'}
    }
    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Apple',
        x: dates,
        y: ap,
        line: {color: '#03BECF'}
    }
    var trace3 = {
        type: "scatter",
        mode: "lines",
        name: 'Amazon',
        x: dates,
        y: amz,
        line: {color: '#970E3F'}
    }
    var trace4 = {
        type: "scatter",
        mode: "lines",
        name: 'Walmart',
        x: dates,
        y: wal,
        line: {color: '#371ECF'}
    }
    var trace5 = {
        type: "scatter",
        mode: "lines",
        name: 'Target',
        x: dates,
        y: tar,
        line: {color: '#9750CF'}
    }
    var trace6 = {
        type: "scatter",
        mode: "lines",
        name: 'Microsoft',
        x: dates,
        y: msft,
        line: {color: '#87BE0F'}
    }

     // Create the layout
    var layout = {
        title: 'Stock Prices',
        xaxis: {
            title: 'Date'
        },
        yaxis: {
            title: 'Price'
        }
    };

    var data = [trace1, trace2, trace3, trace4, trace5, trace6]

    // Create the plotly figure
    Plotly.newPlot('stock_price_plot', data, layout);
});


// draw daily return by Chart.js
var dailyReturnCsv = "dailyreturn.csv";

loadCSV(dailyReturnCsv, function(inputData) {
    var parsedData = Plotly.d3.csv.parse(inputData);

    var dates = parsedData.map(function(row) { return row["Date"]; });
    var total = parsedData.map(function(row) { return row["Total"]; });
    var returnRates = parsedData.map(function(row) { return row["daily_return_rate_optimal"]; });

    const ctx = document.getElementById('daily_return_plot');

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Total',
                data: total,
                // borderWidth: 1,
                borderColor: "#3366ee",
                backgroundColor: "#3366ee",
                order: 1,
                yAxisID: 'y'
            },
            {
                label: 'Return Rate',
                data: returnRates,
                borderColor: "#F77777",
                backgroundColor: "#F77777",
                borderWidth: 1,
                type: 'line',
                pointRadius: 0,
                order: 0,
                yAxisID: 'y1'
            }
        ]
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Return Chart'
                },
                zoom: {
                    pan: {
                        enabled: true,
                        mode: 'xy',
                    },
                    zoom: {
                        pinch: {
                            enabled: true
                        },
                        mode: 'x' // or 'x' for "drag" version  
                    },
                }
            },
            scales: {
                y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                },
                y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
          
                  // grid line settings
                  grid: {
                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                  },
                },
              }
        },
    };

    new Chart(ctx, config);
})
