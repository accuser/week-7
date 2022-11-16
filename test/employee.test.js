const Employee = require("../src/models/employee");
const Person = require("../src/models/person");

describe("Employee", () => {
  it("is a Person", () => {
    const employee = new Employee("Olive", "Rudd");

    expect(employee).toBeInstanceOf(Person);
  });

  describe("constructor", () => {
    describe("with no email argument", () => {
      it("returns an employee", () => {
        const employee = new Employee("Olive", "Rudd");

        expect(employee).toBeInstanceOf(Employee);
      });
    });

    describe("with a valid email argument", () => {
      it("returns an employee", () => {
        const employee = new Employee("Olive", "Rudd", "alice@example.com");

        expect(employee).toBeInstanceOf(Employee);
      });
    });

    describe("with an invalid email argument", () => {
      it("throws a TypeError", () => {
        expect(() => new Employee("Olive", "Rudd", 42)).toThrow(TypeError);
        expect(() => new Employee("Olive", "Rudd", 42)).toThrow(
          "Invalid email"
        );
      });
    });
  });

  it("has an email property", () => {
    const employee = new Employee("Olive", "Rudd");

    expect(employee).toHaveProperty("email");
  });

  describe("email property", () => {
    it("is a string", () => {
      const { email } = new Employee("Olive", "Rudd");

      expect(typeof email).toBe("string");
    });

    it("has a default value", () => {
      const { email } = new Employee("Olive", "Rudd");

      expect(email).toBe("olive.rudd@example.com");
    });

    it("can be set during construction", () => {
      const { email } = new Employee("Olive", "Rudd", "alice@example.com");

      expect(email).toBe("alice@example.com");
    });
  });

  it("has a username property", () => {
    const employee = new Employee("Olive", "Rudd");

    expect(employee.username).toBe("orudd");
  });

  describe("username property", () => {
    it("is a string", () => {
      const { username } = new Employee("Olive", "Rudd");

      expect(typeof username).toBe("string");
    });

    it("has a default value", () => {
      const { username } = new Employee("Olive", "Rudd");

      expect(username).toBe("orudd");
    });
  });
});
