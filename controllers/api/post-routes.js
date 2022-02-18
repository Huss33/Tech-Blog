const router = require('express').Router();
// const withAuth = require('../utils/auth'); add at the end if it works!!!
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll(req.body, {
            include: {
                model: User,
            }
        });
        console.log(postData);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            body: req.body.body,
            userId: req.session.userId,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/posts/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            body: req.body.body,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
    .then((updatedPost) => {
        res.json(updatedPost);
    })
    .catch((err) => res.json(err));
});

router.delete('/posts/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedPost) => {
        res.json(deletedPost);
      })
      .catch((err) => res.json(err));
  });

  module.exports = router;