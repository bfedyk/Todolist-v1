// Export the module - to access getDate()
// Using anonymous function
//  Can use modue.exports but shortcut is to simply use 'exports'
//
//  These functions can be called within app.js
// 
exports.getDate = function() {
  const today = new Date();
  // var currentDay = today.getDay();

  //  Build javascript logic to format date correctly, rather than use
  //  lengthy switch statement
  //  Look at documentation for method toLocalteDateString()

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  // let day = today.toLocaleDateString("en-US", options);
  //
  // return day;

  // Simpler:
  return today.toLocaleDateString("en-US", options);

};

// To access getDay()
// Anonymous function
exports.getDay = function getDay() {
  const today = new Date();
  // var currentDay = today.getDay();


  //  Build javascript logic to format date correctly, rather than use
  //  lengthy switch statement
  //  Look at documentation for method toLocalteDateString()

  const options = {
    weekday: "long",
  };

  // let day = today.toLocaleDateString("en-US", options);
  //
  // return day;

  //  Simpler
   return today.toLocaleDateString("en-US", options);

};
