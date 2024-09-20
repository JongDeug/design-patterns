class CarFactory {
  createCar(type) {
    // 추가할 때마다 수정해야함.
    if (type === "sedan") {
      return new Sedan();
    } else if (type === "suv") {
      return new SUV();
    }
    return null;
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

// 클라이언트 코드
const factory = new CarFactory();
const sedan = factory.createCar("sedan");
sedan.drive(); // "Driving a sedan."

const suv = factory.createCar("suv");
suv.drive(); // "Driving an SUV."
