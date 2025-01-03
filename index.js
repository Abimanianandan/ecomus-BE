const mongoose = require("mongoose");
const app = require("./app");
const Config = require("./utils/Config");
console.log("Connecting to DB..?");

mongoose.connect(Config.DB_URL)
.then(()=>{
    console.log("DB Connected Successfully");  
    app.listen(Config.PORT,()=>{
        console.log(`Server Running on ${Config.PORT}`);
        
    })
})
.catch((error)=>{
   console.log("Error Connecting to DB..😵‍💫",error.message)
})