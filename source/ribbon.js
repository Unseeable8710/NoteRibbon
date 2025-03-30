const ribbon = document.getElementById("ribbon").innerHTML;

function getStyleSheet(title) {
  for(var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if(sheet.title == title) {
      return sheet;
    }
  }
}

getStyleSheet("webapp-f5f4ac4e41f43f9d9ca445ed9591e5a8");
