const Person = require("../src/models/person");

describe("Person", () => {
  describe("constructor", () => {
    it("creates an instance of Person", () => {
      const person = new Person("Olive", "Rudd");

      expect(person).toBeInstanceOf(Person);
    });
  });

  it("has a firstName property", () => {
    const person = new Person("Olive", "Rudd");

    expect(person).toHaveProperty("firstName");
  });

  describe("firstName", () => {
    it("is a string", () => {
      const { firstName } = new Person("Olive", "Rudd");

      expect(typeof firstName).toBe("string");
    });

    it("is set during construction", () => {
      const { firstName } = new Person("Olive", "Rudd");

      expect(firstName).toBe("Olive");
    });

    it("is readonly", () => {
      const person = new Person("Olive", "Rudd");
      person.firstName = "Alice";

      const { firstName } = person;

      expect(firstName).toBe("Olive");
    });
  });

  it("has a lastName property", () => {
    const person = new Person("Olive", "Rudd");

    expect(person).toHaveProperty("lastName");
  });

  describe("lastName", () => {
    it("is a string", () => {
      const { lastName } = new Person("Olive", "Rudd");

      expect(typeof lastName).toBe("string");
    });

    it("is set during construction", () => {
      const { lastName } = new Person("Olive", "Rudd");

      expect(lastName).toBe("Rudd");
    });

    it("is readonly", () => {
      const person = new Person("Olive", "Rudd");
      person.lastName = "Brockwell";

      const { lastName } = person;

      expect(lastName).toBe("Rudd");
    });
  });
});
