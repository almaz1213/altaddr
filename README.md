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

    var version = 0;
    var altaddrlib = new AltAddrLib(version); //keep the altaddrlib as a variable name of the AltAddrLib's instance, because of JSONP callback 
    
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
var altaddrlib = new AltAddrLib(version);
```

 - **AltAddrLib**  —  constructor of the library's main object.
 - **version** — `number` major number of the library's version.

###**Methods**

```js
getAvailAddr(AltAddrURL, callBack)
```

 - **AltAddrURL** — `string` AltAddr URL in aa: scheme/protocol. Example: "aa://altaddr".
 - **callBack** — Callback function with one argument that takes the `string|object` result. The result parameter may be alternative URL in `string` or object with error info. 
 - **IMPORTANT!** ***keep the altaddrlib as a variable name of the AltAddrLib's instance and available in global space, because of the library in versions 0.* uses JSONP callback.***

####**Structure error object**
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



