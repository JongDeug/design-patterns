interface Observer {
  update(news: string): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(news: string): void;
}

// 발행자
class NewsPublisher implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer) {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: 이미 구독중");
    }

    this.observers.push(observer);
    console.log("Subject: 구독 완료");
  }

  detach(observer: Observer) {
    const observerIdx = this.observers.indexOf(observer);
    if (observerIdx === -1) {
      return console.log("Subject: 구독하지도 않았음");
    }

    this.observers.splice(observerIdx, 1);
    console.log("Subject: 구독 취소 완료");
  }

  notify(news: string) {
    console.log("Subject: 알림 보내는 중...");

    for (const observer of this.observers) {
      observer.update(news);
    }
  }

  publishNews(news: string) {
    console.log(`NewsPublisher: 뉴스 발행 ${news}`);
    this.notify(news);
  }
}

// 옵저버
class NewsSubscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string): void {
    console.log(`${this.name} recevied news: ${news}`);
  }
}

// 사용
const publisher = new NewsPublisher();

const subscriber1 = new NewsSubscriber("sub1");
const subscriber2 = new NewsSubscriber("sub2");
const subscriber3 = new NewsSubscriber("sub3");

publisher.attach(subscriber1);
publisher.attach(subscriber2);
publisher.attach(subscriber3);

publisher.publishNews("Breaking News: Typescript is awesome!");

publisher.detach(subscriber2);

publisher.publishNews("Another News: We become what we think!");
