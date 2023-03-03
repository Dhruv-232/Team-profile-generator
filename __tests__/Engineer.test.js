let Engineer = require("../lib/Engineer");

test("Can create Engineer object", () => {
  const e2 = new Engineer();
  expect(typeof (e2)).toBe("object");
});

test("getRole() should return \"Engineer\"", () => {
  const expValue = "Engineer";
  const e2 = new Engineer("Sharma", 1, "test@test.com");
  expect(e2.getRole()).toBe(expValue);
});
