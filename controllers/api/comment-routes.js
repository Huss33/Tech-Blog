const router = require('express').Router();
const { Comment, User } = require('../../models');

router.post('/comment', async (req, res) => {
    try {
        const userComment = await Comment.findByPk(req.params.id, {
            include: {
                model: User,
            }
        });
        res.status(200).json(userComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

