# linear-regression
An npm package to make it easier to deal with a handful of values, and try to model them in one of the most used mathematical models, with an R-like accuracy algorithm

![npm logo](https://lh3.googleusercontent.com/proxy/kKCJwwtr5ORcrnPQUayou44sbiVesfc00NbLpdvwNwLUVzcvHQeQqg6JeaukkMeIqMAcJ8b94SuA1yRGu1icybno-vTK7ztKi3gZkmdL0z_0t69iMebOZPc)

- [Setup](#setup)
- [Methods](#methods)

## Setup 

### Requirements:
  - Node.js installed<br>
 The ideal version, to run the package, is LTS(16.13 by the time it is being published),<br> however,
 older versions shouldn't have any issues, as the package does not use any <br> other npm packages, or
 fancy, new methods, not supported by older versions
 
  - Importing the module<br>

First, there is the Linear Regression model between two different datasets, in relation to each other<br>
Which will look like something similar to this:
 ~~~ javascript
 const {LinearModel} = require("linear-regression");
 // if it is preferred not to use destructuring, or constants use
 // var LinearModel = require("linear-regression").LinearModel;
 ~~~
Or if the use case for this is pending more to the behavior of one single dataset<br>
overtime, this will be more fitting:
 ~~~ javascript
 const {LinearModelOverTime} = require("linear-regression");
 // if it is preferred not to use destructuring, or constants use
 // var LinearModelOverTime = require("linear-regression").LinearModelOverTime;
 ~~~ 
## Instantiate the classes
 ~~~ javascript
 const lm = new LinearModel([1, 2, 3, 2, 3, 4], [3, 4, 5, 4, 5, 6]);
 // mandatory to pass two, same sized, all number, arrays, being the 
 // orientation (x, y), being x the independent variable and y the 
 // dependent: y changes according to how x changes, basically
 ~~~ 
 or 
 ~~~ javascript
 const lm = new LinearModelOverTime([1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6]);
 // mandatory to pass one, all number, array, being the orientation y, the 
 //dependent variable: y changes according to how x changes, the later is 
 // generated automatically for a better representation of the behavior overtime
 ~~~ 
 
 Let it be clear, it is necessary to pass all number arrays, with more than 1 value,<br>
 in order for the algorithm to work properly, it will try to convert all the elements<br>
 to numbers, but if that is not possible, the code will crash.
 <br>
 <br>
 

## Methods
Both the classes have similar methods, the biggest difference between the classes being<br>
if the X axis dataset is informed or generated, therefore, the method will be showed using <br>
the LinearModel class, the use for the LinearModelOverTime class is the exact same tough

- Just to make it clear, it is necessary to pass the parameters as said in [instatiating the class](#instantiate-the-classes), above

- getDataset
~~~ javascript
 lm.getDataset()
 // returns the dataset Informed in the Y axis
~~~ 

- getXAxisValues
~~~ javascript
 lm.getXAxisValues()
 // returns the dataset in the X axis, informed previously or not
~~~ 
- (static) radsToDegs
~~~ javascript
 LinearModel.radsToDegs(rad)
 // converts an angle in radians to degrees
 // returns the angle in degrees
~~~ 
- getDatasetLength
~~~ javascript
 lm.getDatasetLength()
 // returns the dataset length
~~~ 
- getSumOfDatasetValues
~~~ javascript
 lm.getSumOfDatasetValues()
 // returns the sum of all the elements in the dataset on y azis
~~~ 
- getSumOfXValues
~~~ javascript
 lm.getSumOfXValues()
 // returns the sum of all the elements in the dataset on x azis
~~~ 
- getSlope
~~~ javascript
 lm.getSlope()
 // returns the slope of the equation: the "m" on the y = mx + n function
 // which is the tangent of the inclination angle
~~~ 
- getAngleInRadians
~~~ javascript
 lm.getAngleInRadians()
 // returns the inclination angle in radians, like 3/4 meaning  3/4 rad
~~~ 
- getAngleInDegrees
~~~ javascript
 lm.getAngleInDegrees()
 // returns the inclination angle in degrees, like 43°, for example 3/4 rad ~~ 43°
~~~ 
- getDatasetBehavior
~~~ javascript
 lm.getDatasetBehavior()
 // returns the overall macro behaviour of the dataset
~~~ 
- getDatasetBehavioralIntensity
~~~ javascript
 lm.getDatasetBehavioralIntensity()
 // returns the intensity of the behaviour previously measured
~~~ 
- getLinearCoefficient
~~~ javascript
 lm.getDatasetBehavioralIntensity()
 // returns the intensity of the behaviour previously measured
~~~ 
- getLinearCoefficient
~~~ javascript
 lm.getLinearCoefficient()
 // returns the linear coefficient of the equation: the "n" 
 //on the y = mx + n function
~~~ 
