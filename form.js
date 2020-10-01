import { deepCopy } from "./util.js";

class Form {
  /**
   * Create a new form instance.
   *
   * @param {Object} data
   */
  constructor(data = {}) {
    this.originalData = data;
    Object.assign(this, data);
  }

  /**
   * Fill form data.
   *
   * @param {Object} data
   */
  fill(data) {
    this.keys().forEach(key => {
      this[key] = data[key];
    });
  }

  /**
   * Get the form data keys.
   *
   * @return {Array}
   */
  keys() {
    return Object.keys(this).filter(key => !Form.ignore.includes(key));
  }

  /**
   * Reset the form fields.
   */
  reset() {
    Object.keys(this).forEach(key => {
      Object.keys(this)
        .filter(key => !Form.ignore.includes(key))
        .forEach(key => {
          this[key] = deepCopy(this.originalData[key]);
        });
    });
  }
}

Form.ignore = ["originalData"];

export default Form;
