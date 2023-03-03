let Manager = require("../lib/Manager");

test("Can create Manager object", () => {
  const e4 = new Manager();
  expect(typeof (e4)).toBe("object");
});

test("getRole() should return \"Manager\"", () => {
  const expValue = "Manager";
  const e4 = new Manager("Sharma", 1, "test@test.com");
  expect(e4.getRole()).toBe(expValue);
});
