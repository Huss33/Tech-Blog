const router = require('express').Router();
// const withAuth = require('../utils/auth'); add at the end if it works!!!
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

module.exports = router;
