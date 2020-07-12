const express = require('express');
const router = express.Router();


const Transaction = require('../../../models/Transactions');

router.get('/', async (re,res) => {
    console.log("app working");
});

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post('/', async (req, res) => {
    try {
    const newPost = new Transaction({
        pin: req.body.pin,
        amount: req.body.amount,
        currencycount: req.body.currencycount,
    });

    const post = await newPost.save();

    res.json(post);
    } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
    }
});


module.exports = router;
