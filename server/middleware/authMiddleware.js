// const jwt = require("jsonwebtoken");
// const { prisma } = require("../prisma/prisma-client_1");
//
// const authMiddleware = async (req, res, next) => {
//   try {
//     let token = req.headers.authorization?.split(" ")[1];
//
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//
//     req.user = await prisma.user.findUnique({
//       where: {
//         id: decoded.id,
//         email: decoded.email
//       },
//     });
//     console.log(req.user)
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Не авторизован" });
//   }
// };
//
// module.exports = { authMiddleware };

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Получить токен из заголовка Authorization
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // Проверяем, есть ли токен
  if (!token) {
    return res.status(401).json({ message: "Не авторизован" });
  }

  // Проверяем токен
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

module.exports = { authMiddleware };
