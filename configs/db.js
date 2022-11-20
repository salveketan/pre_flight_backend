const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ketan:ketan123@cluster0.ixojjet.mongodb.net/preflight").then(() => {
    console.log("database connected");
}).catch((e) => {
    console.log({ message: e.message });
})


// mongodb://ketan:<password>@ac-9qijpz6-shard-00-00.ixojjet.mongodb.net:27017,ac-9qijpz6-shard-00-01.ixojjet.mongodb.net:27017,ac-9qijpz6-shard-00-02.ixojjet.mongodb.net:27017/?ssl=true&replicaSet=atlas-aq08k0-shard-0&authSource=admin&retryWrites=true&w=majority


// mongodb + srv://ketan:ketan123@cluster0.ixojjet.mongodb.net/test