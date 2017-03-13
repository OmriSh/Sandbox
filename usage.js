const ClassName = require('module-name');

var myExp = "x.test > 55";
var myObject = { test: 5 };

var func = ClassName.compile(myExp);
var result = func.test(myObject);

//--------------------------------------------------

//on base proto
biggenThan = {
    type: 'operator',
    token: '>', //on debug only
    ref: function(x, y){ return x > b; }
}

someConst = {
    type: 'const',
    token: '5', //on debug only
    value: 5
}

accessor = {
    type: 'access',
    token: 'x.test', //on debug only
    access: function(){ return x['test']; }
}

root = Object.create(biggenThan);
root.left = someConst;
root.right = accessor;

//root is the compiled predicate