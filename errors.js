export default class Errors {
  /**
   * Create a new error instance.
   *
   * @param {Object} data
   */
  constructor(errors = {}) {
    if (typeof errors === "object") {
      Object.assign(this, errors);
    }
  }

  /**
   * Set the errors object or field error messages.
   *
   * @param {String} field
   * @param {String} messages
   */
  set(field, message) {
    this[field] = message;
  }

  /**
   * Determine if there is an error for the given field.
   *
   * @param  {String} field
   * @return {Boolean}
   */
  has(field) {
    if (this.hasOwnProperty(field)) {
      return this[field] !== null && this[field] !== "";
    }
    return false;
  }

  /**
   * Get the first error message for the given field.
   *
   * @param  {String} field
   * @return {String|undefined}
   */
  get(field) {
    if (this.has(field)) {
      return this[field];
    }
  }

  /**
   * Clear one or all error fields.
   *
   * @param {String|undefined} field
   */
  clear(key = null) {
    if (key) {
      this[key] = null;
      return;
    }
    Object.keys(this).map(key => {
      this[key] = null;
    });
  }
}
