const express = require('express');

const {qrrouter} = require('./QR.route');
var cors = require('cors')

 

const connectDB = require('./db'); 
//ncdjncdf


const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.use('/qrcodes', qrrouter);

// Server
app.listen(PORT, async() => {
  try {
    await connectDB
    console.log("connected to data-base")
    
} catch (error) {
   console.log(error) 
}
console.log(`server is running at port ${process.env.port}`);
});
