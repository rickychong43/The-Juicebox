const jwt = require("jsonwebtoken")


JWT_SECRET = "don't tell a soul";
const user = {
    username: ricky,
    password: chong1
};

const token = jwt.sign(user, JWT_SECRET);
console.log(token)


const userInfo = jwt.verify(token, JWT_SECRET);