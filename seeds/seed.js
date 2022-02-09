const sequelize = require('../config/config');
const seedComment = require('./commentData.json');
const seedPost = require('./postData.json');
const seedUser = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedComment();
  await seedUser();
  await seedPost();

  process.exit(0);
};

seedDatabase();