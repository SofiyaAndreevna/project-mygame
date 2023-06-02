const { User } = require('../db/models');

const getUser = async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findByPk(req.session.userId);
    res.locals.userId = { name: user.name, id: user.id, role: user.role };
  }
  next();
};

module.exports = {
  getUser,
};
