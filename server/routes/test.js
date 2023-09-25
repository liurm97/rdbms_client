"use strict";

const a = [
  { Tables_in_test: "test" },
  { Tables_in_test: "test1" },
  { Tables_in_test: "test2" },
  { Tables_in_test: "test3" },
  { Tables_in_test: "test5" },
  { Tables_in_test: "test6" },
  { Tables_in_test: "undefined" },
];

// for (const [key, value] of Object.entries(a[0])) {
//   console.log(key, value);
// }
let exists = 0;
a.forEach((obj) => {
  if (obj.Tables_in_test === "test11") exists = 1;
});
console.log(exists);
