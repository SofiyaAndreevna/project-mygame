const router = require('express').Router();
const { Title, Question, User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    // if (req.session.userId)
    //  {
      const titles = await Title.findAll({ include: [{ model: Question }] });
     
      res.json(titles);
    // }
    // else { res.redirect('http://localhost:3000')}
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.get('/:titleId/question/:questId', async (req, res) => {
  try {
    const themes = await Title.findOne({
      where: { id: Number(req.params.titleId) },
      include: { model: Question },
    });
    if (themes) {
      res.json(themes);
    } else {
      res.json({ message: 'тема не найдена' });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { points } = req.body;
    const user = await User.findOne({ where: { id: req.session.userId } });
    user.points = points;
    user.save();
    res.json({ points: user.points });
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
