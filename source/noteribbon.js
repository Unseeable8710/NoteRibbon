var uwind = uwindow = unsafeWindow;
function showHideSettings() {
  console.log("Menu command executed");
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
  const paletteDrop = getElem(".sectionMenuTriggerContainer");
  const sectionsWrapper = getElem("#sectionsWrapper");
  sectionsWrapper.innerHTML = ""
})();
