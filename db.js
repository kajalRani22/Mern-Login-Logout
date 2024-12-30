const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kajal:kajal123@cluster0.sgrfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    console.log("Connecting to Database...");
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Database connection failed!", error);
  }
};



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
