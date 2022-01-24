const db = require("./conn");
const userRepo = module.exports;

userRepo.checkEmail = async function (params) {
  const sql =
    "SELECT COUNT(user_email) as emailCount FROM user WHERE user_email = ?";

  return db.query(sql, params);
};

userRepo.createUser = async function (params) {
  const sql = "INSERT INTO user(user_email, user_password) VALUES(?, ?)";

  return db.query(sql, params);
};
