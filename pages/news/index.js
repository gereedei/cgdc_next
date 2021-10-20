import { MongoClient } from "mongodb";
import NewsList from "../../components/news/NewsList";
import news_image_1 from "../../assets/images/news/1.jpg";
import news_image_2 from "../../assets/images/news/2.jpg";

const news_data = [
  {
    id: "news1",
    title: "Dragons are loose in the city of London",
    image: news_image_1,
    content:
      "Dragon is a big lizard like animal that breaths fire as it seems. However they can be tamed by the one and only Harry Potter who is currently the prime minister of United Kingdom",
    description: "How to kill the dragon",
  },
  {
    id: "news2",
    title: "Lord Thunder is in town",
    image: news_image_2,
    content:
      "The Mr.Thor is in Mongolia, site seeing apparently. Jane is flying with the hummer on Asgard",
    description: "Total BS",
  },
];

function News(props) {
  return <NewsList meetups={props.news_data} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Gereedei:Home2home@cluster0.j9l7b.mongodb.net/cgdcNews?retryWrites=true&w=majority"
  );
  const db = client.db();

  const newsCollection = db.collection("cgdcNews");

  const allNews = await newsCollection.find().toArray();

  client.close();

  return {
    props: {
      news_data: allNews.map((news) => ({
        title: news.title,
        content: news.content,
        image: news.image,
        description: news.description,
        id: news._id.toString(),
      })),
    },
    //revalidate: 10, refetch tings for every 10 seconds
  };
}

export default News;
