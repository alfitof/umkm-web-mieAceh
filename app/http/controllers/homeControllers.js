const Menu = require('../../models/menu');

function homeControllers() {
  return {
    async index(req, res) {
      const mies = await Menu.find();
      return res.render('home', { mies: mies });
    },
  };
}

module.exports = homeControllers;
