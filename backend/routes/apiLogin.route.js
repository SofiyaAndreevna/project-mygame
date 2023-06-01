const router = require('express').Router();

const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && password && email) {
      let user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hash });
        req.session.user = user.id;
        res.locals.user = { name: user.name, id: user.id };
        res.status(201).json({ name: user.name, id: user.id, email: user.email });
      } else {
        res
          .status(400)
          .json({ message: ' пользователь c таким email уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.json({
      success: false,
      message: 'Нет такого пользователя либо пароли не совпадают',
    });
    return;
  }
  req.session.userId = user.id;

  res.json({ name: user.name, id: user.id, email: user.email });
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res.clearCookie('user_sid').json({ message: 'Успешный выход' });
  });
});

module.exports = router;
