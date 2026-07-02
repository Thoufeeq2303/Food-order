const express = require("express")
const app = express()
const port = 4501
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.send("")
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri =
"mongodb+srv://mohammedthoufeequf_db_user:Thoufeeq123@cluster5.bm3qoa6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5";const client = new MongoClient(uri, {
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
    const orderCollection = client.db("menus").collection("menudata")

    app.post("/uploadFood", async(req,res)=>{
      const data = req.body
const result = await orderCollection.insertMany(data)
      res.send(result)
    })

    app.get("/getFood", async(req,res)=>{
      const SA = orderCollection.find()
      const result = await SA.toArray()
      res.send(result)
    })

app.get("/getFoodByCategory", async(req,res)=>{
      const { category } = req.query;
      const filter = category ? { category } : {};
      const result = await orderCollection.find(filter).toArray();
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})