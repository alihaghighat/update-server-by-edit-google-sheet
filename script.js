function onEdit(e) {
  // Get the active sheet where the edit occurred
  var sheet = e.source.getActiveSheet();
  // Get the range of the cell that was edited
  var range = e.range;
  // Get the row number of the edited cell
  var row = range.getRow();
  // Get the data from the entire row where the edit occurred
  var rowData = sheet.getRange(row, 1, 1, sheet.getLastColumn()).getValues()[0];
  // Get the column headers from the second row of the sheet
  var headers = sheet.getRange(2, 1, 1, sheet.getLastColumn()).getValues()[0];
  // Get the email address of the user who made the edit
  var user = Session.getActiveUser().getEmail();

  // Create an object to combine column headers with their respective row data
  var dataWithHeaders = {};
  for (var i = 0; i < headers.length; i++) {
    dataWithHeaders[headers[i]] = rowData[i];
  }

  // Set up the payload for the POST request
  var payload = {
    "id": row,          // Row number where the edit occurred
    "token": "nane307", // Static token value for authentication (if required)
    "userA": user,      // Email of the user who edited the sheet
    "data": dataWithHeaders // Combined headers and row data as an object
  };

  // Options for the POST request
  var options = {
    "method": "post",              // HTTP method
    "contentType": "application/json", // Content type of the request
    "payload": JSON.stringify(payload) // Payload converted to JSON string
  };

  try {
    // Make the request to the specified API endpoint
    var response = UrlFetchApp.fetch("https://api.csp-co.com/store/update", options);

    // Log the response from the API to the Logger
    Logger.log(response.getContentText());
  } catch (e) {
    // Log any errors that occur during the fetch call
    Logger.log('Error: ' + e.toString());
  }
}
