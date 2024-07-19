const { prisma } = require("../prisma/prisma-client");
const path = require("path");
const fs = require("fs");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Jdenticon = require("jdenticon");

const UsersController = {
  /**
   * REGISTER
   * @route POST /api/users/register
   * @desc Регистрация "Пользователя"
   * @access Public
   */
  register: async (req, res) => {
    try {
      const { email, password, lastName, firstName, surName, role } = req.body;

      if (!email || !password || !lastName || !firstName || !role) {
        return res
          .status(400)
          .json({ message: "Пожалуйста, заполните все поля" });
      }

      const registeredUser = await prisma.user.findFirst({ where: { email } });
      if (registeredUser) {
        return res
          .status(400)
          .json({ message: "Пользователь, с таким Email уже существует" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Генерируем аватар для нового пользователя
      const png = Jdenticon.toPng(email, 200);
      const avatarName = `${email}_${Date.now()}.png`;
      const avatarPath = path.join(__dirname, "/../uploads", avatarName);
      fs.writeFileSync(avatarPath, png);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          lastName,
          firstName,
          surName,
          avatarUrl: `/uploads/${avatarName}`,
          role,
        },
      });

      const secret = process.env.JWT_SECRET;

      if (user && secret) {
        res.status(201).json({
          ...user,
          token: jwt.sign({ id: user.id, email: user.email }, secret, {
            expiresIn: "30d",
          }),
        });
      } else {
        return res
          .status(400)
          .json({ message: 'Не удалось создать "Пользователя"' });
      }
    } catch {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  },
  /**
   * LOGIN
   * @route POST /api/users/login
   * @desc Логин
   * @access Public
   */
  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Пожалуйста, заполните обязательные поля" });
    }

    try {
      const user = await prisma.user.findFirst({ where: { email } });

      const isPasswordCorrect =
        user && (await bcrypt.compare(password, user.password));
      const secret = process.env.JWT_SECRET;

      if (user && isPasswordCorrect && secret) {
        res.status(200).json({
          id: user.id,
          lastName: user.lastName,
          firstName: user.firstName,
          surName: user.surName,
          avatarUrl: user.avatarUrl,
          token: jwt.sign({ id: user.id, email: user.email }, secret, {
            expiresIn: "30d",
          }),
        });
      } else {
        return res
          .status(400)
          .json({ message: "Неверно введен Email или Пароль" });
      }
    } catch {
      res
        .status(500)
        .json({ message: 'Не удалось авторизовать "Пользователей"' });
    }
  },
  /**
   * GET ALL USERS
   * @route GET /api/users
   * @desc Получение всех "Пользователей"
   * @access Private
   */
  getAllUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch {
      res.status(500).json({ message: 'Не удалось получить "Пользователей"' });
    }
  },
  /**
   * ONE USER
   * @route GET /api/users/:id
   * @desc Получение "Получателя"
   * @access Private
   */
  getOneUser: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      res.status(200).json(user);
    } catch {
      res.status(500).json({ message: "Не удалось получить Получателя" });
    }
  },
  /**
   * GET CURRENT USER
   * @route GET /api/users/current
   * @desc Получение текущего "Пользователя"
   * @access Private
   */
  currentUser: async (req, res) => {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });
    if (!user) {
      return res.status(400).json({ error: 'Не удалось найти "Пользователя"' });
    }

    return res.status(200).json(user);
  },
  /**
   * UPDATE USER
   * @route PUT /api/users/update/:id
   * @desc Редактирование "Пользователя"
   * @access Private
   */
  updateUser: async (req, res) => {
    const id = req.params.id;
    const { email, password, lastName, firstName, surName, role } = req.body;

    const lastUser = await prisma.user.findFirst({
      where: { id },
    });

    let filePath;

    if (req.file && req.file.path) {
      filePath = req.file.path;
    }

    // // Проверка, что пользователь обновляет свою информацию
    // if (id !== req.user.id) {
    //   return res.status(403).json({ error: "Нет доступа" });
    // }

    try {
      let hashedPassword;

      if (password !== lastUser.password) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
      }

      if (email !== lastUser.email) {
        const existingUser = await prisma.user.findFirst({
          where: { email: email },
        });

        if (existingUser && existingUser.id !== parseInt(id)) {
          return res.status(400).json({ message: "Email уже используется" });
        }
      }

      const user = await prisma.user.update({
        where: { id },
        data: {
          email: email || undefined,
          password: hashedPassword || undefined,
          lastName: lastName || undefined,
          firstName: firstName || undefined,
          surName: surName || undefined,
          avatarUrl: filePath ? `/${filePath}` : undefined,
          role: role || undefined,
        },
      });
      res.json(user);
    } catch (error) {
      console.log("Update user error", error);
      res
        .status(500)
        .json({ message: "Не удалось отредактировать Пользователя" });
    }
  },
  /**
   * DELETE USER
   * @route DELETE /api/users/delete/:id
   * @desc Удаление "Пользователя"
   * @access Private
   */
  deleteUser: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      const avatarPath = path.join(__dirname, "../", user.avatarUrl);

      fs.unlinkSync(avatarPath);
      await prisma.user.delete({ where: { id } });

      return res.json({ message: "ОК. Пользователь удален" });
    } catch {
      res.status(500).json({ message: "Не удалось удалить Пользователя" });
    }
  },
};

module.exports = UsersController;
