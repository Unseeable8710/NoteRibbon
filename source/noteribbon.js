var uw = uwind = uwindow = unsafeWindow;

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
function showHideSettings() {
  if (getElem("#noteRibbonSettings.hid") != null) {
    getElem("#noteRibbonSettings").classList.remove("hid");
  } else if (getElem("#noteRibbonSetings") == null) {
    getElem("#noteRibbonSettings").classList.add("hid");
  }
}

GM_registerMenuCommand("Open NoteRibbon Settings", showHideSettings);

async function getRemoteHTML(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: Status: ${response.status}`);
    }
    const htmlText = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    return doc;
  } catch (error) {
    console.error('Failed to fetch or parse HTML:', error);
  }
}

console.log(getRemoteHTML("https://raw.githubusercontent.com/Unseeable8710/NoteRibbon/refs/heads/main/source/ribbon.html"));

(function() {
  const scorePalette = getElem("#scorePalette");
  const settingsElem = document.createElement("div");
  settingsElem.id = "noteRibbonSettings";
  settingsElem.classList.add("hid");
  settingsElem.innerHTML = settings;
  scorePalette.innerHTML = ribbon;
})();
