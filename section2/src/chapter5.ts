// enum

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정진",
  role: Role.ADMIN,
  language: Language.korean,
};

const user2 = {
  name: "김정진",
  role: Role.USER,
  Language: Language.english,
};
