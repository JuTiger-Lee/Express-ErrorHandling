const ctx = require("../context");
const bcrypt = require("bcrypt");

const usController = module.exports;

usController.signUp = async function (req, res, next) {
  const { user_email, user_password } = req.body;

  try {
    const hashPassword = bcrypt.hashSync(user_password, 10);
    await ctx.userSvc.createUser(user_email, hashPassword);

    ctx.response.init(201, 200, "success");

    return res.json(ctx.response.makeSuccessResponse([]));
  } catch (err) {
    console.log("User Error:", err);
    return next(err);
  }
};
