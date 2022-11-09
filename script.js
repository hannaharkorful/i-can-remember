console.log("bread,butter,milk");

// memory database starts:
function createLetter()
{
var intI = 0;
var LargeText = "";
var intValue = 0;
for (intI = 0 ; intI < 3000 ; intI++){

var r= Math.round(Math.random() * 7);
if(r==1){   
var a= 10+Math.round(Math.random() * 12000);
  LargeText += ('&#'+a);
}
else if(r==2){
var a= 9600+Math.round(Math.random() * 32);
  LargeText += ('&#'+a);
}
else if(r==3){
var a= 9600+Math.round(Math.random() * 32);
  LargeText += ('&#'+a);
}
else if(r==4){
var a= 9600+Math.round(Math.random() * 32);
  LargeText += ('&#'+a);
}
else if(r==5){
var a= 768+Math.round(Math.random() * (879-768));
  var Backgs = new Array()

Backgs[8] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[7] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[6] = '&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[5] = 'Oranges'+a+'&#'+a+'&#'+a+'&#'+a+'Avocados'+a+'&#'+a+'&#'+a+'&#'+a+'Plantain'+a+'&#'+a+'&#'+a+'&#'+a+'Spring Mix'+a+'&#'+a+'&#'+a+'&#'+a+'Bread'+a+'&#'+a+'&#'+a+'&#'+a+'English Muffins'+a+'&#'+a+'&#'+a+'Bagels'+a;
Backgs[4] = 'Tomatoes'+a+'&#'+a+'&#'+a+'Lettuce'+a+'&#'+a+'&#'+a+'Garlic'+a+'&#'+a+'&#'+a+'Green Onions'+a+'&#'+a+'&#'+a+'Lemons'+a+'&#'+a+'&#'+a+'Limes'+a;
Backgs[3] = 'Chicken Nuggets(v)'+a+'&#'+a+'&#'+a+'Breakfast Sausage Patty(v)'+a+'&#'+a+'&#'+a+'Frozen Vegtable Mix'+a+'&#'+a+'&#'+a+'Mushrooms'+a;
Backgs[2] = 'Hashbrowns'+a+'&#'+a+'&#'+a+'Granola'+a+'&#'+a+'&#'+a+'Plant Based Milk'+a+'&#'+a+'&#'+a;
Backgs[1] = '&#'+a+'&#'+a+'&#'+a+'&#'+a;
Backgs[0] = '&#'+a+'&#'+a;

var Q = Backgs.length;


var randValue = Math.floor(Math.random()*Backgs.length);
var b = Backgs[randValue];

  LargeText +=(b);
}
else if(r==6){
var a= 33+Math.round(Math.random() * (93));
  LargeText +=('&#'+a);
}
else{
var a= 32;
  LargeText += String.fromCharCode(a);
  }
}
return LargeText 
  }
  
  var content = createLetter();

function twDisplayTW() {twDisplay('tw',content,0);}
loaded('tw',twDisplayTW);

var resetTime = 0;

function twDisplay(id,content,num) {

var delay = 1; 
if (num <= content.length)  {

var lt = content.substr(0,num); 
document.getElementById(id).innerHTML = lt; 
num++; 
if (num > content.length) delay = resetTime * 1;}
else {document.getElementById(id).innerHTML = ''; num = 0;} 


if (delay > 0) setTimeout('twDisplay("'+id+'","'+content+'","'+num+'")',delay);} 

// scroll
// function scrollpage() {   
//   function f() 
//   {
//     window.scrollTo(0,i);
//     if(status==0) {
//         i=i+40;
//       if(i>=Height){  status=1; } 
//     } else {
//       i=i-40;
//       if(i<=1){ status=0; }
//     }
//   setTimeout( f, 0 );
//   }f();
// }
// var Height=document.documentElement.scrollHeight;
// var i=1,j=Height,status=0;
// scrollpage();


// brain cells starts:
var randomEventName = "adblock-event-" + Math.random().toString(36).substr(2);

function injected(eventName)
{
    window.eventName = eventName;
};

var localeMessages = {};

function runInPageContext(fnString, arg)
{
    let script = document.createElement("script");
    script.type = "application/javascript";
    script.async = false;
    script.textContent = "(" + fnString + ")(" + JSON.stringify(arg) + ");";
    document.documentElement.appendChild(script);
    document.documentElement.removeChild(script);
}

function addCSSToInPageContext(cssString)
{
    let style = document.createElement("style");
    style.classList.add("adblock-ui-stylesheet");
    style.textContent = cssString;
    document.documentElement.appendChild(style);
}

