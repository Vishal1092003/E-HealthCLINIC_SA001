const express = require('express');
const router = express.Router();
// const urlschema = require('../storage Schema/UrlSchema');
const Url=require('../storage Schema/UrlSchema');

router.post("/posturl", async (req, res) => {
    try {
        console.log("hit the url complete");
        const { url, finalUrl } = req.body;

        if (url === "") {
            return res.status(400).json({
                status: false,
                message: "url not found"
            });
        }
        if (finalUrl === "") {
            return res.status(400).json({
                status: false,
                message: "changeTo not found"
            });
        }

        const AlreadyPresent=await Url.findOne({finalUrl});
        if(AlreadyPresent){
            return res.status(400).json({
                status:false,
                message:"Alais already present"
            })
        }

        
        const Newurl = new Url({ url, finalUrl });
        await Newurl.save();
        

        // console.log("finally svaed to db ");
        res.status(200).json({
            status: true,
            message:`https://${finalUrl}`
        });

        

    } catch (error) {
        console.log("error is ", error);
        res.status(400).json({
            status: false,
            message: error.message
        });
    }
});


router.get("/:finalUrl", async (req, res) => {
    try {
        const { finalUrl } = req.params;
        console.log("final url ", finalUrl);
        const urlEntry = await Url.findOne({ finalUrl });
        console.log("urlEntry is ",urlEntry);
        if (!urlEntry) {
            return res.status(404).json({
                success: false,
                message: "URL entry not found"
            });
        }
       
        console.log(`Redirecting to: ${urlEntry.url}`);
        return res.redirect(urlEntry.url);

    } catch (error) {
        console.error("Error is ", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


module.exports = router;
