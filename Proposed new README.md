# SafeExpression

SafeExpression is a library that gives you the ability to create, load and safely evaluate expressions as readable strings.

### Predicates
```JavaScript
var SafeExpresion = require('safe-expression');
var builder = new SafeExpresion();

var isBiggerThanThree = builder.create('x => x > 3');

var result = isBiggerThanThree.exec(5);
// result = true
```

### Object Manipulations
```JavaScript
var SafeExpresion = require('safe-expression');
var builder = new SafeExpresion();

var formatDate = builder.create("x => x.day + '/' + x.month + '/' + x.year");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};

var result = formatDate.evaluate(dateObject);
// result = '12/12/2012'
```

### Expression Chaining
```Javascript
var SafeExpresion = require('safe-expression');
var builder = new SafeExpresion();

var thousandYearsLater = builder
    .create("format(x{years += addition})")
    .addFunction("x => x.day + '/' + x.month + '/' + x.year", "format")
    .addConst(1000, "addition");

var dateObject = {
    day: 12,
    month: 12,
    year: 2012
};
var result = thousandYearsLater.evaluate(dateObject);
// result = '12/12/3012'
```

## Syntax
| Syntax | JavaScript | Description |
| ------ | ------ | ------ |
| x => x > 3 | x => { return x > 3; }  | predicate | 
| x => x + 5 | x => { return x + 5; } | function, return value |
| x => { value: x } | x => { return { value: x } } | function, return new object |
| x => f(x) | x => { return f(x) } | function, referencing another expression |
