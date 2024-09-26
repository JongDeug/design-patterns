// 프록시로도 옵저버 패턴을 구현할 수 있다
const createReactiveObject = (target, callback) => {
  const handler = {
    // target props 모두 적용됨
    set(target, prop, value) {
      if (value !== target[prop]) {
        const prev = target[prop];
        target[prop] = value;
        callback(
          `${prop}이가 [${prev}] >> [${target[prop]}] 로 변경되었습니다.`,
        );
      }
      return true;
    },
  };
  const proxy = new Proxy(target, handler);
  return proxy;
};

const a = {
  창현: "커플",
  종환: "솔로",
};

const b = createReactiveObject(a, console.log);
b.창현 = "솔로";
b.종환 = "커플";

// -------------------------------------------------

const handler = {
  get(target, prop) {
    return prop === "phrase" ? `${target.a} ${target.b}` : target[prop];
  },
};

const p = new Proxy({ a: "It's gonna be a", b: "good day" }, handler);
console.log(p.phrase);
