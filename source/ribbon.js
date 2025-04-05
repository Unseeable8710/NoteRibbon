const ribbon = document.getElementById("ribbon").innerHTML;
const fileTab = document.getElementById("fileTab");
const editTab = document.getElementById("editTab");
const durationTab = document.getElementById("durationTab");
const rhythmTab = document.getElementById("rhythmTab");
const pitchTab = document.getElementById("pitchTab");
const tempoTab = document.getElementById("tempoTab");
const textTab = document.getElementById("textTab");
const measureTab = document.getElementById("measureTab");
const layoutTab = document.getElementById("layoutTab");
const bracketsTab = document.getElementById("bracketsTab");
const repeatTab = document.getElementById("repeatTab");
const dynamicsTab = document.getElementById("dynamicsTab");
const articulationTab = document.getElementById("articulationTab");
const ornamentTab = document.getElementById("ornamentTab");
const noteTab = document.getElementById("noteTab");
const voiceTab = document.getElementById("voiceTab");
const tabTab = document.getElementById("tabTab");
const linesTab = document.getElementById("linesTab");
const colorTab = document.getElementById("colorTab");
const soundTab = document.getElementById("soundTab");
const viewTab = document.getElementById("viewTab");
const tabs = [fileTab, editTab, durationTab, rhythmTab, pitchTab, tempoTab, textTab, measureTab, layoutTab, bracketsTab, repeatTab, dynamicsTab, articulationTab, ornamentTab, noteTab, voiceTab, tabTab, linesTab, colorTab, soundTab, viewTab];
var state = false;
var cssDoc = getStyleSheet("webapp-f5f4ac4e41f43f9d9ca445ed9591e5a8");
var sheet = cssDoc.sheet ? cssDoc.sheet : cssDoc.styleSheet;

function toggleTab(tab) {
  if (!tab.classList.contains("activeTab")) {
    tab.classList.add("activeTab");
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] != tab) {
        tabs[i].classList.remove("activeTab");
      }
    }
  }
}

for (var i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    toggleTab(e.target);
  });
}

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
