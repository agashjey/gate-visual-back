const router = require('express').Router()

router.get("/", (req, res)=>{
    res.json("All good here")
})

router.use("/videos", require("./video.routes"))
router.use("/adminOnly", require("./admin.routes"))

module.exports = router