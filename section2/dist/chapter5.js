// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
