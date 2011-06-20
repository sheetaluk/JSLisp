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

