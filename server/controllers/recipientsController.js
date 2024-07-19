const {prisma} = require('../prisma/prisma-client');

const RecipientsController = {
  /**
   * ALL RECIPIENTS
   * @route GET /api/recipients
   * @desc Получение всех "Получателей"
   * @access Private
   */
  getAllRecipients: async (req, res) => {
    try {
      const recipients = await prisma.recipient.findMany()
      res.status(200).json(recipients)
    } catch {
      res.status(500).json({message: 'Не удалось получить Получателей'})
    }
  },

  /**
   * ONE RECIPIENT
   * @route GET /api/recipients/:id
   * @desc Получение "Получателя"
   * @access Private
   */
  getOneRecipient: async (req, res) => {
    const {id} = req.params;

    try {
      const recipient = await prisma.recipient.findUnique({
        where: {
          id,
        },
      });

      res.status(200).json(recipient);
    } catch {
      res.status(500).json({message: "Не удалось получить Получателя"});
    }
  },

  /**
   * ADD RECIPIENT
   * @route POST /api/recipients/add
   * @desc Добавление "Получателя"
   * @access Private
   */
  addRecipient: async (req, res) => {
    try {
      // const data = req.body
      const {lastName, firstName, surName, position, department, state, phone} = req.body

      if (!lastName || !firstName || !surName) {
        return res.status(400).json({message: 'Пожалуйста, заполните обязательные поля'})
      }

      const addRecipient = await prisma.recipient.findFirst({
        where: {lastName, firstName, surName}
      });

      if (addRecipient) {
        return res.status(400).json({message: 'Пользователь, с такими данными уже существует'})
      }

      const recipient = await prisma.recipient.create({
        data: {lastName, firstName, surName, position, department, state, phone}
      });
      return res.status(201).json(recipient)

    } catch {
      res.status(500).json({message: 'Не удалось добавить Получателя'})
    }
  },

  /**
   * UPDATE RECIPIENT
   * @route PUT /api/recipients/update/:id
   * @desc Редактирование "Получателя"
   * @access Private
   */
  updateRecipient: async (req, res) => {
    const data = req.body
    const {id} = req.params

    try {
      await prisma.recipient.update({
        where: {
          id
        },
        data
      })
      return res.status(204).send("OK")

    } catch {
      res.status(500).json({message: 'Не удалось отредактировать Получателя'})
    }
  },

  /**
   * DELETE RECIPIENT
   * @route DELETE /api/recipients/delete/:id
   * @desc Удаление "Получателя"
   * @access Private
   */
  deleteRecipient: async (req, res) => {
    const {id} = req.params
    try {
      await prisma.recipient.delete({
        where: {
          id
        }
      })
      return res.status(204).json({message: 'ОК. Получатель удален'})

    } catch {
      res.status(500).json({message: 'Не удалось удалить Получателя'})
    }
  }
}

module.exports = RecipientsController;