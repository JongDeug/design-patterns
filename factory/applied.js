class CarFactory {
  // 상위 클래스는 객체 생성의 새부 사항을 알지 못함
  static createCar(type) {
    const factory = factoryType[type];
    return factory.createCar();
  }
}

class Sedan {
  drive() {
    console.log("Driving a sedan.");
  }
}

class SUV {
  drive() {
    console.log("Driving an SUV.");
  }
}

class SedanFactory extends CarFactory {
  static createCar() {
    return new Sedan();
  }
}

class SUVFactory extends CarFactory {
  static createCar() {
    return new SUV();
  }
}

// 타입만 추가하면 됨
const factoryType = { SedanFactory, SUVFactory };

const sedan = CarFactory.createCar("SedanFactory");
const suv = CarFactory.createCar("SUVFactory");
sedan.drive();
suv.drive();
