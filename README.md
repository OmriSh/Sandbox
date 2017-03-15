# JS-Expression

### Predicates!
```JavaScript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

//syntactic sugar provided by middleware
//will be transpiled into 'this => this > 3'
var isBiggerThanThree = builder.create('this > 3');

var result = isBiggerThanThree(5);
//result = true
```

### Conversions!
```JavaScript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

var formatDate = builder.create('x => (x.day + '/' + x.month + '/' + x.year )');

var obj = {
    day: 12,
    month: 12,
    year: 2012
};

var result = formatDate(5);
//result = '12/12/2012'
```