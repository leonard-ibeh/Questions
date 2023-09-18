// 1 - A to convert the first title to uppercase.
const convertToUppercase = function (title) {
  const exception = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exception.includes(word) ? word : capitalize(word)))
    .join(" ");
  return capitalize(titleCase);
};
console.log(convertToUppercase("the boy is a goat FUll"));

// Question 2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAv = function (data) {
  const humanAge = data.map((data) => (data <= 2 ? 2 * data : 16 + data * 4));
  console.log(humanAge);
  const adult = humanAge.filter((age) => age >= 18);
  console.log(adult);
  const average = adult.reduce((acc, age) => acc + age, 0) / adult.length;
  console.log(average);
};

calcAv(data1);

// Question 3
/* -- What do you understand about JavaScript?
JavaScript is a popular web-scripting language and is used for client-side and sever side development */

// Question 4
/* -- What's the difference between javaScript and Java?
JavaScript is Object-oriented scripting language && JavaScript applications are meant to run inside a web browser && Javascript does not need compilation before running the application code.
Java is an Object-oriented programming language && Java application are generally made for use in Operating Systems and Virtual Machines && Java Source code needs a compiler before it can be ready to run in realtime*/

// Question 5
/* -- What are the various data types in JavaScript ?
 Data type --- Description 
 Boolean   ==>  For true and false values
 Null      ==>  For empty or unknown values
 Undefined ==>  For variables that are only declared and not defined or initialized 
 Number    ==>  For integer and floating-point values
 String    ==>  For characters and alphanumeric values
 Object    ==>  For collections or complex values
 Symbols   ==>  For unique identifiers or objects 
 */

// Question 6
const data = function () {
  console.log("3,4,5");
};
