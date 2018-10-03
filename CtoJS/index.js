class Shuffle {
  constructor(args = {}) {
    ({
      a: this.a = 0,
      b: this.b = 0,
      c: this.c = 0,
      d: this.d = 0,
      e: this.e = 0,
      f: this.f = 0,
      g: this._g = 0,
      h: this._h = 0,
      i: this._i = 0,
      r: this.r = 0
    } = args);
  }

  set g(value) {
    this._g = value;
  }

  set h(value) {
    this._h = value;
  }

  set i(value) {
    this._i = value;
  }

  algebraicExpressionSimple() {
    let flag = 0;
    if (this.a > this.b) {
      this.r = this.a / this.b + 1;
      flag = this.r;
      console.log("%s %s", "firts value ", parseFloat(this.r));
    }
    if (flag) {
      console.log("%s", "waiting...");
      setTimeout(() => {
        this.r = 0;
        this.r = (this.a + this.b) / (this.c + this.d);
        console.log("%s %s", "second value ", parseFloat(this.r).toFixed(2));
      }, 100);
    }
  }
  algebraicExpressionSimpleFraction() {
    let r = {
      a: 0,
      b: 0,
      r: 0
    };
    r.a = this.a + this.b / this.c;
    r.b = this.d + this.e / this.f;
    r.r = r.a / r.b;
    console.log("%s %s", "secon func", parseFloat(r.r).toFixed(2));
  }
  changeValues() {
    let t = 0;
    t = this.a;
    this.a = this.b;
    this.b = t;
    console.log("%s %s %s", "2 changes", this.a, this.b);

    //change 3 values
    // a: 2, b: 10, c: 16
    // c = a, b = c, a = b
    // c = 2, b = 16, a = 10

    let q = 0,
      w = 0;
    q = this.a;
    w = this.c;
    this.c = q;
    this.a = this.b;
    this.b = w;
    console.log("%s %s %s %s", "3 changes:", this.c, this.b, this.a);
  }
  WeightedAverage() {
    // 0.3%, 0.2%, 0.5%
    let steps = 0,
        percentage = 0,
        sumPercentage;
        ;
    if (steps === 0) {
      percentage = (this._g * 0.3) + (this._h * 0.2) + (this._i * 0.5);
      if (percentage) {
        console.log("%s %s","percentage",percentage);
        steps++;
      }else{
        steps = 0;
      }
    }
    if (steps === 1) {    
      sumPercentage = 0.3 + 0.2 + 0.5;
      console.log(sumPercentage);
      this.r = (percentage / sumPercentage);
      console.log("%s %s", "Weighted average is:", this.r);
    }else{
      console.log("%s", 'don\' value')
    }
  }
}

var test = new Shuffle({ a: 10, b: 2, c: 16, d: 12, e: 4, f: 8 });
test.g = 0;
test.h = 0;
test.i = 0;

test.algebraicExpressionSimple();
test.algebraicExpressionSimpleFraction();
test.changeValues();
test.WeightedAverage();
