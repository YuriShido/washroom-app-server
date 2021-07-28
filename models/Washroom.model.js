const mongoose = require('mongoose')
const Schema = mongoose.Schema

const washroomSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },

    coordinate: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required:true
        }
    },

    openTime: {
        type: String,
        default: "No data"
    },

    rate: {
        type: Number,
    },

    time: {
        type:String,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Washroom', washroomSchema)


