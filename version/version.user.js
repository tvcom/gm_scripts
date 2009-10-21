// ==UserScript==
// @name           version
// @namespace      tv.com
// @description    what version of the site are we running?
// @include        http://*www.tv.com/*
// ==/UserScript==



var base_url = document.location.protocol + '//' + document.location.host;

var setRPMName = function(responseDetails) {
    var base_div = document.createElement("div")
    var rpm  = (responseDetails.responseText);
    base_div.innerHTML = '<div id="rpm_name" ' +
        'style="margin: 0 auto 0 auto; margin-bottom: 5px;' +
        'border-bottom: 1px solid #000000; border-right: 1px solid #000000; ' +
        'width: auto; float: left; padding: 2px; ' + 
        'font-size: small; background-color: #FF; ' +
        'color: #006699;"><p style="margin: 2px 0 1px 0;"> ' +
        rpm + 
        '</p></div>';

    if (rpm) {
        document.body.insertBefore(base_div, document.body.firstChild);
    }
}

GM_xmlhttpRequest({
    method: 'GET',
    url: base_url + '/conf/RPM_VERSION',
    onload: setRPMName
});

/*

var origin = document.createElement("div");

//onclick="$(\'origin_host\').style.display = \'block\'; return false;" ' +
origin.innerHTML = '<div id="origin_host" ' +
    'style="margin: 0 auto 0 auto; margin-bottom: 5px;' +
    'border-bottom: 1px solid #000000; border-right: 1px solid #000000; ' +
    'width: auto; float: right;  position: absolute; ' + 
    'font-size: small; background-color: #FF; ' +
    'color: #006699;"><p style="margin: 2px 0 1px 0;"> ' +
    host + 
    '</p></div>';

if (host) {
    document.body.insertBefore(origin, document.body.firstChild);
}
*/
