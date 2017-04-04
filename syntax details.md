# Syntax Details

## Atomic Expressions

| JSExpression | Precedence Level |
| - | - | - |
| ` (exp1) ` | 1 |
| ` func(exp1) ` | 1 |
| ` returnedObj{assignment} ` | 1 |
| ` obj.prop ` | 2 |
| ` exp1 * exp2 ` | 3 |
| ` exp1 / exp2 ` | 3 |
| ` exp1 + exp2 ` | 4 |
| ` exp1 - exp2 ` | 4 |
| ` condition ? exp1 : exp2 ` | 5 |

### The Modification Expression (` returnedObj{assignment} `)

The Modification Expression used when we want to modify an existing object. It equivalent to something close to the following JavaScript clause:

` ( () => { with(obj) {assignment}; return obj; } )() `

The assignment will be made in a deeper scope with the returned object's properties directly accessible.
The extending object will be returned as the expression value.

For example:
` addHour : time => time{hour++} ` will add one hour to the time argument and return it.

### Assignments

Assignments are available only inside a modification expression's brackets.
The syntax is just like the standard JavaScript assignment, and it goes as following:

` assignedObject = expression `

The left side of the clause references a variable in the current scope.
The right side can be any expression you would like.


## Expression Definition

The trivial expression includes 3 sections:

` aliases: arguments => expression `

### Aliases:
The names of the expression.
Used when we would like to reference this expression from other expressions.
The aliases section ends with ` : `, and the aliases themselves separated by ` , `.

` alias1, alias2, alias3: arguments => expression `

The main expression is the only expression that doesn't include any aliases:

`arguments => mainExpression `

### Arguments:
As pure function, the expression may get arguments from outside.
The section ends with ` => ` and the arguments separated by ` , ` between them:

` aliases: arg1, arg2, arg3 => expression `

This section is optional, and if it absent, the first argument will be named ` this ` by default:

` aliases: expression ` equals to ` aliases: this => expression `

## Scopes

Every expression creates it's own scope.
The variables that are accessible by default are:
1. The inputs;
2. Another expressions (can be added via `expression.addFunction(exp)` or by declaration with the current expression separated by `;`), referenced by their aliases;
3. Consts (can be added by `expression.addConst('alias', obj)`).

The modification expression (`obj{variable=expression}`) creates another scope under the current.
The variables that are accessible in the new expression are:
1. All the variables that are accessible in the parent scope;
2. The properties of the modified object.

For example:

```JavaScript
    var builder = new JSExpression();
    var addThousandYears = builder
        .create('date => date{years += addition}')
        .addConst('addition', 1000);
    
    var date = {
        days: 1,
        months: 1,
        years: 1970
    };
    
    console.log(addThousandYears.exec(date));
    //  { days: 1, months: 1, years: 2970 }
```

In this snippet, the scope of `years += addition` in `date => date{years += addition}` can access the variables of the parent scope (`addition`) and also the properties in `date` (`years`).