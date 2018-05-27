var ui = SpreadsheetApp.getUi();
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var rangeData = sheet.getDataRange();
var lastColumn = rangeData.getLastColumn();
var lastRow = rangeData.getLastRow();
var searchRange = sheet.getRange(2,2, lastRow-1, lastColumn-1);

function onOpen() {
  ui.createMenu('GDPR scripts')
  .addItem('Highlight rows', 'highlightRows')
  .addToUi();
};

function highlightRows() {
  // Get array of values in the search Range
  var rangeValues = searchRange.getValues();
  // Loop through array and if condition met, add relevant
  // background color.
  for ( i = 0; i < lastColumn - 1; i++){
    for ( j = 0 ; j < lastRow - 1; j++){
      if(rangeValues[j][i].indexOf("Austria") > -1
         || rangeValues[j][i].indexOf("Belgium") > -1
         || rangeValues[j][i].indexOf("Bulgaria") > -1
         || rangeValues[j][i].indexOf("Croatia") > -1
         || rangeValues[j][i].indexOf("Hrvatska") > -1
         || rangeValues[j][i].indexOf("Cyprus") > -1
         || rangeValues[j][i].indexOf("Czech Republic") > -1
         || rangeValues[j][i].indexOf("Denmark") > -1
         || rangeValues[j][i].indexOf("Estonia") > -1
         || rangeValues[j][i].indexOf("Finland") > -1
         || rangeValues[j][i].indexOf("France") > -1
         || rangeValues[j][i].indexOf("Germany") > -1
         || rangeValues[j][i].indexOf("Greece") > -1
         || rangeValues[j][i].indexOf("Great Britain ") > -1
         || rangeValues[j][i].indexOf("UK") > -1
         || rangeValues[j][i].indexOf("Luxembourg") > -1
         || rangeValues[j][i].indexOf("Malta") > -1
         || rangeValues[j][i].indexOf("Netherlands") > -1
         || rangeValues[j][i].indexOf("Poland") > -1
         || rangeValues[j][i].indexOf("Portugal") > -1
         || rangeValues[j][i].indexOf("Romania") > -1
         || rangeValues[j][i].indexOf("Slovakia") > -1
         || rangeValues[j][i].indexOf("Slovenia") > -1
         || rangeValues[j][i].indexOf("Spain") > -1
         || rangeValues[j][i].indexOf("Sweden") > -1){
        sheet.getRange(j+2,i+5).setBackground("#cc4125"); //donation amount
        sheet.getRange(j+2,i+4).setBackground("#cc4125"); //seller profit
        sheet.getRange(j+2,i+3).setBackground("#cc4125"); //order number
        sheet.getRange(j+2,i+2).setBackground("#cc4125"); //address
        sheet.getRange(j+2,i+1).setBackground("#cc4125"); //email
        sheet.getRange(j+2,i-1).setBackground("#cc4125"); //order number
        sheet.getRange(j+2,i-2).setBackground("#cc4125"); //campaign name

      }else if (rangeValues[j][i] === 0){
        sheet.getRange(j+2,i+2).setBackground("#e69138");
      };
    };
  };

};
