// ==UserScript==
// @name block_recommendations
// @namespace Violentmonkey Scripts
// @run-at   document-idle
// @grant    none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @include https://www.google.com/search*
// ==/UserScript==

$('.ads-ad').remove();
$('div.exp-outline').remove();
$('[aria-label="Dismiss suggested follow ups"]').parent().parent().remove();
$('div.rc').css({'transition': 'none !important',
                 '-o-transition-property': 'none !important',
                 '-moz-transition-property': 'none !important',
                 '-ms-transition-property': 'none !important',
                 '-webkit-transition-property': 'none !important',
                 'transition-property': 'none !important'
                });

setInterval(function(){
  $('.ads-ad').remove();
  $('div.exp-outline').remove();
  $('[aria-label="Dismiss suggested follow ups"]').parent().parent().remove();
  $('div.rc').css({'transition': 'none !important',
                   '-o-transition-property': 'none !important',
                   '-moz-transition-property': 'none !important',
                   '-ms-transition-property': 'none !important',
                   '-webkit-transition-property': 'none !important',
                   'transition-property': 'none !important'
                    });
}, 1000);