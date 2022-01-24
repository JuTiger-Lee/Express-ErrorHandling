module.exports = {
  notFound: (req, res) => {
    res.status(404).send("404 NOT FOUND");
  },
  serverError: (err, req, res, next) => {
    const result = {
      code: err.code || 500,
      message: err.message || "500 server Error",
      error: {},
    };

    if (err.err || err) result.error = err.err || err;
    if (process.env.NODE_ENV === "prod") delete result.error;

    res.status(err.httpStatus || 500);

    return res.json(result);
  },
};
