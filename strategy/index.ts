// 캡슐화한 알고리즘을 컨텍스트 안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴

interface PaymentStrategy {
  pay(amount: number): void;
}

class Kakao implements PaymentStrategy {
  constructor(
    private name: string,
    private cardNumber: string,
  ) {}

  pay(amount: number): void {
    console.log(`${amount} 지불, kakao`);
  }
}

class Naver implements PaymentStrategy {
  constructor(
    private name: string,
    private cardNumber: string,
  ) {}

  pay(amount: number): void {
    console.log(`${amount} 지불, naver`);
  }
}

class ShoppingCart {
  constructor() {}

  pay(paymentStrategy: PaymentStrategy) {
    let amount = 1000;
    paymentStrategy.pay(amount);
  }
}

(() => {
  const cart = new ShoppingCart();

  cart.pay(new Kakao("jonghwan", "1234-5678"));
  cart.pay(new Naver("jonghwan", "1234-5678"));
})();
