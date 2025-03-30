var uwind = uwindow = unsafeWindow;

function showHideSettings() {
  if (getElem("#noteRibbonSettings.hid") != null) {
    getElem("#noteRibbonSettings").classList.remove("hid");
  } else if (getElem("#noteRibbonSetings") == null) {
    getElem("#noteRibbonSettings").classList.add("hid");
  }
}
function getElem(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });
    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
GM_registerMenuCommand("Open NoteRibbon Settings", showHideSettings);

(function() {
  const scorePalette = getElem("#scorePalette");
  const settingsElem = document.createElement("div");
  settingsElem.id = "noteRibbonSettings";
  settingsElem.classList.add("hid");
  settingsElem.innerHTML = settings;
  scorePalette.innerHTML = ribbon;
})();
