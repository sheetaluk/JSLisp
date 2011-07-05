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
        if (x.length < 1) {
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
    return "not inplemented";  
  },
  
  evaluate: function(input) {
    if (checkIsArray(input) && input.length > 1) {
      var operator = input.shift();

      if (input.length > 1) {
        if ((typeof operator) === 'string') { 
          switch (operator) {
            case "quote":
              return this.quote(input);
            case "atom":
              return this.atom(input);
            case "eq":
              return this.eq(input);
            case "car":
              return this.car(input);
	    case "cdr":
              return this.cdr(input);
            case "cons":
              return this.cons(input);
            case "cond":
              return this.cond(input);
            case "_null":
              return this._null(input);
            case "_and":
              return this._and(input);
            case "_not":
              return this._not(input);
            default:
              alert("oh crap. no such command");
              break;      
          }
        }
      }      
      else if ( input.length == 1) {
        if (checkIsArray(input[0])) {
          this.evaluate(input[0]);
        }
        else {
          arguments
        } 
      }      
    }  
  }
}

var checkIsArray = function(input) {  
  var typeOfInput;
  if (input) {
    var typeOfInput = typeof input;  
    if (typeOfInput === 'object') {
      if (input instanceof Array) {
	return 1;
      }
    }
  }
}
