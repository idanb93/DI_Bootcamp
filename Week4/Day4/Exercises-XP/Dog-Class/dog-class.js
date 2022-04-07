class Dog {
    constructor(name) {
        this.name = name;
    }
};

  // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

let labrador1 = new Labrador('rexy', '0.8fit');
console.log(labrador1);

// Constructor 2 will successfully extends Dog
// 1. the parent constructor have a minimum of 1 parameter, and it sends it to it.
// 2. it calls super constructor before accessing this