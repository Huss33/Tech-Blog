const sequelize = require('../config/config');
const { User, Post, Comment } = require('../models')
const seedComment = require('./commentData.json');
const seedPost = require('./postData.json');
const seedUser = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(seedPost, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(seedComment, {
    individualHooks: true,
    returning: true,
  });

  // await seedComment();
  // await seedUser();
  // await seedPost();

  process.exit(0);
};

seedDatabase();