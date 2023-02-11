const router = require("express").Router()
const Video = require("../models/Video")

//post a video
router.post("/", async (req, res) => {
    try {
        const {titre, lien, categorie} = req.body
        if(!titre || !lien || !categorie){
            return res.send("Veuillez préciser le titre, le lien et la catégorie de la vidéo.")
        }
        await Video.create({
            titre,
            lien,
            categorie
        })
        res.json("Votre nouvelle vidéo a bien été ajoutée !")
    } catch {
        res.status(500).json({ 
            errorMessage: "Internal server error. Check the server console"
        })
    }
})

//get all the videos
router.get("/", async (req, res) => {
    try {
        const allVideos = await Video.find()
        res.json(allVideos)
    } catch {
        res.status(500).json({ 
            errorMessage: "Internal server error. Check the server console"
        })
    }
})

//get a video by its id
router.get("/video/:id", async (req, res) => {
    try {
        const {id} = req.params
        const oneVideo = await Video.findById(id)
        res.json(oneVideo)
    } catch {
        res.status(500).json({ 
            errorMessage: "Internal server error. Check the server console"
        })
    }

})

//update a video by its id
router.put("/video/:id", async (req, res) => {
    try {
        const {id} = req.params
        const oneVideo = await Video.findOneAndUpdate({_id: id}, req.body, { $set: true})
        res.json(oneVideo)
    } catch {
        res.status(500).json({ 
            errorMessage: "Internal server error. Check the server console"
        })
    }

})

//delete a video by its id
router.delete("/video/:id", async (req, res) => {
    try {
        const {id} = req.params
        await Video.findOneAndDelete({_id: id})
        res.json("La video a bien été supprimé.")
    } catch {
        res.status(500).json({ 
            errorMessage: "Internal server error. Check the server console"
        })
    }

})

module.exports = router