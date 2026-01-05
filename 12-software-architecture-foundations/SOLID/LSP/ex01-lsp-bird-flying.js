const flieable = {
  fly()  {
    console.log(`${this.type} is flying!`);
  }
};

class Bird {
  constructor(type) {
    this.type = type;
  }
}

class Sparrow extends Bird {
  constructor() {
    super('Sparrow');
  }
}

class Ostrich extends Bird {
  constructor() {
    super("Ostrich");
  }
}

const sparrow = new Sparrow();
Object.assign(sparrow, flieable);
sparrow.fly(); // Sparrow is flying!
