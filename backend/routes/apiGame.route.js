const router = require('express').Router();
const { Title, Question } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const titles = await Title.findAll({ include: [{ model: Question }] });
    console.log(titles);
    res.json(titles); 
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

module.exports = router;
