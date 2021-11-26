# linear-regression
An npm package to make it easier to deal with a handful of values, and try to model them in one of the most used mathematical models, with an R-like accuracy algorithm

![npm logo](https://lh3.googleusercontent.com/proxy/kKCJwwtr5ORcrnPQUayou44sbiVesfc00NbLpdvwNwLUVzcvHQeQqg6JeaukkMeIqMAcJ8b94SuA1yRGu1icybno-vTK7ztKi3gZkmdL0z_0t69iMebOZPc)

- [Setup](#setup)

## Setup

### Requirements:
  - Node.js installed<br>
 The ideal version, to run the package, is LTS(16.13 by the time it is being published),<br> however,
 older versions shouldn't have any issues, as the package does not use any <br> other npm packages, or
 fancy, new methods, not supported by older versions
 
  - Importing the module
 ~~~ javascript
 const LinearModel = require("linear-regression");
 ~~~
  - Instantiate the class
 ~~~ javascript
 const lm = new LinearModel([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]);
 ~~~
 Let it be clear, it is necessary to pass an all number array, with more than 1 value,<br>
 in order for the algorithm to work properly, it will try to convert all the elements<br>
 to numbers, but if that is not possible, the code will crash. it also checks the quantity<br>
 of values in the dataset, since a linear regression model  of one single data point may not <br>
 make any sense whatsoever
 <br>
 <br>
 
