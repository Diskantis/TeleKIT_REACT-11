const express = require("express");
const router = express.Router();
const multer = require("multer");

const { authMiddleware } = require("../middleware/authMiddleware");
const {
  UsersController,
  RecipientsController,
} = require("../controllers/controllers");

const uploadDestination = "uploads";

// Показываем, где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

// Роуты User
router.post("/users/register", UsersController.register);
router.post("/users/login", UsersController.login);
router.get("/users/current", authMiddleware, UsersController.currentUser);
router.get("/users", authMiddleware, UsersController.getAllUsers);
router.get("/users/:id", authMiddleware, UsersController.getOneUser);
router.put(
  "/users/edit/:id",
  authMiddleware,
  uploadStorage.single("avatar"),
  UsersController.updateUser,
);
router.delete("/users/remove/:id", authMiddleware, UsersController.deleteUser);

// Роуты Recipients
router.get(
  "/recipients",
  authMiddleware,
  RecipientsController.getAllRecipients,
);
router.get(
  "/recipients/:id",
  authMiddleware,
  RecipientsController.getOneRecipient,
);
router.post(
  "/recipients/add",
  authMiddleware,
  RecipientsController.addRecipient,
);
router.put(
  "/recipients/edit/:id",
  authMiddleware,
  RecipientsController.updateRecipient,
);
router.delete(
  "/recipients/remove/:id",
  authMiddleware,
  RecipientsController.deleteRecipient,
);

module.exports = router;
