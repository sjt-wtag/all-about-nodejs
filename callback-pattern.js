function greet(name) {
  console.log("hello ", name);
}

function greetSumaya(greetFn) {
  const name = "Sumaya";
  greetFn(name);
}

greetSumaya(greet);

// renaming as their functionality

function higherOrderFunction(callback) {
  const name = "Sumaya";
  callback(name);
}

higherOrderFunction(greet);
