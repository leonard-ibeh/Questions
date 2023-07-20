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
