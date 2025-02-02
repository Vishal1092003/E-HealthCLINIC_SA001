const express = require('express');
const router = express.Router();
const urlschema = require('../storage Schema/UrlSchema');

router.post('/posturl', async (req, res) => {
    try {
        console.log("hit the url complete");
        const { url, changeTo } = req.body;
     
        if (url === '') {
            return res.status(400).json({
                status: false,
                message: "url not found"
            });
        }
        if (changeTo === '') {
            return res.status(400).json({
                status: false,
                message: "changeTo not found"
            });
        }

        const generate = "xyz";
        const Newurl = new urlschema({ url, finalUrl: generate });
        await Newurl.save();

        res.status(200).json({
            status: true,
            message: generate
        });

    } catch (error) {
        console.log("error is ", error);
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
});

module.exports = router;
