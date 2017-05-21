JavaScript Library for resolve **aa://** scheme/protocol


##Introduction

**AltAddr** is a decentralized name service that allows bind to one AltAddr URL, like aa://altaddrdomain/, to various classic URLs, like http://domainone.com, https://somedomaintwo/path/?param=val etc.

**AltAddrLib** library provides the first available URL from the list of URLs related to a AltAddr URL.

More info about AltAddr service on [aa://altaddr](aa://altaddr).

***Install AA extension in browser to open aa:// addresses!***


----------


##**Usage**

###**Example**

```html
<script src="dist/altaddrlib.min.js"></script>

<script>

    var initOptions = {version:0, requestMethod:"jsonp"};
    var altaddrlib = new AltAddrLib(initOptions); //keep the altaddrlib as a variable name of the AltAddrLib's instance, when you use requestMethod:"jsonp"
    
    altaddrlib.getAvailAddr("aa://altaddr", function(result) {
        console.log(result);
    });

</script>
```

###**Test**


Download the project and open `test.html` in browser

or

launch it on [http://rawgit.com/diamo1213/altaddr/master/test.html](http://rawgit.com/diamo1213/altaddr/master/test.html)

###**Load library**
```html
<script src="dist/altaddrlib.min.js"></script>
```
###**Create instance**
```js
var altaddrlib = new AltAddrLib(initOptions);
```

 - **AltAddrLib**  —  constructor of the library's main object.
 - **initOptions** — `{version: number,requestMethod: string}`. `version` — major number of the library's version. `requestMethod` — "jsonp" or "xhr"

###**Methods**

```js
getAvailAddr(AltAddrURL, callBack)
```

 - **AltAddrURL** — `string` AltAddr URL in aa: scheme/protocol. Example: "aa://altaddr".
 - **callBack** — Callback function with one argument that takes the `string|object` result. The result parameter may be alternative URL in `string` or object with error info. 
 - **IMPORTANT!** keep the altaddrlib as a variable name of the AltAddrLib's instance and available in global space when you use requestMethod == "jsonp", because the library in versions 0.* uses JSONP callback. in that case

####**Structure of the error object**
```js
error: {
    num: number,
    message: string,
    note?: string
}
```
####**Versions**

**0.***

Implemented in http(s) requests to web server

**1.*** (future)

Use decentralized/distributed data storage without requests to various root web-servers.

####**Changelog**

**0.2**

- Changed constructor initialisation parameter from ```ǹumber``` to ```object: {version: number, requestMethod: string}```, where ```requestMethod: "jsonp" or "xhr"```.

- Added XMLHttpRequest (`fetch`) request method.




