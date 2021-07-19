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

    // time: {
    //     type: String
    // },

    rate: {
        type: Number,
    }

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Washroom', washroomSchema)


// username: {
//     type: String,
//     required: true
// },
// email: {
//     type: String,
//     required: true
// },
// cart: {
//     items: [{
//         productId: {
//             type: Schema.Types.ObjectId,
//             ref: 'Product',
//             required: true
//         },
//         quantity: {
//             type: Number,
//             required: true
//         }
//     }]
// }