// void
// 반환값이 없을 때
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;

// never
// 함수가 정상적으로 종료되지 않아 반환할 수 없을 때
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// b = 1;
// b = "hello";
// b = {};
// b = undefined;
