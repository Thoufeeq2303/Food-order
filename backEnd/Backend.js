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
const uri = "mongodb+srv://mohammedthoufeequf_db_user:Thoufeeq2303@cluster2.marapbn.mongodb.net/?appName=Cluster2";

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

    // app.get("/getFood/:id", async(req,res)=>{
    //   const id = req.params.id
    //   const filter = {_id : new ObjectId(id)}
    //   const result = await orderCollection.findOne(filter)
    //   res.send(result)
    // })

    // app.patch("/updateFood/:id", async(req,res)=>{
    //   const id = req.params.id
    //   const update = req.body
    //   const filter = {_id: new ObjectId(id)}
    //   const object = {$set:{...update}}

    //   const option = {upsert: true }
    //   const result = await orderCollection.updateMany(filter,  object)
    //   res.send(result)
    // })

    // app.delete("/deleteFood/:id", async(req,res)=>{
    //   const id = req.params.id
    //   const filter = {_id : new ObjectId(id)}
    //   const result = await orderCollection.deleteOne(filter)
    //   res.send(result)
    // })    
    // Send a ping to confirm a successful connection
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