// ==UserScript==
// @name           origin server
// @namespace      tv.com
// @description    reads the tv.com origin server
// @include        http://*www.tv.com/*
// ==/UserScript==

var origin = document.createElement("div");
var header_area = document.getElementById('header_area');
var host = header_area.innerHTML.match('origin host: (.+)\-\-\>')[1];

//onclick="$(\'origin_host\').style.display = \'block\'; return false;" ' +
origin.innerHTML = '<div id="origin_host" ' +
    'style="margin: 0 auto 0 auto; margin-bottom: 5px;' +
    'border-bottom: 1px solid #000000; border-right: 1px solid #000000; ' +
    'width: auto; float: left; padding: 2px;  ' + 
    'font-size: small; background-color: #FF; ' +
    'color: #006699;"><p style="margin: 2px 0 1px 0;"> ' +
    host + 
    '</p></div>';

if (host) {
    document.body.insertBefore(origin, document.body.firstChild);
}
