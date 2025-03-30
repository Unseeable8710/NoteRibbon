const ribbon = document.getElementById("ribbon").innerHTML;
var cssDoc = getStyleSheet("webapp-f5f4ac4e41f43f9d9ca445ed9591e5a8");
var sheet = cssDoc.sheet ? cssDoc.sheet : cssDoc.styleSheet;

function getStyleSheet(title) {
  for(var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if(sheet.title == title) {
      return sheet;
    }
  }
}

function delCssRule(rule) {
  if (sheet.cssRules) {
    for (var i = 0; i < sheet.cssRules.length; i++) {
      if (sheet.cssRules[i].selectorText === rule) {
        // console.log(sheet.cssRules[i]);
        sheet.deleteRule (i);
      }
    }
  } else {
    for (var i = 0; i < sheet.rules.length; i++) {
      if (sheet.rules[i].selectorText === rule) {
        // console.log(sheet.cssRules[i]);
        sheet.removeRule (i);
      }
    }
  }
}

delCssRule(".paletteElement");
