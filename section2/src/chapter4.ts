// type alias
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
};

let user: User = {
  id: 1,
  name: "이정진",
  nickname: "maiload",
  birth: "1996.01.24",
};

let user2: User = {
  id: 2,
  name: "김정진",
  nickname: "maiload2",
  birth: "1996.01.25",
};

// index signature
type CountryCodes = {
  [key: string]: string;
  Korea: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  US: "us",
  UK: "uk,",
};
