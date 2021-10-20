import { MongoClient, ObjectId } from "mongodb";
import NewsDetail from "../../../components/news/NewsDetail";

function NewsDetails(props) {
  console.log(props.allNewsData, "<<<<<");
  return (
    <NewsDetail
      image={props.allNewsData.image}
      title={props.allNewsData.title}
      content={props.allNewsData.content}
      description={props.allNewsData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Gereedei:Home2home@cluster0.j9l7b.mongodb.net/cgdcNews?retryWrites=true&w=majority"
  );
  const db = client.db();

  const newsCollection = db.collection("cgdcNews");

  const allNews = await newsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: allNews.map((news) => ({ params: { newsId: news._id.toString() } })),
    // paths: [
    //   {
    //     params: {
    //       newsId: "news1",
    //     },
    //   },
    //   {
    //     params: {
    //       newsId: "news2",
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  const newsId = context.params.newsId;

  const client = await MongoClient.connect(
    "mongodb+srv://Gereedei:Home2home@cluster0.j9l7b.mongodb.net/cgdcNews?retryWrites=true&w=majority"
  );
  const db = client.db();

  const newsCollection = db.collection("cgdcNews");

  const selectedNews = await newsCollection.findOne({ _id: ObjectId(newsId) });

  client.close();

  return {
    props: {
      allNewsData: {
        id: selectedNews._id.toString(),
        title: selectedNews.title,
        content: selectedNews.content,
        description: selectedNews.description,
        image: selectedNews.image,
      },
    },
  };
}

export default NewsDetails;
