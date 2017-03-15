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

var formatDate = builder.create("x => (x.day + '/' + x.month + '/' + x.year )");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};

var result = formatDate(dateObject);
//result = '12/12/2012'
```

### Expression Chain!
```JavaScript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

var addThousandYears = builder.create("x{years += 1000}");
var formatDate = builder.create("x => (x.day + '/' + x.month + '/' + x.year )");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};
var chain = addThousandYears.chain(formatDate);
var result = chain(dateObject);
//result = '12/12/3012'
```

## Syntax
| Syntax | JavaScript |
| ------ | ------ |
| x => x > 3 | (x) => { return x > 3; }  | 
| x{years += 1000} | (x)=>{ x=Object.create(x); x.years+=1000; return x; } |
