function budget(budget) {
  let result = 0;

  for (const element of budget) {
    result += element.budget;
  }

  return result;
}
console.log(
  budget([
    {
      name: "John",
      age: 21,
      budget: 23000,
    },
    {
      name: "Steve",
      age: 32,
      budget: 40000,
    },
    {
      name: "Martin",
      age: 16,
      budget: 2700,
    },
  ])
);
