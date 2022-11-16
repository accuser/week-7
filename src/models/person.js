/**
 * A person with a first and last name.
 */
class Person {
  #firstName;
  #lastName;

  /**
   * Construct a new person instance.
   *
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    if (firstName && typeof firstName === "string") {
      this.#firstName = firstName;
    } else {
      throw new TypeError("Invalid firstName");
    }

    if (lastName && typeof lastName === "string") {
      this.#lastName = lastName;
    } else {
      throw new TypeError("Invalid lastName");
    }
  }

  get firstName() {
    return this.#firstName;
  }

  get fullName() {
    return [this.firstName, this.lastName].join(" ");
  }

  get lastName() {
    return this.#lastName;
  }

  toString() {
    return `Person { firstName: "${this.firstName}", fullName: "${this.fullName}", lastName: "${this.lastName}" }`;
  }
}

module.exports = Person;
