// ==UserScript==
// @name block youtube live ad
// @namespace Violentmonkey Scripts
// @run-at   document-idle
// @grant    none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include https://www.youtube.com/watch*
// ==/UserScript==

$('ytd-popup-container').remove();

setInterval(function(){
  $('ytd-popup-container').remove();
}, 1000);
