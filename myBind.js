Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context);
  };
};
//
// var Cat = function (name) {
//   this.name = name;
// };
//
// var sayHello = function() {
//   console.log("Hello! My name is " + name);
// };
//
// var breakfast = new Cat("breakfast");
//
// var name = "Markov";
//
// sayHello;
// sayHello.bind(breakfast);

// `times` is the same:
function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,

  ageOneYear: function () {
    this.age += 1;
  }
};

// Function argument is different:
// times(10, function () {
//   cat.ageOneYear();
// });
//
console.log(cat.age);
times(10, cat.ageOneYear.myBind(cat));

console.log(cat.age);
// times(10, cat.ageOneYear);
