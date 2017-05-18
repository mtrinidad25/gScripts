//backs up a SS into a new SS

var spreadsheetID = "",
    sourceSheet = "",
    backupSheet = "";

var copyRange = "";
var pasteRange = "";

function backup() {
    //spreadsheet declaration
    var ss = SpreadsheetApp.openById(spreadsheetID),
    //sheet declaration
        source = ss.getSheetByName(sourceSheet),
        backup = ss.getSheetByName(backupSheet);

    //get sheet's last row
    var lastRow = backup.getLastRow();

    //range fetching
    var copyrange = results.getRange(copyRange);
        pasterange = backup.getRange(lastRow + 1, 1);

    //paste contents only
    copyrange.copyTo(pasterange, { contentsOnly: true });
}
