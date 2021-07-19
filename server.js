require('dotenv').config()
const express = require('express')
// const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose')
const washroomRouter = require('./routes/washroom.route')

const app = express()

// var corsOptions = {
//     origin: "http://localhost:3001"
//   };
  
  app.use(cors());
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: false }));


app.get('/', (req,res) => {
    res.send("Hello World")
})

app.get("/data", (req, res) => {
    res.json({ message: "Hello World!" });
});

app.use('/washroom', washroomRouter )



const PORT = process.env.PORT || 5000
// app.listen(PORT, ()=> console.log(`Server has started on port ${PORT}...`))

mongoose.connect(process.env.MONGODB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) throw err
    console.log('Connectect to Database!')

    app.listen(PORT, () => console.log(`The server has  started on port: ${PORT}`))
})