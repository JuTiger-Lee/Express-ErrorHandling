const userRepo = require("../model/userRepo");

class UserSvc {
  constructor(response) {
    this.response = response;
  }

  /**
   *
   * @param {String} email
   * @param {String} hashPassword
   */
  async createUser(email, hashPassword) {
    const emailLength = await userRepo.checkEmail([email]);

    if (emailLength.data[0].emailCount) {
      this.response.init(409, 409, "email duplicate");
      throw this.response.makeErrorResponse({}, "Email duplicate");
    }

    const newUser = await userRepo.createUser([email, hashPassword]);

    if (!newUser.data.affectedRows) {
      this.response.init(500, 500, "User SignUp Error");
      throw this.response.makeErrorResponse({}, "signUp user insert Error");
    }
  }
}

module.exports = UserSvc;
