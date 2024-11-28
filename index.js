// 1. receivesAFunction: Accepts a callback and calls it
function receivesAFunction(callback) {
    return callback();
  }
  
  // 2. returnsANamedFunction: Returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      return "I am a named function";
    };
  }
  
  // 3. returnsAnAnonymousFunction: Returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      return "I am an anonymous function";
    };
  }
  

  
  