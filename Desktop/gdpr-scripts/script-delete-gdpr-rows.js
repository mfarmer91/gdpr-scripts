function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu('GDPR scripts')
        .addItem('Delete EU country rows', 'readRows')
        .addToUi();
}

function readRows() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var values = rows.getValues();

  var rowsDeleted = 0;
  for (var i = 0; i <= numRows - 1; i++) {
    var row = values[i];
    if (row[4].indexOf("Germany") > -1
         || row[4].indexOf("Serbia") > -1
         || row[4].indexOf("Austria") > -1
         || row[4].indexOf("Belgium") > -1
         || row[4].indexOf("Bulgaria") > -1
         || row[4].indexOf("Croatia") > -1
         || row[4].indexOf("Hrvatska") > -1
         || row[4].indexOf("Cyprus") > -1
         || row[4].indexOf("Czech Republic") > -1
         || row[4].indexOf("Denmark") > -1
         || row[4].indexOf("Estonia") > -1
         || row[4].indexOf("Finland") > -1
         || row[4].indexOf("France") > -1
         || row[4].indexOf("Greece") > -1
         || row[4].indexOf("Hungary") > -1
         || row[4].indexOf("Ireland") > -1
         || row[4].indexOf("Italy") > -1
         || row[4].indexOf("Latvia") > -1
         || row[4].indexOf("Lithuania") > -1
         || row[4].indexOf("Luxembourg") > -1
         || row[4].indexOf("Malta") > -1
         || row[4].indexOf("Netherlands") > -1
         || row[4].indexOf("Poland") > -1
         || row[4].indexOf("Portugal") > -1
         || row[4].indexOf("Romania") > -1
         || row[4].indexOf("Slovakia") > -1
         || row[4].indexOf("Slovenia") > -1
         || row[4].indexOf("Spain") > -1
         || row[4].indexOf("Sweden") > -1
         || row[4].indexOf("UK") > -1
    ) {
      sheet.deleteRow((parseInt(i) + 1) - rowsDeleted);
      rowsDeleted++;
    }
  }
};
