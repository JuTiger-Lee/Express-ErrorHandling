const UserSvc = require("./services/UserSvc");
const MakeRes = require("./utils/MakeRes");

function context() {
  const makeRes = new MakeRes();
  const userSvc = new UserSvc(makeRes);

  return {
    response: makeRes,
    userSvc,
  };
}

module.exports = context();
