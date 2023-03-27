const mongoose = require("mongoose")
async function getConnection() {
    try {
        // await mongoose.connect("mongodb://localhost:27017/NGO")
        await mongoose.connect("mongodb+srv://ShelterUP:ShelterUp123@shelterup.nnl9xt9.mongodb.net/shelterup?retryWrites=true&w=majority")
        console.log("Database is Connected")
    }
    catch (error) {
        console.log(error)
    }
}
getConnection()

