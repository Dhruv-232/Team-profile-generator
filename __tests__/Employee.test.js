let Employee = require("../lib/Employee");

test("Can create Employee object", () => {
  const e1 = new Employee();
  expect(typeof (e1)).toBe("object");
});

test("getRole() should return \"Employee\"", () => {
  const expValue = "Employee";
  const e1 = new Employee("Sharma", 1, "test@test.com");
  expect(e1.getRole()).toBe(expValue);
});
