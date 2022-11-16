const Person = require("./person");

/**
 * An employee is a Person with an email address and a username.
 */
class Employee extends Person {
  /**
   * Employee's email address.
   *
   * @type {string}
   */
  #email;

  /**
   * Construct a new Employee instance given a firstName, lastName, and
   * optional email parameter.
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} [email]
   */
  constructor(firstName, lastName, email) {
    super(firstName, lastName);

    if (email && typeof email === "string") {
      this.#email = email;
    } else if (email) {
      throw new TypeError("Invalid email");
    } else {
      // do nothing
    }
  }

  /**
   * An employee's default email address.
   *
   * @param {Employee} employee
   * @returns {string} the default email address.
   */
  static #defaultEmail({ firstName, lastName }) {
    return `${firstName}.${lastName}@example.com`.toLocaleLowerCase();
  }

  /**
   * An employee's default username.
   *
   * @param {Employee} employee
   * @returns {string} the default username.
   */
  static #defaultUsername({ firstName, lastName }) {
    return `${firstName[0]}${lastName}`.toLocaleLowerCase();
  }

  /**
   * The employee's email address.
   *
   * @type {string}
   */
  get email() {
    return this.#email ?? Employee.#defaultEmail(this);
  }

  /**
   * The employee's username.
   *
   * @type {string}
   */
  get username() {
    return Employee.#defaultUsername(this);
  }

  toString() {
    return `Employee { email: "${this.email}", firstName: "${this.firstName}", fullName: "${this.fullName}", lastName: "${this.lastName}", username: "${this.username}" }`;
  }
}

const alice = new Employee("Olive", "Rudd", "alice@example.com");
console.log(`${alice}`);

module.exports = Employee;
