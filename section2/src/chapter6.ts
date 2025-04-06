// any
let anyVar: any = 10;
anyVar = "hello";
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;

// unknown -> 권장
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar;
if (typeof unknownVar === "number") {
  num = unknownVar;
}
