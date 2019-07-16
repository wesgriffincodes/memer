module.exports = (req, res, next) => {
  console.log(`requested Method: ${req.method}, Path: ${req.path}`);
  next();
};
