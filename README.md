SmartPlaceholders.js
====================

A jQuery plugin for positioning placeholder text

Based on a UI concept by [Matt D. Smith](https://twitter.com/mds)

[Demo available here](http://labs.mikemitchell.co.uk/smart-placeholders/)

Usage
-----

Add jquery.SmartPlaceholders.css to your websites stylesheets and jquery.SmartPlaceholders.js to your scripts.

* Add jquery.SmartPlaceholders.js to your websites scripts -

```
<script src="scripts/jquery.js"></script>
<script src="scripts/jquery.SmartPlaceholders.js"></script>
<script src="scripts/main.js"></script>
```


* Add jquery.SmartPlaceholders.css to your websites stylesheets - 

```
<link rel="stylesheet" href="styles/normalize.css">
<link rel="stylesheet" href="styles/jquery.SmartPlaceholders.css">
<link rel="stylesheet" href="styles/main.css">
```


* Init SmartPlaceholders.js, passing the plugin your desired form fields

```
$( '#demoForm input[type="text"], #demoForm textarea' ).SmartPlaceholders();
```