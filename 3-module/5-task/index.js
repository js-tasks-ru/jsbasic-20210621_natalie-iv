function getMinMax(str) {
  let numbers = str.replace(/,/g, ' ').split(' ').filter(item => +item).map(num => +num);
  return {
    max: Math.max.apply(null, numbers),
    min: Math.min.apply(null, numbers)
  };
}
