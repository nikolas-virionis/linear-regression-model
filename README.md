# linear-regression
An npm package to make it easier to deal with a handful of values, and try to model them in one of the most used mathematical models, with an R-like accuracy algorithm

![npm logo](https://lh3.googleusercontent.com/proxy/bCtkXtTVgixK8zlsOu7nCcDp0Em-g_hKHWnOyzas4GsABaRmpLQRcrQps6-CiXD7pFmV92BaeA1GpLWEvvpZmYOnZz57ZyoLP1Taogpnn4AbJYVErbJQbzg)

- [Setup](#setup)

## Setup

### Requirements:
  - Node.js installed<br>
 The ideal version, to run the package, is LTS(16.13 when publishing the package),<br> however,
 older versions shouldn't have any issues, as the package does not use any other npm packages, or <br>
 fancy, new methods, not supported by older versions
 
  - Importing the module
 ~~~ javascript
 const LinearModel = require("linear-regression");
 ~~~
  - Instantiate the class
 ~~~ javascript
 const lm = new LinearModel([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]);
 ~~~
