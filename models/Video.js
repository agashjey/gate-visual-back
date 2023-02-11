const mongoose = require("mongoose")
const {Schema, model} = mongoose

const videoSchema =  new Schema ({
    titre: {
        type: Schema.Types.String,
        required: true
    },
    lien: {
        type: Schema.Types.String,
        required: true
    },
    categorie: {
        type: Schema.Types.String,
        enum : ["Musique", "Voyage", "Mariage", "Evénementiel", "Corporate"],
        required: true
    }
},
{timestamps: true}
);

const Video = model("Video", videoSchema)

module.exports = Video;