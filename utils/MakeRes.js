class MakeRes {
  constructor() {}

  /**
   * http status
   * @param {Number} httpStatus
   * err code(애플리케이션 err code)
   * @param {Number} code
   * custom status
   * @param {Number} status
   * @param {String} message
   */
  init(httpStatus, code, message) {
    this.httpStatus = httpStatus;
    this.code = code;
    this.message = message;
  }

  /**
   *
   * @param {Array<Object> || Array} data
   * @returns
   */
  makeSuccessResponse(data = []) {
    return {
      code: this.code,
      message: this.message,
      data,
    };
  }

  /**
   *
   * @param {Object} err
   * 서버 애플리케이션에 보이는 error name
   * 디버깅 쉽게하기 위한 목적
   * @param {String} name
   * @returns
   */
  makeErrorResponse(err = {}, name = "Syntax Error") {
    const error = new Error();

    error.httpStatus = this.httpStatus;
    error.code = this.code;
    error.message = this.message;
    error.name = name;
    error.err = err;

    return error;
  }
}

module.exports = MakeRes;
