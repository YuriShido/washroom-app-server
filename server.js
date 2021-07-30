require('dotenv').config()
const express = require('express')
const cors = require("cors");
const mongoose = require('mongoose')
const washroomRouter = require('./routes/washroom.route')

const app = express()

app.use(cors());
// app.use(cors({
//     origin: {'http://localhost:3000', ''}, //アクセス許可するオリジン
//     credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
//     optionsSuccessStatus: 200 //レスポンスstatusを200に設定
// }))

// app.use((req, res, next) => {
//     const allowedOrigins = ['http://localhost:3000', 'https://run-van-toilet.netlify.app/'];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//     res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
//   });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.use('/washroom', washroomRouter)



const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) throw err
    console.log('Connectect to Database!')

    app.listen(PORT, () => console.log(`The server has  started on port: ${PORT}`))
})