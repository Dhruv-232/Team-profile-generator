let Employee = require("../lib/Employee");

test("Can create Employee object", () => {
    const e1 = new Employee();
    expect(typeof(e1)).toBe("object");
  });
  