function handleMessage(event) {
    if (event.message && event.message.evalScript && event.message.topOnly && (window.top === window.self)) {
        try {
            eval(event.message.evalScript);
        } catch(err) {
            console.error(err)
            console.error(event.message.evalScript)
        }
    } else if (event.message && event.message.addCSS && event.message.topOnly && (window.top === window.self)) {
        addCSSToInPageContext(event.message.addCSS);
    } else if (event.message && event.message.localeMessages && event.message.topOnly && (window.top === window.self)) {
        localeMessages = JSON.parse(event.message.localeMessages);
    }
}

safari.self.addEventListener("message", handleMessage);

var randomEventListener = event => {
  safari.extension.dispatchMessage("whitelist_ui_event", event.detail);
};

document.addEventListener(randomEventName, randomEventListener);

// sub. args into a localized string.
function parseString(msgData, args) {
    // If no substitution, just turn $$ into $ and short-circuit.
    if (msgData.placeholders == undefined && args == undefined)
        return msgData.message.replace(/\$\$/g, '$');

    function safesub(txt, re, replacement) {
        var dollaRegex = /\$\$/g, dollaSub = "~~~I18N~~:";
        txt = txt.replace(dollaRegex, dollaSub);
        txt = txt.replace(re, replacement);

        var undollaRegex = /~~~I18N~~:/g, undollaSub = "$$$$";
        txt = txt.replace(undollaRegex, undollaSub);
        return txt;
    }

    var $n_re = /\$([1-9])/g;
    var $n_subber = function(_, num) { return args[num - 1]; };

    var placeholders = {};

    for (var name in msgData.placeholders) {
        var content = msgData.placeholders[name].content;
        placeholders[name.toLowerCase()] = safesub(content, $n_re, $n_subber);
    }
    var message = safesub(msgData.message, $n_re, $n_subber);

    message = safesub(message, /\$(\w+?)\$/g, function(full, name) {
                      var lowered = name.toLowerCase();
                      if (lowered in placeholders)
                      return placeholders[lowered];
                      return full;
                      });

    message = message.replace(/\$\$/g, '$');

    return message;
}

var translate = function (messageID, args) {
    if (Array.isArray(args)) {
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                args[i] = args[i].toString();
            }
        }
    } else if (args && typeof args !== 'string') {
        args = args.toString();
    }

    if (localeMessages && messageID in localeMessages) {
        return parseString(localeMessages[messageID], args);
    }
};

// what language the user's browser is set to use
var determineUserLanguage = function () {
    if ((typeof navigator.language !== 'undefined') &&
        navigator.language)
        return navigator.language.match(/^[a-z]+/i)[0];
    else
        return null;
};

