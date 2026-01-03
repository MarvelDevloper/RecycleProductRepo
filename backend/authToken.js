/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

const authToken = {
    generateToken: (userData) => {
        return jwt.sign({ userData }, process.env.AUTH_KEY, { expiresIn: "50s" });
    },

    verifyToken: (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ msg: "No token provided" });
        }

        const decode = jwt.verify(token, process.env.AUTH_KEY);
        req.userid = decode.userData.id;
        req.useremail = decode.userData.email;
        req.userlocation = decode.userData.location;

        next();
    } catch (err) {
         console.log("JWT Error:", err.name);
  return res.status(401).json({ msg: "Token expired or invalid" });
    }
}

};

module.exports = authToken;
