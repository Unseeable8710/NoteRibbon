// ==UserScript==
// @name         NoteRibbon
// @namespace    Unseeable871's Stuff
// @version      v0.1.0-b1_38
// @description  Replaces Noteflight's palette in the score editor with a fully functional ribbon, inspired by the ribbon in Windows 8, Windows 8.1, Windows 10, and Microsoft Office apps.
// @author       Colton Stone
// @license      GNU GPL v3.0
// @tag          productivity
// @tag          utilities
// @match        *://www.noteflight.com/scores/view/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=noteflight.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        unsafeWindow
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// @require      https://github.com/Unseeable8710/NoteRibbon/raw/refs/heads/main/source/ribbon.js
// @require      https://github.com/Unseeable8710/NoteRibbon/raw/refs/heads/main/source/settings.js
// @require      https://github.com/Unseeable8710/NoteRibbon/raw/refs/heads/main/source/noteribbon.js
// @downloadURL  https://github.com/Unseeable8710/NoteRibbon/raw/refs/heads/main/script/NoteRibbon.user.js
// @updateURL    https://github.com/Unseeable8710/NoteRibbon/raw/refs/heads/main/script/NoteRibbon.user.js
// ==/UserScript==

function showHideSettings() {
  if ($("#noteRibbonSettings.hid") != null) {
    $("#noteRibbonSettings").classList.remove("hid");
  } else if ($("#noteRibbonSetings") == null) {
    $("#noteRibbonSettings").classList.add("hid");
  }
}
GM_registerMenuCommand("Open NoteRibbon Settings", showHideSettings);
