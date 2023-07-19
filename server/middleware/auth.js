const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    try {
      const tokenVerify = jwt.verify(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUmVsYXRpb24iOiI2NGI3NjdkZTk1MDk3ZTgxOGIwMjM5NjEiLCJpYXQiOjE2ODk3ODMxMTMsImV4cCI6MTY4OTc4NjcxM30.3AZe_k1uUpIw_ZTcjFhevuDn-49sgsHT86DSFEWTHQo",
        "attryb"
      );
      console.log(tokenVerify);
      if (tokenVerify) {
        req.body.dealerID = tokenVerify.userRelation;
        next();
      } else {
        res.send({ msg: "token is not verified" });
      }
    } catch (error) {
      res.status(400).send({ err: error.message });
    }
  } else {
    res.status(200).send({ msg: "Login First" });
  }
};
module.exports = { auth };
