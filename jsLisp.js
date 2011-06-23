var quote = function(x) {
  return x;
}

var atom = function(x) {
  if (x) {
    var typeOfX = typeof x;

    if (typeOfX === 'object') {
      if (x instanceof Array) {
        if (x.length === 0) {
          return "t";
	}
        else {
          return [];
        }
      }
    }
    else if (typeOfX === 'number' || typeOfX === 'string') {
      return "t";
    }
    else {
      return [];
    }
  }
  else {
      return [];
  }
}

var eq = function(x,y) {
  if (x === y) {
    return "t";
  }
  else  
    return [];
}

var car = function(x) {
  if (x && (x instanceof Array)) {
    return x.shift();    
  }
}

var cdr = function(x) {
  if (x && (x instanceof Array)) {
    x.shift();    
    return x;
  }
}

var cons = function(x,y) {
  if (y instanceof Array) {
    return y.unshift(x);
  }
}

var cond = function(x) {
  x.map(function(element) {
    if (evaluate(element[0])) {
      return element[1];
    }
  });
}


/*
 * Some functions
 */

var _null = function(x) {
  return(eq(x, null));
}

var _and = function(x,y) {
  return eq(evaluate(x), evaluate(y))    
}

var _not = function(x) {
  return cond([[x, []],[True, True]]);
}
  
var _append = function(x, y) {
    
}