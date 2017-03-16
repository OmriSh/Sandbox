# Syntax Details

## Operators
| JSExpression | Javascript | Precedence Level |
| - | - | - |
| ` (exp1) ` | ` (exp1) ` | 1 |
| ` func(exp1) ` | ` func(exp1) ` | 1 |
| ` obj{exp} ` | ` (() => { clone = Object.create(obj); exp; return clone; } )() ` | 1 |
| ` exp1 + exp2 ` | ` exp1 + exp2 ` | 2 |
| ` exp1 - exp2 ` | ` exp1 - exp2 ` | 2 |
| ` exp1 * exp2 ` | ` exp1 * exp2 ` | 3 |
| ` exp1 / exp2 ` | ` exp1 / exp2 ` | 3 |

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


