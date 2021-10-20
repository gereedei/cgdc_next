// -> /api/new-news
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Gereedei:Home2home@cluster0.j9l7b.mongodb.net/cgdcNews?retryWrites=true&w=majority"
    );
    const db = client.db();

    const newsCollection = db.collection("cgdcNews");

    const result = await newsCollection.insertOne(data);

    console.log(result, "api result");

    client.close();

    res.status(201).json({ message: "news added" });
  }
}
export default handler;
