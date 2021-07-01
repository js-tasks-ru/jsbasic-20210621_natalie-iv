let calculator = {
  read(a, b) {
    this.a = a ? a : 0;
    this.b = b ? b : 0;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

window.calculator = calculator;
