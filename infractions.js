//gets tardiness for specific date & program
function getSpecificTardiness() {
    var b = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Infractions");

    var url = env.infractionsURL,
        options = {
        "method": "get"
        };

    var response = UrlFetchApp.fetch(url, options);
    
    Browser.msgBox(JSON.stringify(response))
    
    
    var pasteArray = [],
        lastRow = b.getLastRow();

    b.getRange("A2:G").clear();

    for (var i = 1; i < response.table.length; i++) {
        var lr = b.getLastRow(),
            range = b.getRange(lr + 1, 1, 1, 7);

        range.setValues([response.table[i]]);
    }
}
