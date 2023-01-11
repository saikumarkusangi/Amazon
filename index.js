//imports from packages

const express = require("express");
const mongoose = require("mongoose");
//imports from other files
const authRouter = require("./routes/auth");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://thekusangi007:thekusangi007@cluster0.ktvtukt.mongodb.net/?retryWrites=true&w=majority"
//middleware
//client --> middleware --> server --> client
app.use(express.json());
app.use(authRouter);

//connections
mongoose.connect(DB).then(()=>{
    console.log("connection succesful");
}).catch((e)=>{
    console.log(e);
})



app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
