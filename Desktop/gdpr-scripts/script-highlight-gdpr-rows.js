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
  var rangeValues = searchRange.getValues();
  for ( i = 0; i < lastColumn - 1; i++){
    for ( j = 0 ; j < lastRow - 1; j++){
      if(rangeValues[j][i].toUpperCase().indexOf("AUSTRIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("BELGIUM") > -1
         || rangeValues[j][i].toUpperCase().indexOf("BULGARIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("CROATIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("HRVATSKA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("CYPRUS") > -1
         || rangeValues[j][i].toUpperCase().indexOf("CZECH REPUBLIC") > -1
         || rangeValues[j][i].toUpperCase().indexOf("DENMARK") > -1
         || rangeValues[j][i].toUpperCase().indexOf("ESTONIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("FINLAND") > -1
         || rangeValues[j][i].toUpperCase().indexOf("FRANCE") > -1
         || rangeValues[j][i].toUpperCase().indexOf("GERMANY") > -1
         || rangeValues[j][i].toUpperCase().indexOf("GREECE") > -1
         || rangeValues[j][i].toUpperCase().indexOf("GREAT BRITAIN ") > -1
         || rangeValues[j][i].toUpperCase().indexOf("UK") > -1
         || rangeValues[j][i].toUpperCase().indexOf("LUXEMBOURG") > -1
         || rangeValues[j][i].toUpperCase().indexOf("MALTA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("NETHERLANDS") > -1
         || rangeValues[j][i].toUpperCase().indexOf("POLAND") > -1
         || rangeValues[j][i].toUpperCase().indexOf("PORTUGAL") > -1
         || rangeValues[j][i].toUpperCase().indexOf("ROMANIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("SLOVAKIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("SLOVENIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("SPAIN") > -1
         || rangeValues[j][i].toUpperCase().indexOf("SWEDEN") > -1
         || rangeValues[j][i].toUpperCase().indexOf("LITHUANIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("LATVIA") > -1
         || rangeValues[j][i].toUpperCase().indexOf("ITALY") > -1
         || rangeValues[j][i].toUpperCase().indexOf("IRELAND") > -1
         || rangeValues[j][i].toUpperCase().indexOf("HUNGARY") > -1){
        sheet.getRange(j+2,i+2).setBackground("#cc4125"); //address
      }else if (rangeValues[j][i] === 0){
        sheet.getRange(j+2,i+2).setBackground("#e69138");
      };
    };
  };

};
