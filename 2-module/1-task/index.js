function sumSalary(salaries) {
  const numbers = Object.values(salaries).filter(number => typeof (number) === 'number' && isFinite(number));
  return numbers.length > 0 ? numbers.reduce((a, b) => {
    return a + b;
  }) : 0;
}
