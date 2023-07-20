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
