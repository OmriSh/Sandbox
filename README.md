# JS-Expression

### Predicates!
```JavaScript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

// Syntactic sugar provided by middleware
// Will be transpiled into 'this => this > 3'
var isBiggerThanThree = builder.create('this > 3');

var result = isBiggerThanThree.exec(5);
// result = true
```

### Object Transformations!
```JavaScript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

var formatDate = builder.create("x => x.day + '/' + x.month + '/' + x.year");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};

var result = formatDate.exec(dateObject);
// result = '12/12/2012'
```

### Function Compositions!
```JavaScript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

var addThousandYears = builder.create("x{years += 1000}");
var formatDate = builder.create("x => x.day + '/' + x.month + '/' + x.year");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};
var thousandYearsLater = addThousandYears.compose(formatDate);
var result = thousandYearsLater.exec(dateObject);
// result = '12/12/3012'
```

### Expression Chain!
```Javascript
var JSExpresion = require('js-expression');
var builder = new JSExpresion();

var thousandYearsLater = builder
    .create("format(x{years += addition})")
    .addFunction("x => x.day + '/' + x.month + '/' + x.year", "format")
    .addConst(1000, "addition");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};
var result = thousandYearsLater.exec(dateObject);
// result = '12/12/3012'
```

## Syntax
| Syntax | JavaScript | Description |
| ------ | ------ | ------ |
| x => x > 3 | x => { return x > 3; }  | predicate | 
| x{years = years + 1000} | x => { return (() => { with (x) { years = years + 1000; } return x; })() } | object modification |
| x => x + 5 | x => { return x + 5; } | function, return value |
| x => { value: x } | x => { return { value: x } } | function, return new object |
| x => f(x) | x => { return f(x) } | function, referencing another expression |
