function getMinMax(str) {
  let numbers = str.replace(/,/g, ' ').split(' ').filter(item => +item).map(num => +num);
  return {
    max: Math.max(...numbers),
    min: Math.min(...numbers)
  };
}
