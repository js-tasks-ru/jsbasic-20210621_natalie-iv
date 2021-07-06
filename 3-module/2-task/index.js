function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}
//todo: Сократить до (a <= item <= b) не выходит, почему-то тест на диапазон не проходит :(
