function factorial(n) {
  let value = n;
  if (Number.isInteger(n) && n >= 0) {
    if (n === 0) {
      return 1;
    } else {
      for (let i = 1; i < n; i++) {
        let step = n - i;
        value = value * step;
      }
      return value;
    }
  } else {
    alert('Значение должно быть неотрицательным и целочисленным');
    return null;
  }
}

factorial(2);

//todo: Встроенный автотест не проверяет на дробные и отрицательные значения.
//todo: Так как факториал применяется только к целым и неотрицательным числам, я решила учесть это в написании функции.
