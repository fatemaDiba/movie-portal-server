import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r7pee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // add movie form
    const movieDb = client.db("MovieDB");
    const movieCollection = movieDb.collection("movieCollection");
    const userCollection = movieDb.collection("userCollection");

    app.post("/add-movie", async (req, res) => {
      const formData = req.body;
      console.log(formData);
      const result = await movieCollection.insertOne(formData);
      res.send(result);
    });

    app.get("/all-movies", async (req, res) => {
      const movies = movieCollection.find();
      const result = await movies.toArray();
      res.send(result);
    });
    // details
    app.get("/all-movies/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.findOne(query);
      res.send(result);
    });

    app.delete("/all-movies/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await movieCollection.deleteOne(query);
      res.send(result);
    });
    // update
    app.put("/all-movies/:id", async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateMovie = {
        $set: {
          poster: updateData.poster,
          title: updateData.title,
          genre: updateData.genre,
          duration: updateData.duration,
          year: updateData.year,
          rating: updateData.updatedRating,
          summary: updateData.summary,
          userEmail: updateData.userEmail,
        },
      };

      const result = await movieCollection.updateOne(
        filter,
        updateMovie,
        options
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
