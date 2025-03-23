function showHideSettings() {
  console.log("Menu command executed");
}
var uwind = uwindow = unsafeWindow;

GM_registerMenuCommand("Open NoteRibbon Settings", showHideSettings);
(function() {
  'use strict';
  setTimeout(() => {
    const scorePalette = document.getElementById("scorePalette");
    console.log(scorePalette);
  }, 10000);
})();
