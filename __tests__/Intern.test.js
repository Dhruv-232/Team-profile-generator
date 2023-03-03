let Intern = require("../lib/Intern");

test("Can create Intern object", () => {
  const e3 = new Intern();
  expect(typeof (e3)).toBe("object");
});

test("getRole() should return \"Intern\"", () => {
  const expValue = "Intern";
  const e3 = new Intern("Sharma", 1, "test@test.com");
  expect(e3.getRole()).toBe(expValue);
});
