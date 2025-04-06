/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "댕댕이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = Book & {
  skill: string;
};

let programmingBook: ProgrammingBook = {
  name: "Java",
  price: 12000,
  skill: "spring",
};
