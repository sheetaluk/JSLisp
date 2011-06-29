var lispObject = {
  /*
   * Seven primitive operators
   */

  quote: function(x) {
    return x;
  },

  atom: function(x) {
    if (x) {
      var typeOfX = typeof x;

      if (checkIsArray(x)) {
        if (x.length === 0) {
            return 1;
	}
      }
      else if (typeOfX === 'number' || typeOfX === 'string') {
        return 1;
      }
    }
  },

  eq: function(x,y) {
    if (x === y) {
      return 1;
    }
  },

  car: function(x) {
    if (checkIsArray(x)) {
      return x.shift();    
    }
  },

  cdr: function(x) {
    if (checkIsArray(x)) {
      x.shift();
      return x;
    }
  },

  cons: function(x,y) {
    if (x && checkIsArray(y)) {
      return y.unshift(x);
    }
  },

  cond: function(x) {
    if (checkIsArray(x)) {
      x.map(function(element) {
        if (checkIsArray(element) && evaluate(element[0])) {
          return element[1];
        }
      });
    }
  },


  /*
   * Some functions
   */

  _null: function(x) {
    return(eq(x, null));
  },

  _and: function(x,y) {
    return eq(evaluate(x), evaluate(y))    
  },

  _not: function(x) {
    return cond([[x, []],[True, True]]);
  },
  
  _append: function(x, y) {
    return "not implemented";  
    },
  
  evaluate: function(input) {
    if (checkIsArray(input) && input.length > 1) {
      var operator = input.shift();

      if ((typeof operator) === 'string') { 
        switch (operator) {
          case "quote":
            this.quote(input);
            alert(input);
            break;
          case "atom":
            break;
          case "eq":
            break;
          case "car":
            break;
          case "cons":
            break;
          case "cond":
            break;
          case "quote":
            break;
          default:
            break;      
        }
      }
    }  
  }
}

var checkIsArray = function(input) {  
  if (input) {
    var typeOfInput = typeof input;  
    if (typeOfInput === 'object') {
      if (input instanceof Array) {
	return 1;
      }
    }
  }
}
