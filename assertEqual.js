// FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`); //Assertion Passed
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`); //Assertion Failed
  }
};

// TEST CODE
assertEqual("Bootcamp","Difficult");
assertEqual(1,1);


assertEqual("Boot","cult");
assertEqual(2,32);


