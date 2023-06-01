const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  const userId = req.session.id;
  try {
    if (userId) {
      const user = await User.findOne({ where: { id: userId } });
      res.json({ user });
    } else res.json({ message: 'нет авторизированных пользователей' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
