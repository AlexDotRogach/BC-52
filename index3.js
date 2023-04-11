// Зробит так,
// щоб була змога викликати метод
// getName на company1

const company1 = {
  name: "Hexlet",
  getName: function() {
    let total = 0;

    return () =>  {
      return `${this.name} ${total}`;
    }
  }
};

