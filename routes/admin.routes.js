const router = require("express").Router()
const Admin = require("../models/Admin")

router.get("/", async (req, res) => {
    try {
        const allAdmins = await Admin.find()
        res.json(allAdmins)
    } catch(err) {
        res.status(500).json({
          errorMessage: "Internal server error. Check the server console"
        });
    }
})

module.exports = router