// ==UserScript==
// @name block_doodle
// @namespace Violentmonkey Scripts
// @run-at  document-idle
// @grant   none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include https://www.google.com/
// ==/UserScript==

$('div#hplogo').remove()
$('div#prm-pt').remove()
$('div#footer').remove()

setInterval(function(){
  $('div#hplogo').remove()
  $('div#prm-pt').remove()
  $('div#footer').remove()
}, 1000);