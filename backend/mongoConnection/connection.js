const mongoose = require("mongoose");
const url = "mongodb+srv://divyasree:divyasree@cluster0.sf0scyj.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology:true})
    //useNewUrlParser: allow users to fall back to the old parser if they find a bug in the new parser.
    //The new url parser does not support connection strings that do not have a port, like mongodb://localhost/dbname
    //useUnifiedTopology: removes support for several connection options that are no longer relevant with the new topology engine
    console.log("connected to mongo db")
}
// console.log("ok")
module.exports= connect
