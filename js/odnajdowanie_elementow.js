'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var link = document.getElementsByClassName('link');
console.log(link);

var superlink = document.getElementsByClassName('superlink');
console.log(superlink);

var linkiPoTagu = document.getElementsByTagName ('a');
console.log(linkiPoTagu);

var divpoID = document.querySelector ('#parSecond');
console.log(divpoID);

var pierwszyLinkPoSelektorze = document.querySelector ('.superlink');
console.log(pierwszyLinkPoSelektorze);

var linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);

linkiPoSelektorze.forEach( function(link, i) {
    console.log(link.outerHTML);
});