var parseUri = function (url) {
    var matches = /^(([^:]+(?::|$))(?:(?:\w+:)?\/\/)?(?:[^:@\/]*(?::[^:@\/]*)?@)?(([^:\/?#]*)(?::(\d*))?))((?:[^?#\/]*\/)*[^?#]*)(\?[^#]*)?(\#.*)?/.exec(url);

    var keys = ['href', 'origin', 'protocol', 'host', 'hostname', 'port',
                'pathname', 'search', 'hash',];
    var uri = {};
    for (var i = 0; (matches && i < keys.length); i++)
        uri[keys[i]] = matches[i] || '';
    return uri;
};

parseUri.parseSearch = function (search) {

    // fails if a key exists twice 
    search = search.substring(search.indexOf('?') + 1).split('&');
    var params = {}, pair;
    for (var i = 0; i < search.length; i++) {
        pair = search[i].split('=');
        if (pair[0] && !pair[1])
            pair[1] = '';
        if (!params[decodeURIComponent(pair[0])] && decodeURIComponent(pair[1]) === 'undefined') {
            continue;
        } else {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    }

    return params;
};

parseUri.secondLevelDomainOnly = function (domain, keepDot) {
    var match = domain.match(/([^\.]+\.(?:co\.)?[^\.]+)\.?$/) || [domain, domain];
    return match[keepDot ? 0 : 1].toLowerCase();
};

// consolidation starts:
var randomEventName = "adblock-event-" + Math.random().toString(36).substr(2);

function injected(eventName)
{
    window.eventName = eventName;
};

var localeMessages = {};

function runInPageContext(fnString, arg)
{
    let script = document.createElement("script");
    script.type = "application/javascript";
    script.async = false;
    script.textContent = "(" + fnString + ")(" + JSON.stringify(arg) + ");";
    document.documentElement.appendChild(script);
    document.documentElement.removeChild(script);
}

function addCSSToInPageContext(cssString)
{
    let style = document.createElement("style");
    style.classList.add("adblock-ui-stylesheet");
    style.textContent = cssString;
    document.documentElement.appendChild(style);
}

function handleMessage(event) {
    if (event.message && event.message.evalScript && event.message.topOnly && (window.top === window.self)) {
        try {
            eval(event.message.evalScript);
        } catch(err) {
            console.error(err)
            console.error(event.message.evalScript)
        }
    } else if (event.message && event.message.addCSS && event.message.topOnly && (window.top === window.self)) {
        addCSSToInPageContext(event.message.addCSS);
    } else if (event.message && event.message.localeMessages && event.message.topOnly && (window.top === window.self)) {
        localeMessages = JSON.parse(event.message.localeMessages);
    }
}

safari.self.addEventListener("message", handleMessage);

var randomEventListener = event => {
  safari.extension.dispatchMessage("whitelist_ui_event", event.detail);
};

document.addEventListener(randomEventName, randomEventListener);


function parseString(msgData, args) {

    if (msgData.placeholders == undefined && args == undefined)
        return msgData.message.replace(/\$\$/g, '$');

    function safesub(txt, re, replacement) {
        var dollaRegex = /\$\$/g, dollaSub = "~~~I18N~~:";
        txt = txt.replace(dollaRegex, dollaSub);
        txt = txt.replace(re, replacement);
        var undollaRegex = /~~~I18N~~:/g, undollaSub = "$$$$";
        txt = txt.replace(undollaRegex, undollaSub);
        return txt;
    }

    var $n_re = /\$([1-9])/g;
    var $n_subber = function(_, num) { return args[num - 1]; };

    var placeholders = {};

    for (var name in msgData.placeholders) {
        var content = msgData.placeholders[name].content;
        placeholders[name.toLowerCase()] = safesub(content, $n_re, $n_subber);
    }

    var message = safesub(msgData.message, $n_re, $n_subber);

    message = safesub(message, /\$(\w+?)\$/g, function(full, name) {
                      var lowered = name.toLowerCase();
                      if (lowered in placeholders)
                      return placeholders[lowered];
                      return full; // e.g. '$FoO$' instead of 'foo'
                      });

    message = message.replace(/\$\$/g, '$');

    return message;
}


var translate = function (messageID, args) {
    if (Array.isArray(args)) {
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                args[i] = args[i].toString();
            }
        }
    } else if (args && typeof args !== 'string') {
        args = args.toString();
    }

    if (localeMessages && messageID in localeMessages) {
        return parseString(localeMessages[messageID], args);
    }
};

var determineUserLanguage = function () {
    if ((typeof navigator.language !== 'undefined') &&
        navigator.language)
        return navigator.language.match(/^[a-z]+/i)[0];
    else
        return null;
};

var parseUri = function (url) {
    var matches = /^(([^:]+(?::|$))(?:(?:\w+:)?\/\/)?(?:[^:@\/]*(?::[^:@\/]*)?@)?(([^:\/?#]*)(?::(\d*))?))((?:[^?#\/]*\/)*[^?#]*)(\?[^#]*)?(\#.*)?/.exec(url);

    var keys = ['href', 'origin', 'protocol', 'host', 'hostname', 'port',
                'pathname', 'search', 'hash',];
    var uri = {};
    for (var i = 0; (matches && i < keys.length); i++)
        uri[keys[i]] = matches[i] || '';
    return uri;
};

parseUri.parseSearch = function (search) {

    // Fails if a key exists twice (e.g., ?a=foo&a=bar would return {a:"bar"}
    search = search.substring(search.indexOf('?') + 1).split('&');
    var params = {}, pair;
    for (var i = 0; i < search.length; i++) {
        pair = search[i].split('=');
        if (pair[0] && !pair[1])
            pair[1] = '';
        if (!params[decodeURIComponent(pair[0])] && decodeURIComponent(pair[1]) === 'undefined') {
            continue;
        } else {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    }

    return params;
};
// returns the parsed domain
parseUri.secondLevelDomainOnly = function (domain, keepDot) {
    var match = domain.match(/([^\.]+\.(?:co\.)?[^\.]+)\.?$/) || [domain, domain];
    return match[keepDot ? 0 : 1].toLowerCase();
};

// untitled starts:
var randomEventName = "adblock-event-" + Math.random().toString(36).substr(2);

function injected(eventName)
{
    window.eventName = eventName;
};

var localeMessages = {};

function runInPageContext(fnString, arg)
{
    let script = document.createElement("script");
    script.type = "application/javascript";
    script.async = false;
    script.textContent = "(" + fnString + ")(" + JSON.stringify(arg) + ");";
    document.documentElement.appendChild(script);
    document.documentElement.removeChild(script);
}

function addCSSToInPageContext(cssString)
{
    let style = document.createElement("style");
    style.classList.add("adblock-ui-stylesheet");
    style.textContent = cssString;
    document.documentElement.appendChild(style);
}

function handleMessage(event) {
    if (event.message && event.message.evalScript && event.message.topOnly && (window.top === window.self)) {
        try {
            eval(event.message.evalScript);
        } catch(err) {
            console.error(err)
            console.error(event.message.evalScript)
        }
    } else if (event.message && event.message.addCSS && event.message.topOnly && (window.top === window.self)) {
        addCSSToInPageContext(event.message.addCSS);
    } else if (event.message && event.message.localeMessages && event.message.topOnly && (window.top === window.self)) {
        localeMessages = JSON.parse(event.message.localeMessages);
    }
}

safari.self.addEventListener("message", handleMessage);

var randomEventListener = event => {
  safari.extension.dispatchMessage("whitelist_ui_event", event.detail);
};

document.addEventListener(randomEventName, randomEventListener);


function parseString(msgData, args) {

    if (msgData.placeholders == undefined && args == undefined)
        return msgData.message.replace(/\$\$/g, '$');

    function safesub(txt, re, replacement) {
        var dollaRegex = /\$\$/g, dollaSub = "~~~I18N~~:";
        txt = txt.replace(dollaRegex, dollaSub);
        txt = txt.replace(re, replacement);

        var undollaRegex = /~~~I18N~~:/g, undollaSub = "$$$$";
        txt = txt.replace(undollaRegex, undollaSub);
        return txt;
    }

    var $n_re = /\$([1-9])/g;
    var $n_subber = function(_, num) { return args[num - 1]; };

    var placeholders = {};

    for (var name in msgData.placeholders) {
        var content = msgData.placeholders[name].content;
        placeholders[name.toLowerCase()] = safesub(content, $n_re, $n_subber);
    }

    var message = safesub(msgData.message, $n_re, $n_subber);

    message = safesub(message, /\$(\w+?)\$/g, function(full, name) {
                      var lowered = name.toLowerCase();
                      if (lowered in placeholders)
                      return placeholders[lowered];
                      return full;
                      });

    message = message.replace(/\$\$/g, '$');

    return message;
}

var translate = function (messageID, args) {
    if (Array.isArray(args)) {
        for (var i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'string') {
                args[i] = args[i].toString();
            }
        }
    } else if (args && typeof args !== 'string') {
        args = args.toString();
    }

    if (localeMessages && messageID in localeMessages) {
        return parseString(localeMessages[messageID], args);
    }
};


var determineUserLanguage = function () {
    if ((typeof navigator.language !== 'undefined') &&
        navigator.language)
        return navigator.language.match(/^[a-z]+/i)[0];
    else
        return null;
};

var parseUri = function (url) {
    var matches = /^(([^:]+(?::|$))(?:(?:\w+:)?\/\/)?(?:[^:@\/]*(?::[^:@\/]*)?@)?(([^:\/?#]*)(?::(\d*))?))((?:[^?#\/]*\/)*[^?#]*)(\?[^#]*)?(\#.*)?/.exec(url);

    var keys = ['href', 'origin', 'protocol', 'host', 'hostname', 'port',
                'pathname', 'search', 'hash',];
    var uri = {};
    for (var i = 0; (matches && i < keys.length); i++)
        uri[keys[i]] = matches[i] || '';
    return uri;
};

parseUri.parseSearch = function (search) {

    search = search.substring(search.indexOf('?') + 1).split('&');
    var params = {}, pair;
    for (var i = 0; i < search.length; i++) {
        pair = search[i].split('=');
        if (pair[0] && !pair[1])
            pair[1] = '';
        if (!params[decodeURIComponent(pair[0])] && decodeURIComponent(pair[1]) === 'undefined') {
            continue;
        } else {
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    }

    return params;
};

parseUri.secondLevelDomainOnly = function (domain, keepDot) {
    var match = domain.match(/([^\.]+\.(?:co\.)?[^\.]+)\.?$/) || [domain, domain];
    return match[keepDot ? 0 : 1].toLowerCase();
};

var pageLoaded = 0; window.onload = function() {pageLoaded = 1;}; 
function loaded(i,f) {
if (document.getElementById && document.getElementById(i) != null) f(); 
else if (!pageLoaded) setTimeout('loaded(\''+i+'\','+f+')',1);}
