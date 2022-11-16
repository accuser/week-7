const Person = require("../src/person");

describe("Person", () => {
  describe("constructor", () => {
    describe("with valid arguments", () => {
      it("creates an instance of Person", () => {
        const person = new Person("Olive", "Rudd");

        expect(person).toBeInstanceOf(Person);
      });
    });

    describe("with no arguments", () => {
      it("throws a TypeError", () => {
        expect(() => new Person()).toThrow(TypeError);
        expect(() => new Person()).toThrow("Invalid firstName");
      });
    });

    describe("with no lastName argument", () => {
      it("throws a TypeError", () => {
        expect(() => new Person("Olive")).toThrow("Invalid lastName");
      });
    });

    describe("with an empty firstName argument", () => {
      it("throws a TypeError", () => {
        expect(() => new Person("", "Rudd")).toThrow("Invalid firstName");
      });
    });

    describe("with an empty lastName argument", () => {
      it("throws a TypeError", () => {
        expect(() => new Person("Olive", "")).toThrow("Invalid lastName");
      });
    });

    describe("with a non-string firstName argument", () => {
      it("throws a TypeError", () => {
        expect(() => new Person(42, "Rudd")).toThrow("Invalid firstName");
      });
    });

    describe("with a non-string lastName argument", () => {
      it("throws a TypeError", () => {
        expect(() => new Person("Olive", 42)).toThrow("Invalid lastName");
      });
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

  it("has a fullName property", () => {
    const person = new Person("Olive", "Rudd");

    expect(person).toHaveProperty("fullName");
  });

  describe("fullName", () => {
    it("is a string", () => {
      const { fullName } = new Person("Olive", "Rudd");

      expect(typeof fullName).toBe("string");
    });

    it("is derrived from the person's first and last name", () => {
      const { fullName } = new Person("Olive", "Rudd");

      expect(fullName).toBe("Olive Rudd");
    });

    it("is readonly", () => {
      const person = new Person("Olive", "Rudd");
      person.fullName = "Olive Brockwell";

      const { fullName } = person;

      expect(fullName).toBe("Olive Rudd");
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
