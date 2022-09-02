var fizzBuzz = function(n) {
  let result = []
  for (let i = 1; i < n + 1; i++) {

    if(i % 5 == 0 && i % 3 == 0) {
      result = [...result, "FizzBuzz"]
    } else if( i % 3 == 0 ) {
      result = [...result, "Fizz"]
    } else if ( i % 5 == 0 ) {
      result = [...result, "Buzz"]
    } else {
      result = [...result, String(i)]
    }
  }

  return result
};

fizzBuzz(3)